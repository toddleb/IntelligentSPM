export const metadata = {
  title: "SPM Healthcheck | IntelligentSPM",
  description: "Quiz your current SPM state against the 8 pillars. Get scores and recommendations.",
};

export default function SPMHealthcheckPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-[#38BDF8] flex items-center justify-center text-2xl font-bold text-white mx-auto mb-8">
            SPM
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
            SPM Healthcheck
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
            Answer questions about your current SPM state. Get scored against the 8 pillars with specific recommendations for improvement.
          </p>

          {/* Placeholder for quiz */}
          <div className="bg-[#1E293B] rounded-xl p-12 border border-[#38BDF8]/20">
            <p className="text-[#64748B] mb-6">8-pillar assessment quiz coming soon</p>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {["SP", "ICM", "SI", "GC", "TP", "SD", "IC", "LR"].map((abbr) => (
                <div
                  key={abbr}
                  className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center text-sm font-bold text-[#64748B] border border-[#38BDF8]/10"
                >
                  {abbr}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
