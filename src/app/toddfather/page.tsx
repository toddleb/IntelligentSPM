import Link from "next/link";

export const metadata = {
  title: "The Toddfather | IntelligentSPM",
  description: "30 years of SPM expertise. No vendor spin, no consultant theater.",
};

export default function ToddfatherPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF8737] mb-4">
            The Voice Behind IntelligentSPM
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
            The Toddfather
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            30 years of SPM expertise. No vendor spin, no consultant theater.
            Just the truth about what works and what breaks.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1E293B] rounded-xl p-8 border border-[#FF8737]/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                The Toddfather is the authoritative voice on Sales Performance Management (SPM) -
                cutting through vendor marketing, consultant frameworks, and implementation theater
                to deliver the reality of what works and what breaks.
              </p>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                With 30 years of experience across every SPM platform, comp structure, and
                governance model, The Toddfather has seen it all: the rollout disasters, the
                &quot;best practice&quot; failures, the vendor promises that vaporize post-contract.
              </p>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                This isn&apos;t another thought leadership brand. It&apos;s a clearing house for SPM truth -
                where comp professionals, revenue leaders, and governance teams get the real story
                before they make million-dollar mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1E293B] rounded-xl p-8 border border-[#FF8737]/10 text-center">
            <h2 className="text-2xl font-bold text-[#FF8737] mb-6">The Toddfather Promise</h2>
            <div className="space-y-3 text-lg">
              <p className="text-[#E2E8F0]">No vendor spin.</p>
              <p className="text-[#E2E8F0]">No consultant theater.</p>
              <p className="text-[#E2E8F0]">No &quot;best practice&quot; bullshit.</p>
              <p className="text-[#94A3B8] mt-6">
                Just the truth about what works, what breaks, and why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <Link href="/toddfather/speaking">
            <div className="bg-[#1E293B] rounded-xl p-6 border border-[#FF8737]/10 hover:border-[#FF8737]/30 transition-all cursor-pointer">
              <h3 className="text-xl font-bold text-[#E2E8F0] mb-2">Speaking</h3>
              <p className="text-[#94A3B8]">Keynotes, workshops, and executive sessions.</p>
            </div>
          </Link>
          <Link href="/toddfather/contact">
            <div className="bg-[#1E293B] rounded-xl p-6 border border-[#FF8737]/10 hover:border-[#FF8737]/30 transition-all cursor-pointer">
              <h3 className="text-xl font-bold text-[#E2E8F0] mb-2">Contact</h3>
              <p className="text-[#94A3B8]">Book The Toddfather for your event or project.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#64748B] mb-4">Stay connected</p>
          <Link href="/syndicate">
            <button className="px-8 py-4 rounded-xl text-white font-bold text-lg bg-[#FF8737] hover:bg-[#FF8737]/90 transition-all hover:scale-105">
              Join The Syndicate
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
