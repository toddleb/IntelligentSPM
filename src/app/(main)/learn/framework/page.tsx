import Link from "next/link";

export const metadata = {
  title: "8 Pillars Framework | IntelligentSPM",
  description: "The 8 pillars of SPM with 929 knowledge base cards.",
};

const pillars = [
  { name: "Sales Planning", abbr: "SP", color: "#2563eb", cards: 187, desc: "Territory, quota, capacity" },
  { name: "ICM", abbr: "ICM", color: "#16a34a", cards: 231, desc: "Plans, payments, statements" },
  { name: "Sales Intelligence", abbr: "SI", color: "#9333ea", cards: 69, desc: "Analytics, forecasting, AI" },
  { name: "Governance", abbr: "GC", color: "#dc2626", cards: 62, desc: "SOX, 409A, controls" },
  { name: "Technology", abbr: "TP", color: "#0891b2", cards: 127, desc: "Vendors, integrations" },
  { name: "Strategy", abbr: "SD", color: "#ea580c", cards: 90, desc: "Pay philosophy, design" },
  { name: "Implementation", abbr: "IC", color: "#ca8a04", cards: 82, desc: "Change, training" },
  { name: "Legal", abbr: "LR", color: "#4f46e5", cards: 81, desc: "Wage laws, compliance" },
];

export default function FrameworkPage() {
  const totalCards = pillars.reduce((sum, p) => sum + p.cards, 0);

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#9333ea] mb-4 text-center">
            The SPM Framework
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6 text-center">
            The 8 Pillars of SPM
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-4 text-center">
            Comprehensive sales performance management across every critical dimension.
          </p>
          <p className="text-center mb-12">
            <span className="text-[#9333ea] font-bold">{totalCards}</span>
            <span className="text-[#64748B]"> knowledge base cards</span>
          </p>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <Link key={pillar.name} href={`/learn/framework?pillar=${pillar.abbr.toLowerCase()}`}>
                <div
                  className="bg-[#1E293B] rounded-xl p-6 text-center border transition-all hover:scale-105 cursor-pointer h-full"
                  style={{ borderColor: `${pillar.color}30` }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white"
                    style={{ backgroundColor: pillar.color }}
                  >
                    {pillar.abbr}
                  </div>
                  <h3 className="font-bold text-[#E2E8F0] mb-1">{pillar.name}</h3>
                  <p className="text-xs text-[#64748B] mb-2">{pillar.desc}</p>
                  <p className="text-sm" style={{ color: pillar.color }}>
                    {pillar.cards} cards
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Placeholder for card browser */}
          <div className="mt-16 bg-[#1E293B] rounded-xl p-8 border border-[#9333ea]/20 text-center">
            <p className="text-[#64748B]">
              Knowledge base card browser coming soon.
              <br />
              <span className="text-[#9333ea]">929 cards</span> ported from SGM.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
