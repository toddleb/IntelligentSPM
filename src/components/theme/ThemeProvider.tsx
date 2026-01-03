'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { ThemeConfig, HSLColor } from '@/types';

// Default theme configuration
const defaultTheme: ThemeConfig = {
  id: 'noir-purple',
  name: 'Deep Noir',
  colors: {
    accent: { h: 270, s: 76, l: 55 },
    gold: '#D4AF37',
    silver: '#C0C0C0',
    bgPrimary: '#050506',
    bgSecondary: '#0A0A0C',
    bgTertiary: '#12121A',
    textPrimary: '#E4E4E7',
    textSecondary: '#A1A1AA',
  },
  typography: {
    displayFont: 'var(--font-cinzel)',
    headingFont: 'var(--font-inter)',
    bodyFont: 'var(--font-inter)',
    monoFont: 'var(--font-jetbrains)',
    baseSize: 16,
    scaleRatio: 1.25,
  },
  effects: {
    grain: { enabled: true, opacity: 0.04 },
    vignette: { enabled: true, opacity: 0.5, spread: 40 },
    scanlines: { enabled: false, opacity: 0.07 },
    neonGlow: { enabled: true, opacity: 0.5, intensity: 1 },
    halftone: { enabled: false, opacity: 0.08, size: 4 },
  },
  background: {
    type: 'cosmic',
    value: '',
    parallax: true,
    particles: true,
  },
  components: {
    borderRadius: 'lg',
    buttonStyle: 'gradient',
    cardStyle: 'glass',
  },
};

// Preset themes
export const presetThemes: ThemeConfig[] = [
  defaultTheme,
  {
    id: 'stardust-gold',
    name: 'Stardust Gold',
    colors: {
      accent: { h: 45, s: 80, l: 50 },
      gold: '#FFD700',
      silver: '#B8860B',
      bgPrimary: '#0A0805',
      bgSecondary: '#14120D',
      bgTertiary: '#1E1A14',
      textPrimary: '#F5F0E8',
      textSecondary: '#D4CCC0',
    },
    typography: {
      displayFont: 'var(--font-cinzel)',
      headingFont: 'var(--font-inter)',
      bodyFont: 'var(--font-inter)',
      monoFont: 'var(--font-jetbrains)',
      baseSize: 16,
      scaleRatio: 1.25,
    },
    effects: {
      grain: { enabled: true, opacity: 0.05 },
      vignette: { enabled: true, opacity: 0.6, spread: 35 },
      scanlines: { enabled: false, opacity: 0.05 },
      neonGlow: { enabled: true, opacity: 0.4, intensity: 0.8 },
      halftone: { enabled: false, opacity: 0.06, size: 4 },
    },
    background: {
      type: 'cosmic',
      value: '',
      parallax: true,
      particles: true,
    },
    components: {
      borderRadius: 'lg',
      buttonStyle: 'gradient',
      cardStyle: 'glass',
    },
  },
  {
    id: 'midnight-blue',
    name: 'Midnight Blue',
    colors: {
      accent: { h: 220, s: 70, l: 50 },
      gold: '#4169E1',
      silver: '#B0C4DE',
      bgPrimary: '#05080C',
      bgSecondary: '#0A0F18',
      bgTertiary: '#121A28',
      textPrimary: '#E4E8EF',
      textSecondary: '#A1AABB',
    },
    typography: {
      displayFont: 'var(--font-cinzel)',
      headingFont: 'var(--font-inter)',
      bodyFont: 'var(--font-inter)',
      monoFont: 'var(--font-jetbrains)',
      baseSize: 16,
      scaleRatio: 1.25,
    },
    effects: {
      grain: { enabled: true, opacity: 0.03 },
      vignette: { enabled: true, opacity: 0.4, spread: 45 },
      scanlines: { enabled: false, opacity: 0.05 },
      neonGlow: { enabled: true, opacity: 0.5, intensity: 1 },
      halftone: { enabled: false, opacity: 0.08, size: 4 },
    },
    background: {
      type: 'cosmic',
      value: '',
      parallax: true,
      particles: true,
    },
    components: {
      borderRadius: 'xl',
      buttonStyle: 'gradient',
      cardStyle: 'glow',
    },
  },
];

