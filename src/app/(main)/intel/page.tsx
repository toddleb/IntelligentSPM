"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import blogData from "@/data/blog-posts.json";
import newsletterData from "@/data/newsletters.json";
import { PrimaryButton, SectionLabel } from "@/components/ui";
import { formatDate } from "@/lib/format";
import {
  IntelItem,
  IntelType,
  typeColors,
  typeLabels,
  learnItems,
} from "./constants";

function buildFeed(): IntelItem[] {
  const blogItems: IntelItem[] = (blogData.posts as any[]).map((p) => ({
    id: p.id,
    type: "blog" as const,
    title: p.title,
    excerpt: p.excerpt,
    date: p.publishedAt,
    readTime: p.readTime,
    href: `/content/blog/${p.id}`,
    featured: p.featured,
    author: p.author,
  }));

  const newsletterItems: IntelItem[] = newsletterData.issues.map((n) => ({
    id: `newsletter-${n.slug}`,
    type: "newsletter" as const,
    title: n.title,
    excerpt: n.excerpt,
    date: n.publishedAt,
    readTime: "5 min",
    href: `/newsletter/${n.slug}`,
    featured: false,
    author: "The Toddfather",
  }));

  const all = [...blogItems, ...newsletterItems, ...learnItems];
  return all.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function IntelPage() {
  return (
    <Suspense>
      <IntelContent />
    </Suspense>
  );
}

function IntelContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") as IntelType | null;
  const [selectedType, setSelectedType] = useState<IntelType | null>(typeParam);

  const feed = useMemo(() => buildFeed(), []);

  const heroItem = feed.find((item) => item.featured);
  const filteredFeed = selectedType
    ? feed.filter((item) => item.type === selectedType)
    : feed;
  // Remove hero from grid when showing all
  const gridItems = !selectedType && heroItem
    ? filteredFeed.filter((item) => item.id !== heroItem.id)
    : filteredFeed;

  const counts = {
    all: feed.length,
    blog: feed.filter((i) => i.type === "blog").length,
    newsletter: feed.filter((i) => i.type === "newsletter").length,
    learn: feed.filter((i) => i.type === "learn").length,
  };

  return (
    <div className="min-h-screen bg-[#1a0e2e]">
      {/* Hero Feature */}
      {heroItem && !selectedType && (
        <section className="px-6 pt-12">
          <div className="max-w-6xl mx-auto">
            <SectionLabel color="#38BDF8">Featured</SectionLabel>
            <Link href={heroItem.href}>
              <div className="group relative bg-white/5 rounded-2xl overflow-hidden border border-[#38BDF8]/20 hover:border-[#38BDF8]/50 transition-all cursor-pointer">
                <div
                  className="h-56 md:h-64 relative"
                  style={{
                    background: `linear-gradient(135deg, ${typeColors[heroItem.type]}40, ${typeColors[heroItem.type]}10)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold opacity-10 text-white">SPM</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 text-xs font-bold rounded-full"
                      style={{
                        backgroundColor: `${typeColors[heroItem.type]}20`,
                        color: typeColors[heroItem.type],
                      }}
                    >
                      {typeLabels[heroItem.type]}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#E2E8F0] mb-3 group-hover:text-[#38BDF8] transition-colors">
                    {heroItem.title}
                  </h2>
                  <p className="text-[#CBD5E1] text-lg mb-4 line-clamp-2">
                    {heroItem.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-[#64748B]">
                    <span>{heroItem.author}</span>
                    <span>{formatDate(heroItem.date)}</span>
                    <span>{heroItem.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Header & Filter Pills */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-2">
              {selectedType ? typeLabels[selectedType] : "The Intel"}
            </h1>
            <p className="text-[#CBD5E1]">
              SPM reality from The Toddfather. No vendor spin, no consultant theater.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto">
            <button
              onClick={() => setSelectedType(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                !selectedType
                  ? "bg-white text-[#1a0e2e]"
                  : "bg-white/5 text-[#CBD5E1] hover:text-white"
              }`}
            >
              All ({counts.all})
            </button>
            {(["blog", "newsletter", "learn"] as IntelType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border whitespace-nowrap ${
                  selectedType === type
                    ? "text-white"
                    : "text-[#CBD5E1] hover:text-white"
                }`}
                style={{
                  backgroundColor:
                    selectedType === type ? typeColors[type] : "transparent",
                  borderColor: `${typeColors[type]}40`,
                }}
              >
                {typeLabels[type]} ({counts[type]})
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <article className="group bg-white/5 rounded-xl overflow-hidden border border-[#64748B]/20 hover:border-[#38BDF8]/30 transition-all cursor-pointer h-full flex flex-col">
                  {/* Gradient header */}
                  <div
                    className="h-40 relative"
                    style={{
                      background: `linear-gradient(135deg, ${typeColors[item.type]}30, ${typeColors[item.type]}05)`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold opacity-10 text-white">SPM</span>
                    </div>
                    {item.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 text-xs font-bold rounded bg-[#38BDF8] text-[#1a0e2e]">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2 py-0.5 text-xs font-bold rounded"
                        style={{
                          backgroundColor: `${typeColors[item.type]}20`,
                          color: typeColors[item.type],
                        }}
                      >
                        {typeLabels[item.type]}
                      </span>
                      <span className="text-xs text-[#64748B]">{item.readTime}</span>
                    </div>
                    <h3 className="font-bold text-[#E2E8F0] mb-2 group-hover:text-[#38BDF8] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#CBD5E1] mb-4 flex-1 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#64748B] mt-auto pt-4 border-t border-[#64748B]/10">
                      <span>{formatDate(item.date)}</span>
                      <span>{item.author}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">
            Get the intel first
          </h2>
          <p className="text-[#CBD5E1] mb-6">
            Join The Syndicate for weekly SPM insights. No fluff.
          </p>
          <PrimaryButton href="/syndicate" size="large">
            Join The Syndicate
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
}
