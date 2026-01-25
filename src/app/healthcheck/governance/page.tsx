export const metadata = {
  title: "Governance Healthcheck | IntelligentSPM",
  description: "Upload your governance policy. Get gap analysis against 17 SCP policies.",
};

export default function GovernanceHealthcheckPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-[#A3E635] flex items-center justify-center text-2xl font-bold text-[#0F172A] mx-auto mb-8">
            GOV
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
            Governance Healthcheck
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
            Upload your governance or policy document. Get gap analysis against our 17 SCP (Sales Compensation Policy) standards.
          </p>

          {/* Upload placeholder */}
          <div className="bg-[#1E293B] rounded-xl p-12 border-2 border-dashed border-[#A3E635]/30 hover:border-[#A3E635]/50 transition-colors cursor-pointer">
            <div className="text-[#A3E635] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-[#E2E8F0] font-semibold mb-2">Drop your policy document here</p>
            <p className="text-[#64748B] text-sm">PDF or Word - Max 10MB</p>
          </div>

          {/* SCP Policies Preview */}
          <div className="mt-12 text-left">
            <p className="text-[#64748B] text-sm mb-4 text-center">Analyzed against 17 SCP policies including:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Clawback", "Quota", "Windfall", "SPIF", "409A", "Crediting", "Draws", "Termination"].map((policy) => (
                <span key={policy} className="px-3 py-1 text-xs rounded-full bg-[#A3E635]/10 text-[#A3E635] border border-[#A3E635]/20">
                  {policy}
                </span>
              ))}
              <span className="px-3 py-1 text-xs rounded-full bg-[#1E293B] text-[#64748B]">
                +9 more
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
