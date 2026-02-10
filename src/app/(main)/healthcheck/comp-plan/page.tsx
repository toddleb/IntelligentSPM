import { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Comp Plan Healthcheck | IntelligentSPM",
  description: "Upload your comp plan. AI analyzes, scores, and returns suggestions.",
};

export default function CompPlanHealthcheckPage() {
  return <ComingSoon tool="comp-plan" />;
}
