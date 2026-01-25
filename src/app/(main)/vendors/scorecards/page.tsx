export const metadata = {
  title: "Vendor Scorecards | IntelligentSPM",
  description: "Individual SPM vendor deep-dives. Ratings, gotchas, best and worst use cases.",
};

const vendors = [
  { name: "Xactly", rating: "B+", strength: "Enterprise scale", weakness: "Complex implementations", color: "#38BDF8" },
  { name: "CaptivateIQ", rating: "A-", strength: "Modern UX, fast setup", weakness: "Limited enterprise features", color: "#A3E635" },
  { name: "Varicent", rating: "B", strength: "Territory planning", weakness: "Aging architecture", color: "#FF8737" },
  { name: "Spiff", rating: "B+", strength: "SMB friendly", weakness: "Scale limitations", color: "#8241C8" },
];

export default function ScorecardsPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#38BDF8] mb-4 text-center">
            Honest Vendor Reviews
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6 text-center">
            Vendor Scorecards
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12 text-center">
            Individual vendor deep-dives based on real implementation experience.
            What works, what breaks, and who it&apos;s actually for.
          </p>

          {/* Vendor Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {vendors.map((vendor) => (
              <div
                key={vendor.name}
                className="bg-[#1E293B] rounded-xl p-6 border transition-all hover:scale-[1.02] cursor-pointer"
                style={{ borderColor: `${vendor.color}30` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#E2E8F0]">{vendor.name}</h3>
                  <span
                    className="text-2xl font-bold"
                    style={{ color: vendor.color }}
                  >
                    {vendor.rating}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-[#A3E635]">Strength:</span>
                    <span className="text-[#94A3B8]"> {vendor.strength}</span>
                  </p>
                  <p>
                    <span className="text-[#EA1B85]">Weakness:</span>
                    <span className="text-[#94A3B8]"> {vendor.weakness}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#64748B] mt-12">
            More vendor scorecards coming soon. Based on real implementations, not vendor demos.
          </p>
        </div>
      </section>
    </div>
  );
}
