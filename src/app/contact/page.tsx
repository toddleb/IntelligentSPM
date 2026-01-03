import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for SPM consulting, expert witness, speaking, or AI advisory. Todd responds within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          <p className="text-sm text-[var(--text-tertiary)] mb-2">Home / Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Let&apos;s talk.
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            SPM strategy. Expert witness. AI advisory. Speaking.
            Whatever&apos;s on your mind—I respond within 24 hours.
          </p>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-[var(--bg-secondary)]">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                How can I help?
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="noir-panel rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Or reach out directly
                </h3>
                <a
                  href="mailto:hello@intelligentspm.com"
                  className="flex items-center gap-3 text-[var(--accent)] hover:underline"
                >
                  <Mail className="w-5 h-5" />
                  hello@intelligentspm.com
                </a>
                <p className="mt-3 text-sm text-[var(--text-tertiary)]">
                  I read everything personally. Expect a response within 24 hours.
                </p>
              </div>

              {/* What Happens Next */}
              <div className="noir-panel rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  What to expect
                </h3>
                <ol className="space-y-4 text-sm text-[var(--text-secondary)]">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>I read your message within 24 hours.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span>If it sounds like a fit, I&apos;ll reply with questions or suggest a call.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>We&apos;ll have an initial conversation (free, 30 minutes) to explore if and how I can help.</span>
                  </li>
                </ol>
              </div>

              {/* Alternative CTAs */}
              <div className="noir-panel rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Looking for something specific?
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/services#expert"
                      className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Expert witness inquiries</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/speaking"
                      className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Speaking & keynotes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/insights#newsletter"
                      className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Subscribe to newsletter</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
