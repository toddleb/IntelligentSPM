import { PrimaryButton, SectionLabel } from "@/components/ui";
import { leverConfig, leverOrder } from "@/lib/levers";

export const metadata = {
  title: "Style Guide | IntelligentSPM",
  description: "Brand and UI style guide for IntelligentSPM.",
};

const primaryColors = [
  { name: "Background Dark", color: "#1a0e2e" },
  { name: "Background Light", color: "#F1F5F9" },
  { name: "ISPM Teal", color: "#38BDF8" },
  { name: "ISPM Purple", color: "#58108E" },
  { name: "ISPM Orange", color: "#FE9200" },
];

const accentColors = [
  { name: "Blue", color: "#1D7ECA" },
  { name: "Green", color: "#85A403" },
  { name: "Burgundy", color: "#92278F" },
  { name: "Lime", color: "#A3E635" },
  { name: "Hot Pink", color: "#EA1B85" },
];

const utilityColors = [
  { name: "Red", color: "#DC2626" },
  { name: "Yellow", color: "#EAB308" },
  { name: "Text Primary", color: "#E2E8F0" },
  { name: "Text Muted", color: "#94A3B8" },
  { name: "Text Dark", color: "#334155" },
];

const levers = leverOrder.map((slug) => leverConfig[slug]);

