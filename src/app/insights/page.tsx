import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Headphones, BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles, podcast episodes, and frameworks on sales compensation and AI. 30 years of SPM lessons, shared freely.",
};

const articles = [
  {
    title: "AI + SPM: What Actually Works",
    summary: "Everyone's talking about AI. Few know how to apply it to sales compensation. Here's what I've learned building and advising on AI-powered SPM.",
    featured: true,
  },
  {
    title: "The Comp Plan Is Lying: A Diagnostic Framework",
    summary: "Your comp plan says one thing. Your reps hear another. Here's how to find where plan design diverges from actual behavior.",
  },
  {
    title: "Governance Isn't Optional",
    summary: "The best-designed comp plan fails without operating discipline. How to build the cadences and controls that make SPM sustainable.",
  },
  {
    title: "Why Your Vendor Selection Will Fail",
    summary: "Every ICM vendor looks great in a demo. Here's why most selections still go wrong—and how to avoid it.",
  },
  {
    title: "Shadow Accounting: The Governance Layer You're Missing",
    summary: "Your ICM says the payout is right. Finance has questions. Here's why you need an independent truth layer.",
  },
  {
    title: "The Expert Witness Playbook",
    summary: "What happens when comp disputes go to court. Lessons from testifying on sales compensation.",
  },
];

const episodes = [
  {
    title: "30 Years of SPM Mistakes",
    description: "What keeps going wrong. What I've learned.",
    duration: "42 min",
  },
  {
    title: "AI Won't Save Your Comp Plan",
    description: "Where AI actually helps—and where it doesn't.",
    duration: "35 min",
  },
  {
    title: "The Courtroom and the Comp Plan",
    description: "What it's like to testify as an expert witness on comp.",
    duration: "38 min",
  },
  {
    title: "Governance for Humans",
    description: "Making SPM governance work without killing your team.",
    duration: "31 min",
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          <p className="text-sm text-[var(--text-tertiary)] mb-2">Home / Insights</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            30 years of lessons. Shared freely.
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Articles, podcast episodes, and frameworks on sales compensation, SPM operations,
            and AI. From someone who&apos;s been doing this since before your ICM existed.
          </p>
        </Container>
      </section>

      {/* Featured */}
      <section className="py-12 bg-[var(--bg-secondary)]">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Article */}
            <div className="noir-panel rounded-xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-[var(--accent)]" />
                <span className="text-sm text-[var(--accent)] font-medium">Featured Article</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                {articles[0].title}
              </h3>
              <p className="text-[var(--text-secondary)] mb-6">{articles[0].summary}</p>
              <Button variant="ghost">Read &rarr;</Button>
            </div>

            {/* Featured Podcast */}
            <div className="noir-panel rounded-xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <Headphones className="w-5 h-5 text-[var(--accent)]" />
                <span className="text-sm text-[var(--accent)] font-medium">Featured Episode</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                &ldquo;{episodes[0].title}&rdquo;
              </h3>
              <p className="text-[var(--text-secondary)] mb-2">{episodes[0].description}</p>
              <p className="text-sm text-[var(--text-tertiary)] mb-6">{episodes[0].duration}</p>
              <Button variant="ghost">Listen &rarr;</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-[var(--accent)]" />
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">Latest Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <div
                key={article.title}
                className="p-6 bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] rounded-xl hover:border-[var(--accent-muted)] transition-colors cursor-pointer group"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{article.summary}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[var(--accent)]">
                  Read <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Podcast */}
      <section id="podcast" className="py-16 md:py-24 bg-[var(--bg-secondary)] scroll-mt-20">
        <Container>
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="w-6 h-6 text-[var(--accent)]" />
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">The IntelligentSPM Podcast</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Conversations about sales comp, SPM, and AI. Short episodes. High signal.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {episodes.map((episode) => (
              <div
                key={episode.title}
                className="p-6 bg-[var(--bg-tertiary)] border border-[var(--bg-hover)] rounded-xl hover:border-[var(--accent-muted)] transition-colors cursor-pointer group"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  &ldquo;{episode.title}&rdquo;
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-2">{episode.description}</p>
                <p className="text-xs text-[var(--text-tertiary)]">{episode.duration}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Subscribe: Apple Podcasts &bull; Spotify &bull; RSS
          </p>
        </Container>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 md:py-24 scroll-mt-20">
        <Container className="max-w-2xl">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">The SPM Dispatch</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            Weekly insights on sales comp, SPM, and AI. From someone who&apos;s been doing this for 30 years.
          </p>
          <ul className="space-y-2 mb-8 text-[var(--text-secondary)]">
            <li>&bull; Frameworks you can actually use</li>
            <li>&bull; Lessons from real engagements (anonymized)</li>
            <li>&bull; AI developments that matter for SPM</li>
            <li>&bull; No vendor pitches. No fluff.</li>
          </ul>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--bg-hover)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="mt-3 text-sm text-[var(--text-tertiary)]">One email per week. Unsubscribe anytime.</p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--bg-secondary)]">
        <Container className="text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            Want to talk, not just read?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            If you&apos;ve got SPM challenges and want to discuss them directly,
            I&apos;m always up for a conversation.
          </p>
          <Button href="/contact" size="lg">Get in touch &rarr;</Button>
        </Container>
      </section>
    </>
  );
}
