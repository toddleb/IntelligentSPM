import { Metadata } from "next";
import CompPlanHealthcheckClient from "./comp-plan-client";

export const metadata: Metadata = {
  title: "Comp Plan Healthcheck | IntelligentSPM",
  description: "Upload your comp plan. AI analyzes, scores, and returns suggestions.",
};

export default function CompPlanHealthcheckPage() {
  return <CompPlanHealthcheckClient />;
}
