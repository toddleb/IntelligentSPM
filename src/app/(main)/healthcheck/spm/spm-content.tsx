"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  pillars,
  maturityLevels,
  calculatePillarScore,
  calculatePercentage,
  getTierBadge,
} from "./data/questions";

const PERSONAL_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com",
  "icloud.com", "me.com", "mac.com", "live.com", "msn.com",
  "protonmail.com", "proton.me", "mail.com", "ymail.com", "gmx.com",
  "gmx.net", "zoho.com", "fastmail.com", "tutanota.com", "hey.com",
];

function isPersonalEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return PERSONAL_DOMAINS.includes(domain);
}

type Phase = "gate" | "quiz" | "results";

interface HealthcheckState {
  email: string;
  answers: Record<string, number>;
  currentPillar: number;
  currentQuestion: number;
}

const STORAGE_KEY = "spm-healthcheck-progress";

function loadState(): HealthcheckState | null {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  }
  return null;
}

function saveState(state: HealthcheckState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clearState() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

// Spider Chart Component
function SpiderChart({ answers }: { answers: Record<string, number> }) {
  const size = 280;
  const center = size / 2;
  const maxRadius = 100;
  const levels = 4;

  // Calculate points for each pillar
  const pillarScores = pillars.map((p) => {
    const score = calculatePillarScore(answers, p.id);
    const maxScore = 12;
    return score / maxScore;
  });

  // Generate polygon points
  const angleStep = (2 * Math.PI) / pillars.length;
  const points = pillarScores.map((score, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const radius = score * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  const polygonPoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  // Generate grid lines
  const gridLines = [];
  for (let level = 1; level <= levels; level++) {
    const radius = (level / levels) * maxRadius;
    const gridPoints = pillars.map((_, i) => {
      const angle = i * angleStep - Math.PI / 2;
      return `${center + radius * Math.cos(angle)},${center + radius * Math.sin(angle)}`;
    });
    gridLines.push(gridPoints.join(" "));
  }

  // Generate axis lines and labels
  const axes = pillars.map((pillar, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const labelRadius = maxRadius + 25;
    return {
      x1: center,
      y1: center,
      x2: center + maxRadius * Math.cos(angle),
      y2: center + maxRadius * Math.sin(angle),
      labelX: center + labelRadius * Math.cos(angle),
      labelY: center + labelRadius * Math.sin(angle),
      pillar,
    };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full max-w-[280px] mx-auto">
      {/* Grid polygons */}
      {gridLines.map((points, i) => (
        <polygon
          key={i}
          points={points}
          fill="none"
          stroke="#334155"
          strokeWidth="1"
          opacity={0.5}
        />
      ))}

      {/* Axis lines */}
      {axes.map((axis, i) => (
        <line
          key={i}
          x1={axis.x1}
          y1={axis.y1}
          x2={axis.x2}
          y2={axis.y2}
          stroke="#334155"
          strokeWidth="1"
          opacity={0.5}
        />
      ))}

      {/* Data polygon */}
      <polygon
        points={polygonPoints}
        fill="#38BDF820"
        stroke="#38BDF8"
        strokeWidth="2"
      />

      {/* Data points */}
      {points.map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="4"
          fill={pillars[i].color}
          stroke="#0F172A"
          strokeWidth="2"
        />
      ))}

      {/* Labels */}
      {axes.map((axis, i) => (
        <text
          key={i}
          x={axis.labelX}
          y={axis.labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={axis.pillar.color}
          fontSize="11"
          fontWeight="600"
        >
          {axis.pillar.id}
        </text>
      ))}
    </svg>
  );
}

// Gate Screen Component
function GateScreen({
  onSubmit,
  savedEmail,
}: {
  onSubmit: (email: string) => void;
  savedEmail?: string;
}) {
  const [email, setEmail] = useState(savedEmail || "");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isPersonalEmail(email)) {
      setError("Please use your corporate email address.");
      return;
    }
    onSubmit(email);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-[#38BDF8] flex items-center justify-center text-2xl font-bold text-[#0F172A] mx-auto mb-6">
            SPM
          </div>
          <h1 className="text-3xl font-bold text-[#E2E8F0] mb-3">
            Assess Your SPM Program
          </h1>
          <p className="text-[#94A3B8]">
            24 questions. 10 minutes. Know where you stand.
          </p>
        </div>

        <div className="bg-[#1E293B] rounded-xl p-8 border border-[#38BDF8]/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                placeholder="work@company.com"
                required
                className={`w-full bg-[#0F172A] border rounded-xl px-4 py-3 text-[#E2E8F0] placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8]/50 ${
                  error ? "border-[#dc2626]" : "border-[#38BDF8]/20"
                }`}
              />
              {error && <p className="text-[#dc2626] text-sm mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#38BDF8] text-[#0F172A] font-bold rounded-xl hover:bg-[#38BDF8]/90 transition-all"
            >
              Start Assessment
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#64748B]/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-[#1E293B] text-[#64748B]">or</span>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/thetoddfather"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#0A66C2] text-white font-bold rounded-xl hover:bg-[#0A66C2]/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>

          <p className="text-[#64748B] text-xs text-center mt-4">
            Corporate email required. Results sent to your inbox.
          </p>
        </div>
      </div>
    </div>
  );
}

// Quiz Component
function Quiz({
  state,
  onAnswer,
  onComplete,
}: {
  state: HealthcheckState;
  onAnswer: (pillarIndex: number, questionIndex: number, value: number) => void;
  onComplete: () => void;
}) {
  const pillar = pillars[state.currentPillar];
  const question = pillar.questions[state.currentQuestion];
  const Icon = pillar.icon;
  const answerKey = `${pillar.id}-${state.currentQuestion}`;
  const currentAnswer = state.answers[answerKey];

  const totalQuestions = pillars.length * 3;
  const currentQuestionNumber = state.currentPillar * 3 + state.currentQuestion + 1;
  const progress = (currentQuestionNumber / totalQuestions) * 100;

  const canGoBack = state.currentPillar > 0 || state.currentQuestion > 0;
  const isLastQuestion =
    state.currentPillar === pillars.length - 1 && state.currentQuestion === 2;

  const handleBack = () => {
    if (state.currentQuestion > 0) {
      onAnswer(state.currentPillar, state.currentQuestion - 1, state.answers[`${pillar.id}-${state.currentQuestion - 1}`] ?? -1);
    } else if (state.currentPillar > 0) {
      const prevPillar = pillars[state.currentPillar - 1];
      onAnswer(state.currentPillar - 1, 2, state.answers[`${prevPillar.id}-2`] ?? -1);
    }
  };

  const handleNext = () => {
    if (currentAnswer === undefined) return;

    if (isLastQuestion) {
      onComplete();
    } else if (state.currentQuestion < 2) {
      onAnswer(state.currentPillar, state.currentQuestion + 1, -1);
    } else {
      onAnswer(state.currentPillar + 1, 0, -1);
    }
  };

  const handleSelect = (value: number) => {
    onAnswer(state.currentPillar, state.currentQuestion, value);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] px-6 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: pillar.color }}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#64748B]">
                  Question {currentQuestionNumber} of {totalQuestions}
                </p>
                <p className="font-semibold text-[#E2E8F0]">{pillar.name}</p>
              </div>
            </div>
            <span className="text-[#64748B] text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-[#1E293B] rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-300"
              style={{ width: `${progress}%`, backgroundColor: pillar.color }}
            />
          </div>
          {/* Pillar dots */}
          <div className="flex justify-between mt-3">
            {pillars.map((p, i) => (
              <div
                key={p.id}
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                style={{
                  backgroundColor:
                    i < state.currentPillar
                      ? p.color
                      : i === state.currentPillar
                      ? `${p.color}40`
                      : "#1E293B",
                  color: i <= state.currentPillar ? "white" : "#64748B",
                }}
              >
                {i < state.currentPillar ? "✓" : p.id.charAt(0)}
              </div>
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="bg-[#1E293B] rounded-xl p-8 border border-white/10 mb-6">
          <p className="text-xl text-[#E2E8F0] mb-8 leading-relaxed">{question}</p>

          <div className="space-y-3">
            {maturityLevels.map((level) => (
              <button
                key={level.value}
                onClick={() => handleSelect(level.value)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  currentAnswer === level.value
                    ? "border-opacity-100 bg-opacity-20"
                    : "border-white/10 hover:border-white/20"
                }`}
                style={{
                  borderColor:
                    currentAnswer === level.value ? pillar.color : undefined,
                  backgroundColor:
                    currentAnswer === level.value ? `${pillar.color}20` : undefined,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      currentAnswer === level.value
                        ? "border-current"
                        : "border-[#64748B]"
                    }`}
                    style={{
                      borderColor:
                        currentAnswer === level.value ? pillar.color : undefined,
                    }}
                  >
                    {currentAnswer === level.value && (
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: pillar.color }}
                      />
                    )}
                  </div>
                  <div>
                    <p
                      className="font-semibold"
                      style={{
                        color:
                          currentAnswer === level.value ? pillar.color : "#E2E8F0",
                      }}
                    >
                      {level.label}
                    </p>
                    <p className="text-sm text-[#94A3B8]">{level.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={!canGoBack}
            className="px-6 py-3 text-[#94A3B8] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={currentAnswer === undefined}
            className="px-8 py-3 rounded-xl font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              backgroundColor: currentAnswer !== undefined ? pillar.color : "#1E293B",
              color: currentAnswer !== undefined ? "white" : "#64748B",
            }}
          >
            {isLastQuestion ? "See Results" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Results Component
function Results({
  answers,
  onRetake,
}: {
  answers: Record<string, number>;
  onRetake: () => void;
}) {
  const percentage = calculatePercentage(answers);
  const tier = getTierBadge(percentage);

  // Find top and bottom pillars
  const pillarScores = pillars.map((p) => ({
    ...p,
    score: calculatePillarScore(answers, p.id),
    percentage: Math.round((calculatePillarScore(answers, p.id) / 12) * 100),
  }));

  const sortedPillars = [...pillarScores].sort((a, b) => b.score - a.score);
  const topPillar = sortedPillars[0];
  const bottomPillar = sortedPillars[sortedPillars.length - 1];

  // Categorize pillars by risk level
  const criticalPillars = pillarScores.filter((p) => p.percentage < 40);
  const priorityPillars = pillarScores.filter((p) => p.percentage >= 40 && p.percentage < 60);
  const monitorPillars = pillarScores.filter((p) => p.percentage >= 60 && p.percentage < 80);

  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0F172A] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-xl bg-[#38BDF8] flex items-center justify-center text-xl font-bold text-[#0F172A] mx-auto mb-4">
            SPM
          </div>
          <h1 className="text-3xl font-bold text-[#E2E8F0] mb-2">
            Your SPM Healthcheck Results
          </h1>
          <p className="text-[#94A3B8]">
            Completed {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* 4-Quadrant Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Top Left: Overall Score + Badge */}
          <div className="bg-[#1E293B]/80 backdrop-blur-sm rounded-xl p-6 border border-[#38BDF8]/20 flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
              Overall Score
            </h3>
            <div className="relative w-32 h-32 mb-4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#1E293B"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={tier.color}
                  strokeWidth="3"
                  strokeDasharray={`${percentage}, 100`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold" style={{ color: tier.color }}>
                  {percentage}
                </span>
                <span className="text-xs text-[#94A3B8]">out of 100</span>
              </div>
            </div>
            <div
              className="px-4 py-2 rounded-full font-bold text-white mb-3"
              style={{ backgroundColor: tier.color }}
            >
              {tier.label}
            </div>
            <p className="text-sm text-[#94A3B8] text-center">{tier.description}</p>
          </div>

          {/* Top Right: Spider Chart */}
          <div className="bg-[#1E293B]/80 backdrop-blur-sm rounded-xl p-6 border border-[#38BDF8]/20">
            <h3 className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
              Pillar Overview
            </h3>
            <SpiderChart answers={answers} />
          </div>

          {/* Bottom Left: Risk Snapshot */}
          <div className="bg-[#1E293B]/80 backdrop-blur-sm rounded-xl p-6 border border-[#38BDF8]/20">
            <h3 className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
              Risk Snapshot
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[#dc2626]/10 rounded-lg border border-[#dc2626]/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#dc2626]" />
                  <span className="text-[#E2E8F0] font-medium">Critical</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#dc2626]">{criticalPillars.length}</span>
                  <span className="text-xs text-[#94A3B8]">pillars &lt;40%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F59E0B]/10 rounded-lg border border-[#F59E0B]/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <span className="text-[#E2E8F0] font-medium">Priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#F59E0B]">{priorityPillars.length}</span>
                  <span className="text-xs text-[#94A3B8]">pillars 40-60%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#3B82F6]/10 rounded-lg border border-[#3B82F6]/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                  <span className="text-[#E2E8F0] font-medium">Monitor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#3B82F6]">{monitorPillars.length}</span>
                  <span className="text-xs text-[#94A3B8]">pillars 60-80%</span>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 text-center">
                <p className="text-sm text-[#94A3B8]">
                  <span className="font-semibold text-[#10B981]">Strongest:</span>{" "}
                  <span style={{ color: topPillar.color }}>{topPillar.name}</span>
                </p>
                <p className="text-sm text-[#94A3B8] mt-1">
                  <span className="font-semibold text-[#dc2626]">Needs Work:</span>{" "}
                  <span style={{ color: bottomPillar.color }}>{bottomPillar.name}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Right: Action Plan */}
          <div className="bg-[#1E293B]/80 backdrop-blur-sm rounded-xl p-6 border border-[#38BDF8]/20">
            <h3 className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
              Action Plan
            </h3>
            <div className="space-y-3">
              {[...pillarScores]
                .sort((a, b) => a.score - b.score)
                .slice(0, 3)
                .map((pillar, i) => (
                  <div
                    key={pillar.id}
                    className="flex items-center gap-3 p-3 bg-[#0F172A] rounded-lg"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{
                        backgroundColor:
                          i === 0 ? "#dc2626" : i === 1 ? "#F59E0B" : "#3B82F6",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#E2E8F0] truncate">
                        {pillar.name}
                      </p>
                      <p className="text-xs text-[#64748B]">
                        {pillar.percentage}% - Needs attention
                      </p>
                    </div>
                    <Link
                      href={pillar.learnLink}
                      className="text-xs font-medium px-2 py-1 rounded-lg hover:bg-white/10 transition-colors"
                      style={{ color: pillar.color }}
                    >
                      Learn →
                    </Link>
                  </div>
                ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm text-[#94A3B8] mb-3">
                {percentage < 50
                  ? "Your SPM program has significant gaps. A comprehensive review is recommended."
                  : percentage < 75
                  ? "Solid foundation with room to improve. Focus on the pillars above."
                  : "Strong SPM program! Fine-tune the areas above for excellence."}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Pillar Breakdown */}
        <div className="bg-[#1E293B]/80 backdrop-blur-sm rounded-xl p-6 border border-[#38BDF8]/20 mb-10">
          <h3 className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
            Detailed Breakdown
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {pillarScores.map((pillar) => {
              const Icon = pillar.icon;
              const isExpanded = expandedPillar === pillar.id;
              return (
                <div
                  key={pillar.id}
                  className="bg-[#0F172A] rounded-xl p-4 cursor-pointer transition-all hover:bg-[#0F172A]/80"
                  onClick={() =>
                    setExpandedPillar(isExpanded ? null : pillar.id)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: pillar.color }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p
                          className="font-semibold"
                          style={{ color: pillar.color }}
                        >
                          {pillar.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-[#1E293B] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${pillar.percentage}%`,
                                backgroundColor:
                                  pillar.percentage < 40
                                    ? "#dc2626"
                                    : pillar.percentage < 70
                                    ? "#ca8a04"
                                    : "#16a34a",
                              }}
                            />
                          </div>
                          <span className="text-xs text-[#64748B]">
                            {pillar.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-[#64748B] transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                      {pillar.questions.map((q, i) => {
                        const answer = answers[`${pillar.id}-${i}`] ?? 0;
                        const level = maturityLevels[answer];
                        return (
                          <div key={i} className="text-sm">
                            <p className="text-[#94A3B8] mb-1">{q}</p>
                            <p
                              className="font-medium"
                              style={{
                                color:
                                  answer < 2
                                    ? "#dc2626"
                                    : answer < 3
                                    ? "#ca8a04"
                                    : "#16a34a",
                              }}
                            >
                              → {level.label}
                            </p>
                          </div>
                        );
                      })}
                      <Link
                        href={pillar.learnLink}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-block mt-2 text-sm font-medium hover:underline"
                        style={{ color: pillar.color }}
                      >
                        Learn more →
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Consulting CTA Section */}
        <div className="bg-gradient-to-r from-[#38BDF8]/10 to-[#0891B2]/10 rounded-xl p-8 border border-[#38BDF8]/30 mb-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#E2E8F0] mb-2">
              Turn Insights Into Action
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">
              Your assessment reveals opportunities for improvement. Get expert guidance to build a world-class SPM program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#0F172A]/50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#38BDF8] mb-1">40%</div>
              <p className="text-sm text-[#94A3B8]">Average efficiency gain</p>
            </div>
            <div className="bg-[#0F172A]/50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#38BDF8] mb-1">2.5x</div>
              <p className="text-sm text-[#94A3B8]">Typical ROI in Year 1</p>
            </div>
            <div className="bg-[#0F172A]/50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#38BDF8] mb-1">60%</div>
              <p className="text-sm text-[#94A3B8]">Dispute reduction</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/toddfather/contact?topic=healthcheck-review">
              <button className="px-8 py-4 bg-[#38BDF8] text-[#0F172A] font-bold rounded-xl hover:bg-[#38BDF8]/90 transition-all hover:scale-105">
                Schedule SPM Review
              </button>
            </Link>
            <Link href="/syndicate">
              <button className="px-8 py-4 border-2 border-[#38BDF8]/50 text-[#38BDF8] font-bold rounded-xl hover:border-[#38BDF8] transition-all">
                Join The Syndicate
              </button>
            </Link>
          </div>
        </div>

        {/* Retake */}
        <div className="text-center">
          <button
            onClick={onRetake}
            className="text-[#94A3B8] hover:text-white text-sm transition-colors"
          >
            Retake Assessment
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function SPMHealthcheckContent() {
  const [phase, setPhase] = useState<Phase>("gate");
  const [state, setState] = useState<HealthcheckState>({
    email: "",
    answers: {},
    currentPillar: 0,
    currentQuestion: 0,
  });

  // Load saved state on mount
  useEffect(() => {
    const saved = loadState();
    if (saved && saved.email) {
      setState(saved);
      // If they have answers, go to quiz
      if (Object.keys(saved.answers).length > 0) {
        setPhase("quiz");
      }
    }
  }, []);

  const handleGateSubmit = (email: string) => {
    const newState = { ...state, email };
    setState(newState);
    saveState(newState);
    setPhase("quiz");
  };

  const handleAnswer = (pillarIndex: number, questionIndex: number, value: number) => {
    const pillar = pillars[pillarIndex];
    const key = `${pillar.id}-${questionIndex}`;

    const newState = {
      ...state,
      currentPillar: pillarIndex,
      currentQuestion: questionIndex,
      answers: value >= 0 ? { ...state.answers, [key]: value } : state.answers,
    };
    setState(newState);
    saveState(newState);
  };

  const handleComplete = () => {
    setPhase("results");
  };

  const handleRetake = () => {
    clearState();
    setState({
      email: state.email, // Keep email
      answers: {},
      currentPillar: 0,
      currentQuestion: 0,
    });
    setPhase("quiz");
  };

  if (phase === "gate") {
    return <GateScreen onSubmit={handleGateSubmit} savedEmail={state.email} />;
  }

  if (phase === "quiz") {
    return (
      <Quiz
        state={state}
        onAnswer={handleAnswer}
        onComplete={handleComplete}
      />
    );
  }

  return <Results answers={state.answers} onRetake={handleRetake} />;
}
