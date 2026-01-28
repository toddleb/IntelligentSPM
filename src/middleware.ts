/**
 * Middleware - Rate Limiting
 *
 * Following aicr patterns for rate limiting.
 * Uses in-memory store (upgrade to Redis for production scaling).
 */

import { NextRequest, NextResponse } from 'next/server';

// Rate limit configurations per endpoint type
const rateLimitConfigs: Record<string, { windowMs: number; maxRequests: number }> = {
  // Analysis endpoints - expensive AI calls
  '/api/analyze': { windowMs: 60 * 60 * 1000, maxRequests: 5 }, // 5 per hour per IP
  '/api/auth/check-gate': { windowMs: 60 * 1000, maxRequests: 20 }, // 20 per minute

  // Auth endpoints
  '/api/auth': { windowMs: 15 * 60 * 1000, maxRequests: 10 }, // 10 per 15 min

  // Default for other API routes
  default: { windowMs: 60 * 1000, maxRequests: 60 }, // 60 per minute
};

// In-memory rate limit store (use Redis for production)
const requestStore = new Map<string, { count: number; resetTime: number }>();

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of requestStore.entries()) {
    if (record.resetTime < now) {
      requestStore.delete(key);
    }
  }
}, 60 * 1000); // Clean every minute

function getClientId(request: NextRequest): string {
  // Try to get real IP from headers (Vercel, Cloudflare, etc.)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  const ip = cfConnectingIp || realIp || forwardedFor?.split(',')[0]?.trim() || 'unknown';
  return `ip:${ip}`;
}

function getConfigForPath(path: string): { windowMs: number; maxRequests: number } {
  // Check for exact match first
  if (rateLimitConfigs[path]) {
    return rateLimitConfigs[path];
  }

  // Check for prefix match
  for (const [prefix, config] of Object.entries(rateLimitConfigs)) {
    if (prefix !== 'default' && path.startsWith(prefix)) {
      return config;
    }
  }

  return rateLimitConfigs.default;
}

function checkRateLimit(
  request: NextRequest,
  config: { windowMs: number; maxRequests: number }
): { allowed: boolean; remaining: number; resetTime: number } {
  const clientId = getClientId(request);
  const key = `${clientId}:${request.nextUrl.pathname}`;
  const now = Date.now();

  let record = requestStore.get(key);

  // Create new record if none exists or window expired
  if (!record || record.resetTime < now) {
    record = { count: 1, resetTime: now + config.windowMs };
    requestStore.set(key, record);
    return { allowed: true, remaining: config.maxRequests - 1, resetTime: record.resetTime };
  }

  // Increment counter
  record.count++;

  // Check if over limit
  if (record.count > config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  return {
    allowed: true,
    remaining: config.maxRequests - record.count,
    resetTime: record.resetTime,
  };
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Only rate limit API routes
  if (!path.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Skip health check endpoints
  if (path === '/api/health') {
    return NextResponse.next();
  }

  // Skip session endpoint - called frequently by SessionProvider
  if (path === '/api/auth/session') {
    return NextResponse.next();
  }

  const config = getConfigForPath(path);
  const { allowed, remaining, resetTime } = checkRateLimit(request, config);

  // Add rate limit headers to all responses
  const headers = new Headers();
  headers.set('X-RateLimit-Limit', config.maxRequests.toString());
  headers.set('X-RateLimit-Remaining', remaining.toString());
  headers.set('X-RateLimit-Reset', Math.ceil(resetTime / 1000).toString());

  if (!allowed) {
    const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
    headers.set('Retry-After', retryAfter.toString());

    return NextResponse.json(
      {
        error: 'Too many requests',
        message: `Rate limit exceeded. Try again in ${retryAfter} seconds.`,
        retryAfter,
      },
      {
        status: 429,
        headers,
      }
    );
  }

  // Continue with the request, adding rate limit headers
  const response = NextResponse.next();
  headers.forEach((value, key) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: [
    // Match all API routes
    '/api/:path*',
  ],
};
