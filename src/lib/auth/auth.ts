/**
 * NextAuth Instance
 *
 * Exports auth handlers, signIn, signOut, and auth for use in app.
 */

import NextAuth from 'next-auth';
import authConfig from './auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);

export { authConfig };
