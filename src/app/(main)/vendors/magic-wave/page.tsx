export const metadata = {
  title: "The Magic Wave | IntelligentSPM",
  description: "Annual SPM vendor landscape analysis. Honest strengths, weaknesses, and where they break.",
};

export default function MagicWavePage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8241C8] mb-4">
            Annual Vendor Analysis
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
            The Magic Wave
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
            Taking the best of Gartner and Forrester, minus the vendor influence.
            Real positioning based on real implementations.
          </p>

          {/* Placeholder for quadrant */}
          <div className="bg-[#1E293B] rounded-xl p-12 border border-[#8241C8]/20 mb-8">
            <div className="aspect-square max-w-md mx-auto border-2 border-[#8241C8]/30 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#8241C8] font-bold text-xl mb-2">2026 Magic Wave</p>
                <p className="text-[#64748B]">Coming Q1 2026</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1E293B] rounded-xl p-8 border border-[#8241C8]/10 text-left max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-[#E2E8F0] mb-4">What&apos;s in The Magic Wave?</h3>
            <ul className="space-y-3 text-[#94A3B8]">
              <li className="flex items-start gap-3">
                <span className="text-[#8241C8]">→</span>
                Quadrant positioning based on capability vs. execution
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8241C8]">→</span>
                &quot;Where They Break&quot; section for each vendor
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8241C8]">→</span>
                Implementation reality vs. sales demo
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8241C8]">→</span>
                Best fit by company size and complexity
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8241C8]">→</span>
                Available as interactive web + downloadable PDF
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
