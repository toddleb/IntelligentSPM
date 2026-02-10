import { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "SPM Healthcheck | IntelligentSPM",
  description: "Quiz your current SPM state against the 8 levers. Get scores and recommendations.",
};

export default function SPMHealthcheckPage() {
  return <ComingSoon tool="spm" />;
}
