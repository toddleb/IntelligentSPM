import { NextRequest, NextResponse } from 'next/server';
import {
  canRunAnalysis,
  recordAnalysisUsed,
  logBlockedAnalysis,
} from '@/lib/services/analysis-gate';

// Dynamic import for sda-core (optional dependency - may not be available on Vercel)
let analyze: ((params: {
  documentText?: string;
  documentBase64?: string;
  tier?: string;
  context?: string;
}) => Promise<{ quickCard?: { coverageScore?: number } }>) | null = null;

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const sdaCore = require('@aicr/sda-core');
  analyze = sdaCore.analyze;
} catch {
  console.warn('[Analyze API] @aicr/sda-core not available - analysis endpoint disabled');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body.email;

    // Get metadata for logging
    const metadata = {
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
      userAgent: request.headers.get('user-agent') || undefined,
    };

    // Check if user can run analysis (if email provided)
    if (email) {
      const gateResult = await canRunAnalysis(email);

      if (!gateResult.allowed) {
        await logBlockedAnalysis(
          email,
          gateResult.reason || 'Unknown reason',
          gateResult.code || 'UNKNOWN',
          metadata
        );

        return NextResponse.json(
          {
            error: 'Analysis not allowed',
            code: gateResult.code,
            message: gateResult.reason,
          },
          { status: 403 }
        );
      }
    }

    // Check if sda-core is available
    if (!analyze) {
      return NextResponse.json(
        {
          error: 'Analysis service unavailable',
          message: 'Document analysis is not available in this environment. Please try again later.',
        },
        { status: 503 }
      );
    }

    // Determine analysis type from context
    const analysisType = body.context === 'sgm-governance'
      ? 'governance'
      : body.context === 'scm-comp-plan'
        ? 'comp-plan'
        : 'auto';

    // Run the analysis
    const result = await analyze({
      documentText: body.documentText,
      documentBase64: body.documentBase64,
      tier: body.tier || 'quick',
      context: body.context || 'auto',
    });

    // Record the analysis usage (if email provided)
    if (email) {
      try {
        await recordAnalysisUsed(
          email,
          analysisType,
          {
            score: result.quickCard?.coverageScore,
            coveragePercent: result.quickCard?.coverageScore,
            rawOutput: result,
            rawInput: body.documentText ? { textLength: body.documentText.length } : { hasBase64: true },
          },
          metadata
        );
      } catch (recordError) {
        // Log but don't fail the request
        console.error('Failed to record analysis usage:', recordError);
      }
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Analysis failed', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
