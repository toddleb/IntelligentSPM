import Link from "next/link";
import { PrimaryButton } from "@/components/ui";

export const metadata = {
  title: "The Vault | IntelligentSPM",
  description: "SPM 101, 8 levers framework, 17 policies, and glossary. The complete SPM reference library.",
};

const sections = [
  {
    name: "SPM 101",
    description: "New to SPM? Start here. The fundamentals of sales performance management without the vendor spin.",
    href: "/learn/spm-101",
    color: "#38BDF8",
    badge: "Foundation",
    readTime: "15 min",
  },
  {
    name: "The 8 Levers of Intelligent SPM",
    description: "Deep dive into the complete SPM framework. 929 knowledge base cards organized by lever.",
    href: "/levers",
    color: "#FE9200",
    badge: "929 cards",
    readTime: "20 min",
  },
  {
    name: "17 SCP Policies",
    description: "Sales Compensation Policies covering clawback, quota, windfall, 409A, and more. The complete governance package.",
    href: "/learn/policies",
    color: "#A3E635",
    badge: "17 policies",
    readTime: "30 min",
  },
  {
    name: "SPM Glossary",
    description: "50+ SPM terms defined in plain language. No jargon, no circular definitions, no vendor-speak.",
    href: "/learn/glossary",
    color: "#A855F7",
    badge: "50+ terms",
    readTime: "10 min",
  },
];

export default function VaultPage() {
  return (
    <div className="min-h-screen bg-[#1a0e2e]">
      {/* Header */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-sm font-bold text-[#A855F7] uppercase tracking-widest mb-2">
              The Vault
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-2">
              The Complete SPM Reference
            </h1>
            <p className="text-[#CBD5E1]">
              30 years of sales compensation expertise. Organized, accessible, ungated. No vendor agenda.
            </p>
          </div>

          {/* Vault Cards — Intel-style compact layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <Link key={section.name} href={section.href}>
                <article
                  className="group bg-white/5 rounded-xl border border-[#64748B]/20 hover:border-[#A855F7]/30 transition-all cursor-pointer h-full flex flex-col p-5"
                  style={{ borderTopColor: section.color, borderTopWidth: 2 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-2 py-0.5 text-xs font-bold rounded"
                      style={{
                        backgroundColor: `${section.color}20`,
                        color: section.color,
                      }}
                    >
                      {section.badge}
                    </span>
                    <span className="text-xs text-[#64748B]">{section.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#E2E8F0] mb-2 group-hover:text-[#A855F7] transition-colors">
                    {section.name}
                  </h3>
                  <p className="text-sm text-[#CBD5E1] flex-1">
                    {section.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">
            New to SPM?
          </h2>
          <p className="text-[#CBD5E1] mb-6">
            Start with the fundamentals. No vendor spin, no consultant theater.
          </p>
          <PrimaryButton href="/learn/spm-101" size="large">
            Start with SPM 101
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
}
