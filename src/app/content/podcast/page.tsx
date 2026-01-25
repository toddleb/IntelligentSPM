export const metadata = {
  title: "Podcast | IntelligentSPM",
  description: "The Toddfather podcast. SPM reality in audio form.",
};

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8241C8] mb-4">
            The Toddfather Speaks
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
            Podcast
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
            SPM reality in audio form. Each episode dives deep into a topic from the blog,
            with additional insights and real examples.
          </p>

          {/* Coming soon */}
          <div className="bg-[#1E293B] rounded-xl p-12 border border-[#8241C8]/20">
            <div className="text-[#8241C8] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">Podcast Coming Soon</h3>
            <p className="text-[#94A3B8] max-w-lg mx-auto">
              Audio versions of blog posts, plus extended discussions.
              Subscribe to The Syndicate to get notified when we launch.
            </p>
          </div>

          {/* How it works */}
          <div className="mt-12 bg-[#1E293B] rounded-xl p-8 border border-[#8241C8]/10 text-left">
            <h3 className="text-lg font-bold text-[#E2E8F0] mb-4">Content Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-[#38BDF8]/20 text-[#38BDF8]">Blog Post</span>
              <span className="text-[#64748B]">→</span>
              <span className="px-4 py-2 rounded-full bg-[#FF8737]/20 text-[#FF8737]">Newsletter</span>
              <span className="text-[#64748B]">→</span>
              <span className="px-4 py-2 rounded-full bg-[#8241C8]/20 text-[#8241C8]">Podcast</span>
              <span className="text-[#64748B]">→</span>
              <span className="px-4 py-2 rounded-full bg-[#A3E635]/20 text-[#A3E635]">Video</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
