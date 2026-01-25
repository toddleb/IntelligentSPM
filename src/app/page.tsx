"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Hero configurations with IntelligentSPM branding
const heroes = [
  {
    id: 1,
    kicker: "The SPM Authority",
    headlinePre: "The ",
    highlight: "Clearing House",
    headlinePost: " for SPM",
    highlightColor: "#38BDF8", // Teal
    spmColor: "#38BDF8",
    primaryCta: "Run SPM Healthcheck →",
    primaryHref: "/healthcheck/spm",
    secondaryCta: "Book an SPM Intervention",
    secondaryHref: "/contact?topic=intervention",
    bgGradient: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)",
  },
  {
    id: 2,
    kicker: "AI That Actually Knows Comp",
    headlinePre: "Your ",
    highlight: "Comp Plan",
    headlinePost: " has an opinion. Now you can hear it.",
    highlightColor: "#8241C8", // Purple
    spmColor: "#8241C8",
    primaryCta: "Run Comp Plan Healthcheck →",
    primaryHref: "/healthcheck/comp-plan",
    secondaryCta: "Book a Plan Autopsy",
    secondaryHref: "/contact?topic=autopsy",
    bgGradient: "linear-gradient(135deg, #0F172A 0%, #2D1B4E 50%, #0F172A 100%)",
  },
  {
    id: 3,
    kicker: "Sales Performance Management",
    headlinePre: "Your ",
    highlight: "Comp Oversight",
    headlinePost: " is held together with duct tape.",
    highlightColor: "#A3E635", // Lime
    spmColor: "#A3E635",
    primaryCta: "Run Governance Healthcheck →",
    primaryHref: "/healthcheck/governance",
    secondaryCta: "Book a Policy Teardown",
    secondaryHref: "/contact?topic=teardown",
    bgGradient: "linear-gradient(135deg, #0F172A 0%, #1A2F1A 50%, #0F172A 100%)",
  },
  {
    id: 4,
    kicker: "AskSM by The Toddfather",
    headlinePre: "Does your organization have a custom ",
    highlight: "SPM Expert",
    headlinePost: " for immediate support?",
    highlightColor: "#FF8737", // Orange
    spmColor: "#FF8737",
    primaryCta: "AskSM →",
    primaryHref: "/asksm",
    secondaryCta: "Book a Toddfather Confab",
    secondaryHref: "/contact?topic=confab",
    bgGradient: "linear-gradient(135deg, #0F172A 0%, #3D2814 50%, #0F172A 100%)",
  },
];

export default function HomePage() {
  const [currentHero, setCurrentHero] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate heroes every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentHero((prev) => (prev + 1) % heroes.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const hero = heroes[currentHero];

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 bg-[#0F172A] shadow-sm border-b-4"
        style={{
          borderImage: `linear-gradient(to right, #38BDF8, #8241C8, #A3E635, #FF8737) 1`
        }}
      >
        <div className="w-full px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-baseline">
              <span className="text-2xl font-light text-[#E2E8F0] tracking-tight">
                Intelligent
              </span>
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ color: hero.spmColor }}
              >
                SPM
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <Link
                href="/healthcheck"
                className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors"
              >
                Healthchecks
              </Link>
              <Link
                href="/asksm"
                className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors"
              >
                AskSM
              </Link>
              <Link
                href="/contact"
                className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center transition-all duration-500"
        style={{ background: hero.bgGradient }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Kicker */}
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: hero.highlightColor }}
          >
            {hero.kicker}
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#E2E8F0] leading-tight mb-6">
            {hero.headlinePre}
            <span style={{ color: hero.highlightColor }}>{hero.highlight}</span>
            {hero.headlinePost}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10">
            No vendor agenda. No consultant spin. Just 30 years of sales compensation expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={hero.primaryHref}>
              <button
                className="px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                style={{ backgroundColor: hero.highlightColor }}
              >
                {hero.primaryCta}
              </button>
            </Link>
            <Link href={hero.secondaryHref}>
              <button className="px-8 py-4 rounded-xl text-white font-medium text-lg border-2 border-white/30 hover:border-white/60 transition-all">
                {hero.secondaryCta}
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {heroes.map((h, idx) => (
            <button
              key={h.id}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentHero(idx);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentHero ? "scale-125" : "opacity-50 hover:opacity-75"
              }`}
              style={{
                backgroundColor: idx === currentHero ? h.highlightColor : "#94A3B8",
              }}
              aria-label={`Go to hero ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 5 SPM Pillars Section */}
      <section className="py-20 px-6 bg-[#1E293B]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#E2E8F0] mb-4">
            The 5 Pillars of SPM
          </h2>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            Comprehensive sales performance management across every critical dimension.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Sales Planning", icon: "📊", color: "#38BDF8" },
              { name: "Sales Technology", icon: "⚙️", color: "#8241C8" },
              { name: "Sales Operations", icon: "🔄", color: "#A3E635" },
              { name: "Sales Governance", icon: "📋", color: "#FF8737" },
              { name: "Sales Intelligence", icon: "🧠", color: "#EA1B85" },
            ].map((pillar) => (
              <div
                key={pillar.name}
                className="bg-[#0F172A] rounded-xl p-6 text-center border border-[#38BDF8]/10 hover:border-[#38BDF8]/30 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{pillar.icon}</div>
                <h3
                  className="font-semibold text-sm"
                  style={{ color: pillar.color }}
                >
                  {pillar.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-20 px-6 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#E2E8F0] mb-12">
            Quick Access
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroes.map((h) => (
              <Link key={h.id} href={h.primaryHref}>
                <div
                  className="rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all hover:scale-105 cursor-pointer h-full"
                  style={{
                    background: `linear-gradient(135deg, #1E293B 0%, ${h.highlightColor}15 100%)`,
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: h.highlightColor }}
                  >
                    {h.kicker}
                  </p>
                  <h3 className="text-lg font-bold text-[#E2E8F0] mb-3">
                    {h.highlight}
                  </h3>
                  <p className="text-sm text-[#94A3B8]">
                    {h.primaryCta.replace(" →", "")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Toddfather Section */}
      <section className="py-20 px-6 bg-[#1E293B]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF8737] mb-4">
            Meet The Expert
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-6">
            <span className="text-[#E2E8F0] font-light">The </span>
            <span className="text-[#FF8737]">Toddfather</span>
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            30 years of sales compensation expertise, now available 24/7 through AskSM.
            The Toddfather&apos;s brain—minus the coffee addiction.
          </p>
          <Link href="/asksm">
            <button className="px-8 py-4 rounded-xl text-white font-bold text-lg bg-[#FF8737] hover:bg-[#FF8737]/90 transition-all hover:scale-105">
              Talk to AskSM →
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#0F172A] border-t border-[#38BDF8]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-baseline">
            <span className="text-xl font-light text-[#E2E8F0]">Intelligent</span>
            <span className="text-xl font-bold text-[#38BDF8]">SPM</span>
          </div>
          <p className="text-sm text-[#94A3B8]">
            &copy; {new Date().getFullYear()} IntelligentSPM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
