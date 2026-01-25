"use client";

import { useState } from "react";

const glossaryTerms = [
  { term: "Accelerator", definition: "A rate increase that kicks in after quota attainment, rewarding over-performance with higher commission rates." },
  { term: "Clawback", definition: "Recovery of commission already paid when the underlying deal falls through, cancels, or doesn't meet qualification criteria." },
  { term: "Draw", definition: "Advance payment against future commissions, typically used for new hires or during ramp periods." },
  { term: "SPIF", definition: "Sales Performance Incentive Fund. Short-term bonus for specific behaviors or products, outside the main comp plan." },
  { term: "Quota", definition: "The sales target assigned to a rep, territory, or team. Usually set annually or semi-annually." },
  { term: "OTE", definition: "On-Target Earnings. The total compensation a rep earns when hitting 100% of quota (base + variable)." },
  { term: "409A", definition: "IRS section governing deferred compensation. Comp plans must be structured to avoid 409A violations." },
  { term: "Windfall", definition: "An unusually large deal that creates outsized commission. Often subject to special governance rules." },
];

export default function GlossaryPage() {
  const [search, setSearch] = useState("");

  const filteredTerms = glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF8737] mb-4 text-center">
            Plain Language Definitions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6 text-center">
            SPM Glossary
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12 text-center">
            No jargon, no confusion. SPM terms defined in plain language.
          </p>

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search terms..."
              className="w-full bg-[#1E293B] border border-[#FF8737]/20 rounded-xl px-4 py-3 text-[#E2E8F0] placeholder-[#64748B] focus:outline-none focus:border-[#FF8737]/50"
            />
          </div>

          {/* Terms */}
          <div className="space-y-4">
            {filteredTerms.map((item) => (
              <div
                key={item.term}
                className="bg-[#1E293B] rounded-xl p-6 border border-[#FF8737]/10"
              >
                <h3 className="text-lg font-bold text-[#FF8737] mb-2">{item.term}</h3>
                <p className="text-[#94A3B8]">{item.definition}</p>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <p className="text-center text-[#64748B] py-8">
              No terms found matching &quot;{search}&quot;
            </p>
          )}

          <p className="text-center text-[#64748B] mt-12">
            More terms coming soon. 50+ terms from the knowledge base.
          </p>
        </div>
      </section>
    </div>
  );
}
