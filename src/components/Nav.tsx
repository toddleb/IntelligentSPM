"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Healthchecks", href: "/healthcheck" },
  { label: "Learn", href: "/learn" },
  { label: "Vendors", href: "/vendors" },
  { label: "Blog", href: "/content/blog" },
  { label: "The Toddfather", href: "/toddfather" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm border-b border-[#38BDF8]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-baseline">
            <span className="text-xl font-light text-[#E2E8F0] tracking-tight">
              Intelligent
            </span>
            <span className="text-xl font-bold text-[#38BDF8] tracking-tight">
              SPM
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/syndicate">
              <button className="px-4 py-2 text-sm font-bold text-white bg-[#FF8737] rounded-lg hover:bg-[#FF8737]/90 transition-colors">
                Subscribe
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#94A3B8] hover:text-[#E2E8F0]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-[#38BDF8]/10">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#94A3B8] hover:text-[#E2E8F0] transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/syndicate" onClick={() => setMobileOpen(false)}>
                <button className="w-full px-4 py-3 text-sm font-bold text-white bg-[#FF8737] rounded-lg hover:bg-[#FF8737]/90 transition-colors mt-2">
                  Subscribe
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
