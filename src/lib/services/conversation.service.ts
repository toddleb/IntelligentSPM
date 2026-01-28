/**
 * Conversation Service for AskSPM Multi-turn
 * Manages session-based conversation history with sliding expiration
 */

import { prisma } from '@/lib/db/prisma';
import { randomUUID } from 'crypto';
import { Prisma } from '@prisma/client';

// ============================================================================
// INTERFACES
// ============================================================================

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ConversationSession {
  id: string;
  sessionToken: string;
  messages: ConversationMessage[];
  userId?: string;
  expiresAt: Date;
}

// ============================================================================
// CONFIGURATION
// ============================================================================

// Session expires after 24 hours of inactivity (sliding expiration)
const SESSION_TTL_MS = 24 * 60 * 60 * 1000;

// Maximum messages to store per session (older messages trimmed)
const MAX_STORED_MESSAGES = 50;

// Default messages to return for LLM context (3 exchanges = 6 messages)
const DEFAULT_CONTEXT_MESSAGES = 6;

// ============================================================================
// SESSION MANAGEMENT
// ============================================================================

/**
 * Create a new conversation session
 *
 * @param userId - Optional user ID to associate with the session
 * @returns Session token and expiration date for client storage
 */
export async function createSession(
  userId?: string
): Promise<{ sessionToken: string; expiresAt: Date }> {
  const sessionToken = randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);

  await prisma.conversationSession.create({
    data: {
      sessionToken,
      messagesJson: [],
      userId,
      expiresAt,
    },
  });

  return { sessionToken, expiresAt };
}

/**
 * Get a session by token
 *
 * Implements sliding expiration - extends TTL on each access.
 * Returns null if session is expired or not found.
 *
 * @param sessionToken - The session token to look up
 * @returns The conversation session or null
 */
export async function getSession(
  sessionToken: string
): Promise<ConversationSession | null> {
  const session = await prisma.conversationSession.findUnique({
    where: { sessionToken },
  });

  // Not found
  if (!session) {
    return null;
  }

  // Check if expired
  if (session.expiresAt && session.expiresAt <= new Date()) {
    // Session expired - clean it up
    await prisma.conversationSession.delete({
      where: { id: session.id },
    }).catch(() => {
      // Ignore delete errors (might already be deleted)
    });
    return null;
  }

  // Extend expiry on access (sliding expiration)
  const newExpiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await prisma.conversationSession.update({
    where: { id: session.id },
    data: { expiresAt: newExpiresAt },
  });

  return {
    id: session.id,
    sessionToken: session.sessionToken,
    messages: (session.messagesJson as unknown as ConversationMessage[]) || [],
    userId: session.userId || undefined,
    expiresAt: newExpiresAt,
  };
}

/**
 * Add a message to the session's conversation history
 *
 * Appends the message and trims to max 50 messages (older removed).
 * Updates session's updated_at timestamp.
 *
 * @param sessionToken - The session token
 * @param message - The message to add
 */
export async function addMessage(
  sessionToken: string,
  message: ConversationMessage
): Promise<void> {
  const session = await prisma.conversationSession.findUnique({
    where: { sessionToken },
  });

  if (!session) {
    throw new Error('Session not found');
  }

  // Check if expired
  if (session.expiresAt && session.expiresAt <= new Date()) {
    throw new Error('Session expired');
  }

  const existingMessages = (session.messagesJson as unknown as ConversationMessage[]) || [];

  // Add new message
  const updatedMessages = [...existingMessages, message];

  // Trim to max messages (keep most recent)
  const trimmedMessages = updatedMessages.slice(-MAX_STORED_MESSAGES);

  // Update session with new messages and extended expiry
  await prisma.conversationSession.update({
    where: { sessionToken },
    data: {
      messagesJson: trimmedMessages as unknown as Prisma.InputJsonValue,
      expiresAt: new Date(Date.now() + SESSION_TTL_MS),
    },
  });
}

/**
 * Get conversation history for LLM context
 *
 * Returns the last N messages from the session.
 * Default is 6 messages (3 exchanges).
 *
 * @param sessionToken - The session token
 * @param limit - Maximum messages to return (default: 6)
 * @returns Array of messages for LLM context
 */
