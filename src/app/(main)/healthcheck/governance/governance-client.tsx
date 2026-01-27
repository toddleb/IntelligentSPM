'use client';

import { useState } from 'react';
import { AuthGate } from '@/components/auth/AuthGate';
import GovernanceContent from './governance-content';

export default function GovernanceHealthcheckClient() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  return (
    <AuthGate
      healthcheckType="governance"
      title="Governance Healthcheck"
      subtitle="Upload your governance policy. Get gap analysis against 17 SCP policies."
      onAuthComplete={(email) => setUserEmail(email)}
    >
      <GovernanceContent userEmail={userEmail} />
    </AuthGate>
  );
}
