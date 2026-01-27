/**
 * NextAuth Type Extensions
 *
 * Extends default NextAuth types with our custom fields.
 */

import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      image?: string | null;
      linkedinId?: string;
      companyId?: string;
      companyDomain?: string;
      analysisUsed?: boolean;
      companyAnalysisCount?: number;
      companyMaxAnalyses?: number;
    };
  }

  interface User {
    linkedinId?: string;
    companyId?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    userId?: string;
    linkedinId?: string;
    companyId?: string;
    companyDomain?: string;
    analysisUsed?: boolean;
    companyAnalysisCount?: number;
    companyMaxAnalyses?: number;
  }
}
