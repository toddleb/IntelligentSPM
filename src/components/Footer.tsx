import Link from "next/link";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export function Footer() {
  return (
    <footer className="relative py-8 bg-[#0F172A]">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-animate" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top row: Logo + Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <Link href="/" className="text-xl font-extrabold tracking-tight font-logo">
            <span className="text-white">Intelligent</span>
            <span className="spm-glow">SPM</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#999]">
            <Link href="/healthcheck" className="hover:text-white transition-colors">Healthchecks</Link>
            <Link href="/learn" className="hover:text-white transition-colors">Learn</Link>
            <Link href="/vendors" className="hover:text-white transition-colors">Vendors</Link>
            <Link href="/toddfather" className="hover:text-white transition-colors">The Toddfather</Link>
          </nav>
        </div>

        {/* Bottom row: Copyright + Powered by + Social */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-sm text-[#999]">
            &copy; {new Date().getFullYear()} IntelligentSPM
          </p>

          <p className="text-xs text-[#888]">
            Powered by <span className="font-bold gradient-text">AICR</span> and <span className="text-[#FF8737] font-bold">The Toddfather</span> of IntelligentSPM
          </p>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/thetoddfather" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="mailto:todd@intelligentspm.com" className="text-[#999] hover:text-white transition-colors" aria-label="Email">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
