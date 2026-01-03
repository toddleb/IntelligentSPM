"use client";

export function NoirOverlay() {
  return (
    <>
      {/* HEAVY Vignette - Very dark edges */}
      <div
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.95) 100%)`,
        }}
      />

      {/* Purple Neon Glow - DOUBLED intensity + animated */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 70% 0%, rgba(147, 51, 234, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 10% 100%, rgba(88, 28, 135, 0.45) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 90% 80%, rgba(147, 51, 234, 0.4) 0%, transparent 40%)
          `,
          animation: 'smoke-drift 20s ease-in-out infinite',
        }}
      />

      {/* Film Grain - MUCH more visible (18%) */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{
          opacity: 0.18,
          mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Scanlines - More visible (7%) */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{
          opacity: 0.07,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)`,
        }}
      />
    </>
  );
}
