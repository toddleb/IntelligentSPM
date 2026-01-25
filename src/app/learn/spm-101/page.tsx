export const metadata = {
  title: "SPM 101 | IntelligentSPM",
  description: "The fundamentals of Sales Performance Management. What the vendors won't tell you.",
};

export default function SPM101Page() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#38BDF8] mb-4 text-center">
            The Foundation
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6 text-center">
            SPM 101
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12 text-center">
            What the vendors won&apos;t tell you. The real fundamentals of Sales Performance Management.
          </p>

          {/* Content placeholder */}
          <div className="bg-[#1E293B] rounded-xl p-8 border border-[#38BDF8]/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-[#94A3B8] text-center py-12">
                SPM 101 content coming soon. This will be the first blog post:
                <br />
                <span className="text-[#38BDF8] font-semibold">&quot;SPM 101: What the Vendors Won&apos;t Tell You&quot;</span>
              </p>
            </div>
          </div>

          {/* Topics Preview */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-[#E2E8F0] mb-6 text-center">What You&apos;ll Learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "What SPM actually is (and isn't)",
                "The 8 pillars that make up SPM",
                "Why most implementations fail",
                "The vendor landscape reality",
                "Governance: the layer everyone skips",
                "Where AI helps (and where it hurts)",
                "Building an SPM team",
                "Measuring SPM success",
              ].map((topic) => (
                <div key={topic} className="flex items-center gap-3 text-[#94A3B8]">
                  <span className="text-[#38BDF8]">→</span>
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