export async function getConversationHistory(
  sessionToken: string,
  limit: number = DEFAULT_CONTEXT_MESSAGES
): Promise<ConversationMessage[]> {
  const session = await prisma.conversationSession.findUnique({
    where: { sessionToken },
  });

  if (!session) {
    return [];
  }

  // Check if expired
  if (session.expiresAt && session.expiresAt <= new Date()) {
    return [];
  }

  const messages = (session.messagesJson as unknown as ConversationMessage[]) || [];

  // Return last N messages
  return messages.slice(-limit);
}

/**
 * Clear/delete a session (for "New Chat" button)
 *
 * @param sessionToken - The session token to delete
 */
export async function clearSession(sessionToken: string): Promise<void> {
  await prisma.conversationSession.delete({
    where: { sessionToken },
  }).catch(() => {
    // Ignore if not found - idempotent operation
  });
}

/**
 * Delete all expired sessions (cleanup job)
 *
 * Call this periodically to clean up stale sessions.
 *
 * @returns Number of sessions deleted
 */
export async function cleanupExpiredSessions(): Promise<number> {
  const result = await prisma.conversationSession.deleteMany({
    where: {
      expiresAt: { lt: new Date() },
    },
  });

  return result.count;
}

// ============================================================================
// CONVENIENCE FUNCTIONS
// ============================================================================

/**
 * Get or create a conversation session (convenience wrapper)
 *
 * If a valid session token is provided and the session exists/is not expired,
 * returns the existing session. Otherwise creates a new session.
 *
 * @param sessionToken - Optional existing session token
 * @param userId - Optional user ID for new sessions
 * @returns The session with token and expiration
 */
export async function getOrCreateSession(
  sessionToken?: string,
  userId?: string
): Promise<ConversationSession> {
  // Try to get existing session
  if (sessionToken) {
    const existing = await getSession(sessionToken);
    if (existing) {
      return existing;
    }
  }

  // Create new session
  const { sessionToken: newToken, expiresAt } = await createSession(userId);

  return {
    id: '', // Will be populated by the database
    sessionToken: newToken,
    messages: [],
    userId,
    expiresAt,
  };
}

/**
 * Add a message exchange to the session (convenience wrapper)
 *
 * Adds both user and assistant messages in a single call.
 * Also exported as addMessageToSession for backward compatibility.
 *
 * @param sessionToken - The session token
 * @param userMessage - The user's message content
 * @param assistantMessage - The assistant's response content
 */
export async function addMessageExchange(
  sessionToken: string,
  userMessage: string,
  assistantMessage: string
): Promise<void> {
  const timestamp = new Date().toISOString();

  await addMessage(sessionToken, {
    role: 'user',
    content: userMessage,
    timestamp,
  });

  await addMessage(sessionToken, {
    role: 'assistant',
    content: assistantMessage,
    timestamp,
  });
}

/**
 * Backward compatibility alias for addMessageExchange
 * @deprecated Use addMessageExchange instead
 */
export const addMessageToSession = addMessageExchange;

/**
 * Get conversation context for LLM (convenience wrapper)
 *
 * Returns messages formatted for LLM context (without timestamps).
 *
 * @param messages - Array of conversation messages
 * @param maxMessages - Maximum messages to include
 * @returns Messages formatted for LLM
 */
export function getConversationContext(
  messages: ConversationMessage[],
  maxMessages: number = DEFAULT_CONTEXT_MESSAGES
): Array<{ role: 'user' | 'assistant'; content: string }> {
  const recentMessages = messages.slice(-maxMessages);

  return recentMessages.map((m) => ({
    role: m.role,
    content: m.content,
  }));
}

/**
 * Get session statistics
 *
 * @returns Statistics about active sessions
 */
export async function getSessionStats(): Promise<{
  activeSessions: number;
  totalMessages: number;
}> {
  const sessions = await prisma.conversationSession.findMany({
    where: {
      expiresAt: { gt: new Date() },
    },
    select: {
      messagesJson: true,
    },
  });

  const totalMessages = sessions.reduce((sum, s) => {
    const messages = (s.messagesJson as unknown as ConversationMessage[]) || [];
    return sum + messages.length;
  }, 0);

  return {
    activeSessions: sessions.length,
    totalMessages,
  };
}
