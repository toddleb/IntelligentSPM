export const metadata = {
  title: "Videos | IntelligentSPM",
  description: "The Toddfather on video. SPM reality in visual form.",
};

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#A3E635] mb-4">
            The Toddfather on Screen
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
            Videos
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
            Popular podcast episodes become videos. The Toddfather avatar delivers SPM truth
            in short, shareable clips.
          </p>

          {/* Coming soon */}
          <div className="bg-[#1E293B] rounded-xl p-12 border border-[#A3E635]/20">
            <div className="text-[#A3E635] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">Video Library Coming Soon</h3>
            <p className="text-[#94A3B8] max-w-lg mx-auto">
              Popular content gets the video treatment. Toddfather avatar via HeyGen.
              Built for TikTok, YouTube Shorts, and LinkedIn.
            </p>
          </div>

          {/* Platforms */}
          <div className="mt-12">
            <p className="text-[#64748B] mb-4">Coming to:</p>
            <div className="flex justify-center gap-4">
              {["TikTok", "YouTube Shorts", "LinkedIn", "Instagram"].map((platform) => (
                <span key={platform} className="px-4 py-2 rounded-full bg-[#1E293B] text-[#94A3B8] text-sm">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
