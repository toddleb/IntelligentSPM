"use client";

import { useState } from "react";

export default function AskSPMPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-[#FF8737] flex items-center justify-center text-2xl font-bold text-white mx-auto mb-8">
            ASK
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
            Ask<span className="text-[#FF8737]">SPM</span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
            Query The Toddfather&apos;s brain. 30 years of SPM expertise, 929 knowledge base cards, powered by RAG.
          </p>

          {/* Chat interface placeholder */}
          <div className="bg-[#1E293B] rounded-xl overflow-hidden border border-[#FF8737]/20">
            {/* Messages area */}
            <div className="h-80 p-6 flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#64748B] mb-4">Ask anything about SPM</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "What is a clawback policy?",
                    "How do accelerators work?",
                    "Best practices for quota setting",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setQuery(suggestion)}
                      className="px-4 py-2 text-sm rounded-full bg-[#FF8737]/10 text-[#FF8737] hover:bg-[#FF8737]/20 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input area */}
            <div className="border-t border-[#FF8737]/10 p-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask The Toddfather..."
                  className="flex-1 bg-[#0F172A] border border-[#FF8737]/20 rounded-xl px-4 py-3 text-[#E2E8F0] placeholder-[#64748B] focus:outline-none focus:border-[#FF8737]/50"
                />
                <button className="px-6 py-3 bg-[#FF8737] text-white font-bold rounded-xl hover:bg-[#FF8737]/90 transition-colors">
                  Ask
                </button>
              </div>
            </div>
          </div>

          <p className="text-[#64748B] text-sm mt-8">
            Want your own AskSPM for your organization?{" "}
            <a href="/toddfather/contact" className="text-[#FF8737] hover:underline">
              Contact The Toddfather
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
