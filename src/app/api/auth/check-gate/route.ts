/**
 * Check Gate API
 *
 * Checks if a user can run an analysis.
 * Returns gate status with reason if blocked.
 */

import { NextRequest, NextResponse } from 'next/server';
import { canRunAnalysis, logBlockedAnalysis } from '@/lib/services/analysis-gate';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { allowed: false, reason: 'Email is required', code: 'MISSING_EMAIL' },
        { status: 400 }
      );
    }

    const result = await canRunAnalysis(email);

    // Log blocked attempts
    if (!result.allowed && result.code) {
      await logBlockedAnalysis(
        email,
        result.reason || 'Unknown reason',
        result.code,
        {
          ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
          userAgent: request.headers.get('user-agent') || undefined,
        }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error checking gate:', error);
    return NextResponse.json(
      { allowed: false, reason: 'Internal error checking access', code: 'ERROR' },
      { status: 500 }
    );
  }
}
