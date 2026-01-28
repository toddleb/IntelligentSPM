/**
 * AskSPM Feedback API
 * Records thumbs up/down feedback and updates Answer Library confidence
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { updateAnswerConfidence } from '@/lib/services/answer-library.service';

interface FeedbackRequest {
  queryId: string;
  feedbackType: 'thumbs_up' | 'thumbs_down';
  answerLibraryId?: string;
  feedbackText?: string;
  email?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as FeedbackRequest;

    // Validate required fields
    if (!body.queryId || typeof body.queryId !== 'string') {
      return NextResponse.json(
        { error: 'queryId is required' },
        { status: 400 }
      );
    }

    if (!body.feedbackType || !['thumbs_up', 'thumbs_down'].includes(body.feedbackType)) {
      return NextResponse.json(
        { error: 'feedbackType must be "thumbs_up" or "thumbs_down"' },
        { status: 400 }
      );
    }

    // Verify queryId exists
    const query = await prisma.askQuery.findUnique({
      where: { id: body.queryId },
    });

    if (!query) {
      return NextResponse.json(
        { error: 'Query not found' },
        { status: 404 }
      );
    }

    // Get request metadata
    const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      undefined;

    // Check if feedback already exists for this query from this IP (prevent duplicates)
    const existingFeedback = await prisma.queryFeedback.findFirst({
      where: {
        queryId: body.queryId,
        ipAddress: ipAddress || undefined,
      },
    });

    if (existingFeedback) {
      return NextResponse.json(
        { error: 'Feedback already submitted for this query' },
        { status: 409 }
      );
    }

    // Create feedback record
    const feedback = await prisma.queryFeedback.create({
      data: {
        queryId: body.queryId,
        answerLibraryId: body.answerLibraryId || null,
        feedbackType: body.feedbackType,
        feedbackText: body.feedbackText || null,
        email: body.email,
        ipAddress,
      },
    });

    let newConfidence: number | undefined;

    // Update library confidence if answerLibraryId provided
    if (body.answerLibraryId) {
      try {
        await updateAnswerConfidence(body.answerLibraryId, body.feedbackType);
        console.log(`[Feedback] Updated confidence for ${body.answerLibraryId}: ${body.feedbackType}`);

        // Get the updated confidence score
        const updatedAnswer = await prisma.answerLibrary.findUnique({
          where: { id: body.answerLibraryId },
          select: { confidenceScore: true },
        });

        if (updatedAnswer) {
          newConfidence = Number(updatedAnswer.confidenceScore);
        }
      } catch (error) {
        console.warn('[Feedback] Failed to update Answer Library confidence:', error);
        // Don't fail the request - feedback is still recorded
      }
    }

    return NextResponse.json({
      success: true,
      feedbackId: feedback.id,
      newConfidence,
    });
  } catch (error) {
    console.error('[Feedback API] Error:', error);
    return NextResponse.json(
      { error: 'Failed to save feedback', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET endpoint to check if user has already submitted feedback
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryId = searchParams.get('queryId');

  if (!queryId) {
    return NextResponse.json(
      { error: 'Missing queryId parameter' },
      { status: 400 }
    );
  }

  const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown';

  const existingFeedback = await prisma.queryFeedback.findFirst({
    where: {
      queryId,
      ipAddress,
    },
    select: {
      feedbackType: true,
      createdAt: true,
    },
  });

  return NextResponse.json({
    hasFeedback: !!existingFeedback,
    feedbackType: existingFeedback?.feedbackType || null,
  });
}