// 4-token dark UI palette per lever
const leverTokens = [
  { name: "Incentive Architecture", base: "#B45309", bg: "#451A03", stroke: "#FBBF24", tint: "#FDE68A" },
  { name: "Compliance Guardrails", base: "#B91C1C", bg: "#450A0A", stroke: "#F87171", tint: "#FECACA" },
  { name: "Capacity & Coverage", base: "#0284C7", bg: "#082F49", stroke: "#38BDF8", tint: "#BAE6FD" },
  { name: "Systems Spine", base: "#334155", bg: "#0F172A", stroke: "#94A3B8", tint: "#E2E8F0" },
  { name: "Payout Engine", base: "#16A34A", bg: "#052E16", stroke: "#4ADE80", tint: "#BBF7D0" },
  { name: "Signal & Forecast", base: "#6D28D9", bg: "#2E1065", stroke: "#A78BFA", tint: "#DDD6FE" },
  { name: "Controls & Evidence", base: "#86198F", bg: "#4A044E", stroke: "#E879F9", tint: "#FAE8FF" },
  { name: "Enablement Loop", base: "#0891B2", bg: "#083344", stroke: "#22D3EE", tint: "#A5F3FC" },
];

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-[#1a0e2e]">
      <section className="py-20 px-6 bg-gradient-to-b from-[#1a0e2e] via-[#130a24] to-[#1a0e2e]">
        <div className="max-w-5xl mx-auto">
          <SectionLabel color="#38BDF8">Style Guide</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-4">
            IntelligentSPM Brand System
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl">
            A single source of truth for typography, colors, and UI patterns. Keep it bold, confident, and clean.
          </p>
        </div>
      </section>

      {/* Logo */}
      <section className="py-16 px-6 border-t border-white/10 bg-gradient-to-b from-[#1a0e2e] via-[#150b26] to-[#1a0e2e]">
        <div className="max-w-5xl mx-auto">
          <SectionLabel color="#58108E">Logo</SectionLabel>
          <p className="text-sm text-[#94A3B8] mb-8">
            The wordmark uses Outfit (font-logo). &ldquo;Intelligent&rdquo; is white, &ldquo;SPM&rdquo; carries the signature glow.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Dark variant */}
            <div className="rounded-xl border border-white/10 bg-[#1a0e2e] p-8 flex flex-col items-center justify-center gap-4">
              <div className="font-logo flex items-baseline">
                <span className="text-4xl font-extrabold text-white tracking-tight">Intelligent</span>
                <span className="text-4xl font-extrabold tracking-tight spm-glow">SPM</span>
              </div>
              <span className="text-xs text-[#94A3B8]">On Dark</span>
            </div>
            {/* Light variant */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-8 flex flex-col items-center justify-center gap-4">
              <div className="font-logo flex items-baseline">
                <span className="text-4xl font-extrabold text-[#1a0e2e] tracking-tight">Intelligent</span>
                <span className="text-4xl font-extrabold tracking-tight text-[#38BDF8]">SPM</span>
              </div>
              <span className="text-xs text-[#94A3B8]">On Light</span>
            </div>
          </div>
          {/* Sizing examples */}
          <div className="mt-8 space-y-3">
            <div className="font-logo flex items-baseline">
              <span className="text-5xl font-extrabold text-white tracking-tight">Intelligent</span>
              <span className="text-5xl font-extrabold tracking-tight spm-glow">SPM</span>
              <span className="ml-4 text-xs text-[#94A3B8] self-end">5xl — Hero</span>
            </div>
            <div className="font-logo flex items-baseline">
              <span className="text-3xl font-extrabold text-white tracking-tight">Intelligent</span>
              <span className="text-3xl font-extrabold tracking-tight spm-glow">SPM</span>
              <span className="ml-4 text-xs text-[#94A3B8] self-end">3xl — Nav</span>
            </div>
            <div className="font-logo flex items-baseline">
              <span className="text-xl font-extrabold text-white tracking-tight">Intelligent</span>
              <span className="text-xl font-extrabold tracking-tight spm-glow">SPM</span>
              <span className="ml-4 text-xs text-[#94A3B8] self-end">xl — Footer / Badge</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/10 bg-gradient-to-b from-[#1a0e2e] via-[#150b26] to-[#1a0e2e]">
        <div className="max-w-5xl mx-auto">
          <SectionLabel color="#FE9200">Typography</SectionLabel>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E2E8F0]">Display Headline</h2>
            <p className="text-lg text-[#94A3B8]">
              Body text should be readable, crisp, and calm. Headlines should be direct and confident.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-[#E2E8F0]">Font: Inter (body)</span>
              <span className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-[#E2E8F0]">Font: Outfit (logo)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/10 bg-gradient-to-b from-[#1a0e2e] via-[#140a25] to-[#1a0e2e]">
        <div className="max-w-5xl mx-auto">
          <SectionLabel color="#38BDF8">Core Palette</SectionLabel>

          <p className="text-xs uppercase tracking-widest text-[#94A3B8] mb-3 mt-2">Primary</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {primaryColors.map((item) => (
              <div key={item.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="h-16 w-full rounded-lg" style={{ backgroundColor: item.color }} />
                <div className="mt-3 text-sm text-[#E2E8F0] font-semibold">{item.name}</div>
                <div className="text-xs text-[#94A3B8]">{item.color}</div>
              </div>
            ))}
          </div>

          <p className="text-xs uppercase tracking-widest text-[#94A3B8] mb-3 mt-8">Accents</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {accentColors.map((item) => (
              <div key={item.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="h-16 w-full rounded-lg" style={{ backgroundColor: item.color }} />
                <div className="mt-3 text-sm text-[#E2E8F0] font-semibold">{item.name}</div>
                <div className="text-xs text-[#94A3B8]">{item.color}</div>
              </div>
            ))}
          </div>

          <p className="text-xs uppercase tracking-widest text-[#94A3B8] mb-3 mt-8">Utility &amp; Text</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {utilityColors.map((item) => (
              <div key={item.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="h-16 w-full rounded-lg" style={{ backgroundColor: item.color }} />
                <div className="mt-3 text-sm text-[#E2E8F0] font-semibold">{item.name}</div>
                <div className="text-xs text-[#94A3B8]">{item.color}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Levers — Dark UI */}
      <section className="py-16 px-6 border-t border-white/10 bg-gradient-to-b from-[#1a0e2e] via-[#150b26] to-[#1a0e2e]">
        <div className="max-w-5xl mx-auto">
          <SectionLabel color="#A3E635">8 Levers — Dark UI</SectionLabel>
          <p className="text-sm text-[#94A3B8] mb-6">
            4 tokens per lever: <span className="text-[#E2E8F0]">base</span> (icon/line) &middot; <span className="text-[#E2E8F0]">bg</span> (card fill) &middot; <span className="text-[#E2E8F0]">stroke</span> (border) &middot; <span className="text-[#E2E8F0]">tint</span> (text/badge)
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leverTokens.map((lever) => (
              <div key={lever.name} className="rounded-xl p-4" style={{ backgroundColor: lever.bg, border: `2px solid ${lever.stroke}` }}>
                <div className="flex gap-2 mb-3">
                  <div className="h-10 flex-1 rounded-md" style={{ backgroundColor: lever.base }} />
                  <div className="h-10 flex-1 rounded-md" style={{ backgroundColor: lever.bg, border: `1px solid ${lever.stroke}` }} />
                  <div className="h-10 flex-1 rounded-md" style={{ backgroundColor: lever.stroke }} />
                  <div className="h-10 flex-1 rounded-md" style={{ backgroundColor: lever.tint }} />
                </div>
                <div className="text-sm font-semibold" style={{ color: lever.tint }}>{lever.name}</div>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                  <span className="text-[10px]" style={{ color: lever.stroke }}>base {lever.base}</span>
                  <span className="text-[10px]" style={{ color: lever.stroke }}>bg {lever.bg}</span>
                  <span className="text-[10px]" style={{ color: lever.stroke }}>stroke {lever.stroke}</span>
                  <span className="text-[10px]" style={{ color: lever.stroke }}>tint {lever.tint}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Levers — Light UI */}
      <section className="py-16 px-6 border-t border-white/10 bg-gradient-to-b from-[#1a0e2e] via-[#150b26] to-[#1a0e2e]">
        <div className="max-w-5xl mx-auto">
          <SectionLabel color="#38BDF8">8 Levers — Light UI</SectionLabel>
          <p className="text-sm text-[#94A3B8] mb-6">
            Same tokens, light context: <span className="text-[#E2E8F0]">base</span> on white &middot; <span className="text-[#E2E8F0]">tint</span> as card fill &middot; <span className="text-[#E2E8F0]">base</span> as text &middot; <span className="text-[#E2E8F0]">stroke</span> as accent
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leverTokens.map((lever) => (
              <div key={lever.name} className="rounded-xl p-4" style={{ backgroundColor: lever.tint, border: `2px solid ${lever.stroke}` }}>
                <div className="flex gap-2 mb-3">
                  <div className="h-10 flex-1 rounded-md" style={{ backgroundColor: lever.base }} />
                  <div className="h-10 flex-1 rounded-md" style={{ backgroundColor: "white", border: `1px solid ${lever.stroke}` }} />
                  <div className="h-10 flex-1 rounded-md" style={{ backgroundColor: lever.stroke }} />
                  <div className="h-10 flex-1 rounded-md" style={{ backgroundColor: lever.bg }} />
                </div>
                <div className="text-sm font-semibold" style={{ color: lever.base }}>{lever.name}</div>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                  <span className="text-[10px]" style={{ color: lever.bg }}>base {lever.base}</span>
                  <span className="text-[10px]" style={{ color: lever.bg }}>tint {lever.tint}</span>
                  <span className="text-[10px]" style={{ color: lever.bg }}>stroke {lever.stroke}</span>
                  <span className="text-[10px]" style={{ color: lever.bg }}>bg {lever.bg}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/10 bg-gradient-to-b from-[#1a0e2e] via-[#150b27] to-[#1a0e2e]">
        <div className="max-w-5xl mx-auto">
          <SectionLabel color="#38BDF8">Buttons</SectionLabel>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="#" variant="cyan">Primary Cyan</PrimaryButton>
            <PrimaryButton href="#" variant="orange">Primary Orange</PrimaryButton>
            <PrimaryButton href="#" variant="purple">Primary Purple</PrimaryButton>
            <PrimaryButton href="#" variant="green">Primary Lime</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
