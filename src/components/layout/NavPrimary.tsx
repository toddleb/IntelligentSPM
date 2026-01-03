"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function NavPrimary() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Toggle scrolled state at 50px
      setScrolled(scrollY > 50);

      // Calculate scroll progress for indicator
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "nav-noir shadow-lg"
          : "bg-transparent"
      )}
    >
      {/* Scroll progress indicator */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent via-accent-bright to-gold transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - with scroll-based size transition */}
          <Link href="/" className="flex flex-col items-start group relative">
            {/* Full logo - visible when not scrolled */}
            <div className={cn(
              "transition-all duration-300",
              scrolled ? "opacity-0 scale-90 absolute" : "opacity-100 scale-100"
            )}>
              <span className="text-xl font-bold text-[var(--text-primary)] group-hover:text-glow transition-all">
                Intelligent<span className="text-[var(--accent)]">SPM</span>
              </span>
              <span
                className="block text-[10px] tracking-[0.2em] uppercase text-[var(--silver-dark)] group-hover:text-[var(--silver)] transition-colors"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Home of The Toddfather
              </span>
            </div>

            {/* Compact logo - visible when scrolled */}
            <div className={cn(
              "flex items-center gap-2 transition-all duration-300",
              scrolled ? "opacity-100 scale-100" : "opacity-0 scale-110 absolute"
            )}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center neon-glow">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-[var(--text-primary)]">
                I<span className="text-[var(--accent)]">SPM</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  "text-[var(--silver-dark)] hover:text-[var(--silver-bright)]",
                  "hover:bg-[rgba(147,51,234,0.05)]",
                  "animated-underline"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme link - subtle */}
            <Link
              href="/theme"
              className="p-2 text-[var(--silver-dark)] hover:text-[var(--accent)] transition-colors rounded-md"
              title="Customize Theme"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </Link>
            <Button href="/contact" size="sm" className="btn-noir">
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
