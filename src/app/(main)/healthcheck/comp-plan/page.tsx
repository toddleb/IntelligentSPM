export const metadata = {
  title: "Comp Plan Healthcheck | IntelligentSPM",
  description: "Upload your comp plan. AI analyzes, scores, and returns suggestions.",
};

export default function CompPlanHealthcheckPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-[#8241C8] flex items-center justify-center text-2xl font-bold text-white">
              AI
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
            Comp Plan Healthcheck
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
            Upload your comp plan document. GPT-4o analyzes structure, identifies risks, and returns actionable suggestions in card format.
          </p>

          {/* Upload placeholder */}
          <div className="bg-[#1E293B] rounded-xl p-12 border-2 border-dashed border-[#8241C8]/30 hover:border-[#8241C8]/50 transition-colors cursor-pointer">
            <div className="text-[#8241C8] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-[#E2E8F0] font-semibold mb-2">Drop your comp plan here</p>
            <p className="text-[#64748B] text-sm">PDF, Word, or Excel - Max 10MB</p>
          </div>

          <p className="text-[#64748B] text-sm mt-8">
            Powered by GPT-4o - Your documents are analyzed securely and not stored.
          </p>
        </div>
      </section>
    </div>
  );
}