interface ThemeContextValue {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
  updateColors: (colors: Partial<ThemeConfig['colors']>) => void;
  updateAccent: (accent: HSLColor) => void;
  updateEffects: (effects: Partial<ThemeConfig['effects']>) => void;
  updateBackground: (background: Partial<ThemeConfig['background']>) => void;
  updateComponents: (components: Partial<ThemeConfig['components']>) => void;
  resetToDefault: () => void;
  loadPreset: (presetId: string) => void;
  exportCSS: () => string;
  exportConfig: () => string;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'intelligentspm-theme';

// Apply theme to CSS variables
function applyThemeToDOM(theme: ThemeConfig) {
  const root = document.documentElement;

  // Accent colors (HSL)
  root.style.setProperty('--accent-h', String(theme.colors.accent.h));
  root.style.setProperty('--accent-s', `${theme.colors.accent.s}%`);
  root.style.setProperty('--accent-l', `${theme.colors.accent.l}%`);

  // Other colors
  root.style.setProperty('--gold', theme.colors.gold);
  root.style.setProperty('--silver', theme.colors.silver);
  root.style.setProperty('--bg-primary', theme.colors.bgPrimary);
  root.style.setProperty('--bg-secondary', theme.colors.bgSecondary);
  root.style.setProperty('--bg-tertiary', theme.colors.bgTertiary);
  root.style.setProperty('--text-primary', theme.colors.textPrimary);
  root.style.setProperty('--text-secondary', theme.colors.textSecondary);

  // Effects
  root.style.setProperty(
    '--grain-opacity',
    theme.effects.grain.enabled ? String(theme.effects.grain.opacity) : '0'
  );
  root.style.setProperty(
    '--vignette-opacity',
    theme.effects.vignette.enabled ? String(theme.effects.vignette.opacity) : '0'
  );
  root.style.setProperty('--vignette-spread', `${theme.effects.vignette.spread}%`);
  root.style.setProperty(
    '--scanline-opacity',
    theme.effects.scanlines.enabled ? String(theme.effects.scanlines.opacity) : '0'
  );
  root.style.setProperty(
    '--neon-opacity',
    theme.effects.neonGlow.enabled ? String(theme.effects.neonGlow.opacity) : '0'
  );
  root.style.setProperty(
    '--halftone-opacity',
    theme.effects.halftone.enabled ? String(theme.effects.halftone.opacity) : '0'
  );
  root.style.setProperty('--halftone-size', `${theme.effects.halftone.size}px`);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeConfig>(defaultTheme);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ThemeConfig;
        setThemeState(parsed);
        applyThemeToDOM(parsed);
      } catch {
        // Invalid stored theme, use default
        applyThemeToDOM(defaultTheme);
      }
    } else {
      applyThemeToDOM(defaultTheme);
    }
    setIsHydrated(true);
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
      applyThemeToDOM(theme);
    }
  }, [theme, isHydrated]);

  const setTheme = useCallback((newTheme: ThemeConfig) => {
    setThemeState(newTheme);
  }, []);

  const updateColors = useCallback((colors: Partial<ThemeConfig['colors']>) => {
    setThemeState((prev) => ({
      ...prev,
      colors: { ...prev.colors, ...colors },
    }));
  }, []);

  const updateAccent = useCallback((accent: HSLColor) => {
    setThemeState((prev) => ({
      ...prev,
      colors: { ...prev.colors, accent },
    }));
  }, []);

  const updateEffects = useCallback((effects: Partial<ThemeConfig['effects']>) => {
    setThemeState((prev) => ({
      ...prev,
      effects: { ...prev.effects, ...effects },
    }));
  }, []);

  const updateBackground = useCallback((background: Partial<ThemeConfig['background']>) => {
    setThemeState((prev) => ({
      ...prev,
      background: { ...prev.background, ...background },
    }));
  }, []);

  const updateComponents = useCallback((components: Partial<ThemeConfig['components']>) => {
    setThemeState((prev) => ({
      ...prev,
      components: { ...prev.components, ...components },
    }));
  }, []);

  const resetToDefault = useCallback(() => {
    setThemeState(defaultTheme);
  }, []);

  const loadPreset = useCallback((presetId: string) => {
    const preset = presetThemes.find((p) => p.id === presetId);
    if (preset) {
      setThemeState(preset);
    }
  }, []);

  const exportCSS = useCallback(() => {
    const { colors, effects } = theme;
    return `:root {
  --accent-h: ${colors.accent.h};
  --accent-s: ${colors.accent.s}%;
  --accent-l: ${colors.accent.l}%;
  --gold: ${colors.gold};
  --silver: ${colors.silver};
  --bg-primary: ${colors.bgPrimary};
  --bg-secondary: ${colors.bgSecondary};
  --bg-tertiary: ${colors.bgTertiary};
  --text-primary: ${colors.textPrimary};
  --text-secondary: ${colors.textSecondary};
  --grain-opacity: ${effects.grain.enabled ? effects.grain.opacity : 0};
  --vignette-opacity: ${effects.vignette.enabled ? effects.vignette.opacity : 0};
  --scanline-opacity: ${effects.scanlines.enabled ? effects.scanlines.opacity : 0};
  --neon-opacity: ${effects.neonGlow.enabled ? effects.neonGlow.opacity : 0};
  --halftone-opacity: ${effects.halftone.enabled ? effects.halftone.opacity : 0};
  --halftone-size: ${effects.halftone.size}px;
}`;
  }, [theme]);

  const exportConfig = useCallback(() => {
    return JSON.stringify(theme, null, 2);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        updateColors,
        updateAccent,
        updateEffects,
        updateBackground,
        updateComponents,
        resetToDefault,
        loadPreset,
        exportCSS,
        exportConfig,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { defaultTheme };
