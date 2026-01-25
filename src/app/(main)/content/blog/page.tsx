import Link from "next/link";

export const metadata = {
  title: "Blog | IntelligentSPM",
  description: "SPM reality from The Toddfather. No vendor spin, no consultant theater.",
};

const posts = [
  {
    title: "SPM 101: What the Vendors Won't Tell You",
    excerpt: "The real fundamentals of Sales Performance Management. What it is, why it breaks, and what actually works.",
    category: "Foundation",
    color: "#38BDF8",
    status: "Coming Soon",
  },
  {
    title: "Your Comp Oversight Is Held Together with Duct Tape",
    excerpt: "The governance layer everyone skips. Why your SPM program is one audit away from chaos.",
    category: "Governance",
    color: "#A3E635",
    status: "Coming Soon",
  },
  {
    title: "Why SPM Governance Is Everyone's Problem and No One's Job",
    excerpt: "Finance thinks Sales owns it. Sales thinks Ops owns it. Ops thinks Finance owns it. Nobody owns it.",
    category: "Governance",
    color: "#A3E635",
    status: "Coming Soon",
  },
  {
    title: "From Chaos to Control: SPM Governance That Works",
    excerpt: "The practical guide to building governance that scales. Introducing SGM.",
    category: "Governance",
    color: "#A3E635",
    status: "Coming Soon",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#38BDF8] mb-4 text-center">
            The Toddfather Writes
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6 text-center">
            Blog
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12 text-center">
            SPM reality. No vendor spin, no consultant theater. Just the truth about what works and what breaks.
          </p>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="bg-[#1E293B] rounded-xl p-6 border transition-all hover:scale-[1.01] cursor-pointer"
                style={{ borderColor: `${post.color}20` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="px-3 py-1 text-xs font-bold rounded-full"
                    style={{ backgroundColor: `${post.color}20`, color: post.color }}
                  >
                    {post.category}
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-[#64748B]/20 text-[#64748B]">
                    {post.status}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#E2E8F0] mb-2">{post.title}</h2>
                <p className="text-[#94A3B8]">{post.excerpt}</p>
              </div>
            ))}
          </div>

          {/* Subscribe CTA */}
          <div className="mt-12 text-center">
            <p className="text-[#64748B] mb-4">Get new posts first</p>
            <Link href="/syndicate">
              <button className="px-6 py-3 rounded-xl text-white font-bold bg-[#FF8737] hover:bg-[#FF8737]/90 transition-all">
                Join The Syndicate
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
