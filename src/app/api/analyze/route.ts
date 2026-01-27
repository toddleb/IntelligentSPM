import { NextRequest, NextResponse } from 'next/server'
import { analyze } from '@aicr/sda-core'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Supports multiple input formats:
    // - documentText: plain text content
    // - documentBase64: base64 encoded file (PDF, DOCX, TXT)
    // - tier: 'quick' | 'summary' | 'full' (default: 'quick')
    // - context: 'auto' | 'sgm-governance' | 'scm-comp-plan' (default: 'auto')
    const result = await analyze({
      documentText: body.documentText,
      documentBase64: body.documentBase64,
      tier: body.tier || 'quick',
      context: body.context || 'auto',
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: 'Analysis failed', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
