"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // TODO: Integrate with email service
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF8737] mb-4 text-center">
            Let&apos;s Talk
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6 text-center">
            Contact The Toddfather
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-xl mx-auto mb-12 text-center">
            Speaking engagement, consulting project, or just have a question. Reach out.
          </p>

          {status === "success" ? (
            <div className="bg-[#1E293B] rounded-xl p-8 border border-[#A3E635]/20 text-center">
              <div className="text-[#A3E635] text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-[#E2E8F0] mb-2">Message Sent</h3>
              <p className="text-[#94A3B8]">The Toddfather will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#1E293B] rounded-xl p-8 border border-[#FF8737]/20">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#94A3B8] mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0F172A] border border-[#FF8737]/20 rounded-xl px-4 py-3 text-[#E2E8F0] focus:outline-none focus:border-[#FF8737]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#94A3B8] mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0F172A] border border-[#FF8737]/20 rounded-xl px-4 py-3 text-[#E2E8F0] focus:outline-none focus:border-[#FF8737]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#94A3B8] mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#0F172A] border border-[#FF8737]/20 rounded-xl px-4 py-3 text-[#E2E8F0] focus:outline-none focus:border-[#FF8737]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#94A3B8] mb-2">Topic</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#0F172A] border border-[#FF8737]/20 rounded-xl px-4 py-3 text-[#E2E8F0] focus:outline-none focus:border-[#FF8737]/50"
                  >
                    <option value="">Select a topic...</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="consulting">Consulting Project</option>
                    <option value="askspm">Custom AskSPM</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#94A3B8] mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0F172A] border border-[#FF8737]/20 rounded-xl px-4 py-3 text-[#E2E8F0] focus:outline-none focus:border-[#FF8737]/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 bg-[#FF8737] text-white font-bold rounded-xl hover:bg-[#FF8737]/90 transition-all disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}

          <p className="text-center text-[#64748B] text-sm mt-8">
            Or email directly: <a href="mailto:todd@intelligentspm.com" className="text-[#FF8737] hover:underline">todd@intelligentspm.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
