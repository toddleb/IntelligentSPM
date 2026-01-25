export const metadata = {
  title: "The Sit-Down | IntelligentSPM",
  description: "Comprehensive SPM vendor guide. When you need to sit down before picking a vendor.",
};

export default function SitDownPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF8737] mb-4">
            Vendor Decision Framework
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
            The Sit-Down
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
            When you need to sit down before picking a vendor.
            The honest conversation you should have before signing anything.
          </p>

          {/* Coming soon */}
          <div className="bg-[#1E293B] rounded-xl p-12 border border-[#FF8737]/20">
            <div className="text-[#FF8737] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">The Sit-Down is Coming</h3>
            <p className="text-[#94A3B8] max-w-lg mx-auto">
              A comprehensive vendor comparison guide. Decision frameworks, implementation checklists,
              and the questions you should ask that vendors hope you won&apos;t.
            </p>
          </div>

          {/* What it covers */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">
            {[
              { title: "Vendor Comparison Matrix", desc: "Side-by-side feature comparison with reality scores" },
              { title: "Implementation Checklist", desc: "What to verify before signing" },
              { title: "Questions They Hate", desc: "The questions vendors hope you won't ask" },
              { title: "Red Flags Guide", desc: "Warning signs from real implementations" },
            ].map((item) => (
              <div key={item.title} className="bg-[#1E293B] rounded-xl p-6 border border-[#FF8737]/10">
                <h4 className="font-bold text-[#E2E8F0] mb-2">{item.title}</h4>
                <p className="text-sm text-[#94A3B8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
