"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function NavPrimary() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 nav-noir">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="text-xl font-bold text-[var(--text-primary)] group-hover:text-glow transition-all">
              Intelligent<span className="text-[var(--accent)]">SPM</span>
            </span>
            <span
              className="text-[10px] tracking-[0.2em] uppercase text-[var(--silver-dark)] group-hover:text-[var(--silver)] transition-colors"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Home of The Toddfather
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[var(--silver-dark)] hover:text-[var(--silver-bright)] transition-colors rounded-md hover:bg-[rgba(147,51,234,0.05)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button href="/contact" size="sm">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--silver-dark)] hover:text-[var(--silver-bright)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-[var(--bg-primary)]/98 backdrop-blur-lg z-40">
          <Container className="py-6">
            <div className="flex flex-col gap-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-lg font-medium text-[var(--silver)] hover:text-[var(--accent)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-[rgba(80,80,100,0.15)]">
                <Button href="/contact" className="w-full">
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
