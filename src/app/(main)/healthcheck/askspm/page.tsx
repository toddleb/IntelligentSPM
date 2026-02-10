import { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "AskSPM | IntelligentSPM",
  description: "Query The Toddfather's brain. 30 years of SPM expertise powered by RAG.",
};

export default function AskSPMPage() {
  return <ComingSoon tool="askspm" />;
}
