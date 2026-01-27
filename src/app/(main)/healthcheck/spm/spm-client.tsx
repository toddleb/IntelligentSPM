'use client';

import { useState } from 'react';
import { AuthGate } from '@/components/auth/AuthGate';
import SPMContent from './spm-content';

export default function SPMHealthcheckClient() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  return (
    <AuthGate
      healthcheckType="spm"
      title="SPM Healthcheck"
      subtitle="24 questions. 10 minutes. Know where you stand."
      onAuthComplete={(email) => setUserEmail(email)}
    >
      <SPMContent userEmail={userEmail} />
    </AuthGate>
  );
}
