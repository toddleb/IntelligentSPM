'use client';

import { useState } from 'react';
import { AuthGate } from '@/components/auth/AuthGate';
import CompPlanContent from './comp-plan-content';

export default function CompPlanHealthcheckClient() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  return (
    <AuthGate
      healthcheckType="comp-plan"
      title="Comp Plan Healthcheck"
      subtitle="Upload your comp plan. AI analyzes, scores, and returns suggestions."
      onAuthComplete={(email) => setUserEmail(email)}
    >
      <CompPlanContent userEmail={userEmail} />
    </AuthGate>
  );
}
