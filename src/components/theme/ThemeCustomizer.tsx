'use client';

import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import {
  Palette,
  Sparkles,
  Type,
  Image as ImageIcon,
  Download,
  RotateCcw,
  Check,
  ChevronDown,
} from 'lucide-react';

interface ColorPickerProps {
  label: string;
  value: { h: number; s: number; l: number };
  onChange: (value: { h: number; s: number; l: number }) => void;
}

function HSLColorPicker({ label, value, onChange }: ColorPickerProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-text-primary">{label}</label>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-muted w-4">H</span>
          <input
            type="range"
            min="0"
            max="360"
            value={value.h}
            onChange={(e) => onChange({ ...value, h: parseInt(e.target.value) })}
            className="flex-1 h-2 rounded-lg appearance-none bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 via-purple-500 to-red-500 cursor-pointer"
          />
          <span className="text-xs text-text-muted w-8">{value.h}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-muted w-4">S</span>
          <input
            type="range"
            min="0"
            max="100"
            value={value.s}
            onChange={(e) => onChange({ ...value, s: parseInt(e.target.value) })}
            className="flex-1 h-2 rounded-lg appearance-none bg-gradient-to-r from-gray-500 to-purple-500 cursor-pointer"
          />
          <span className="text-xs text-text-muted w-8">{value.s}%</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-muted w-4">L</span>
          <input
            type="range"
            min="0"
            max="100"
            value={value.l}
            onChange={(e) => onChange({ ...value, l: parseInt(e.target.value) })}
            className="flex-1 h-2 rounded-lg appearance-none bg-gradient-to-r from-black via-purple-500 to-white cursor-pointer"
          />
          <span className="text-xs text-text-muted w-8">{value.l}%</span>
        </div>
      </div>
      <div
        className="h-8 rounded-lg border border-border-subtle"
        style={{ backgroundColor: `hsl(${value.h}, ${value.s}%, ${value.l}%)` }}
      />
    </div>
  );
}

interface EffectToggleProps {
  label: string;
  enabled: boolean;
  value: number;
  onChange: (enabled: boolean, value: number) => void;
}

function EffectToggle({ label, enabled, value, onChange }: EffectToggleProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-text-primary">{label}</label>
        <button
          onClick={() => onChange(!enabled, value)}
          className={cn(
            'w-10 h-6 rounded-full transition-colors relative',
            enabled ? 'bg-accent' : 'bg-bg-hover'
          )}
        >
          <span
            className={cn(
              'absolute top-1 w-4 h-4 rounded-full bg-white transition-transform',
              enabled ? 'left-5' : 'left-1'
            )}
          />
        </button>
      </div>
      {enabled && (
        <input
          type="range"
          min="0"
          max="100"
          value={value * 100}
          onChange={(e) => onChange(enabled, parseInt(e.target.value) / 100)}
          className="w-full h-2 rounded-lg appearance-none bg-bg-hover cursor-pointer"
        />
      )}
    </div>
  );
}

const presetThemes = [
  {
    id: 'noir-purple',
    name: 'Noir Purple',
    accent: { h: 271, s: 81, l: 56 },
  },
  {
    id: 'stardust-gold',
    name: 'Stardust Gold',
    accent: { h: 43, s: 74, l: 49 },
  },
  {
    id: 'midnight-blue',
    name: 'Midnight Blue',
    accent: { h: 217, s: 91, l: 60 },
  },
  {
    id: 'emerald',
    name: 'Emerald',
    accent: { h: 160, s: 84, l: 39 },
  },
  {
    id: 'crimson',
    name: 'Crimson',
    accent: { h: 0, s: 84, l: 60 },
  },
];

const backgroundOptions = [
  { id: 'solid', name: 'Solid Dark' },
  { id: 'cosmic', name: 'Cosmic Stardust' },
  { id: 'nebula', name: 'Nebula' },
];

export function ThemeCustomizer() {
  const { theme, updateAccent, updateEffects, resetToDefault, exportCSS, exportConfig } = useTheme();
  const [activeSection, setActiveSection] = useState<string | null>('colors');
  const [showExport, setShowExport] = useState(false);

  const sections = [
    { id: 'colors', label: 'Colors', icon: Palette },
    { id: 'effects', label: 'Effects', icon: Sparkles },
    { id: 'typography', label: 'Typography', icon: Type },
    { id: 'background', label: 'Background', icon: ImageIcon },
  ];

  return (
    <div className="space-y-6">
      {/* Preset Themes */}
      <div className="noir-panel p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Preset Themes
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {presetThemes.map((preset) => {
            const isActive =
              theme.colors.accent.h === preset.accent.h &&
              theme.colors.accent.s === preset.accent.s;
            return (
              <button
                key={preset.id}
                onClick={() => updateAccent(preset.accent)}
                className={cn(
                  'p-3 rounded-lg border transition-all text-center',
                  isActive
                    ? 'border-accent bg-accent/10'
                    : 'border-border-subtle hover:border-accent/50'
                )}
              >
                <div
                  className="w-8 h-8 rounded-full mx-auto mb-2"
                  style={{
                    backgroundColor: `hsl(${preset.accent.h}, ${preset.accent.s}%, ${preset.accent.l}%)`,
                  }}
                />
                <span className="text-xs text-text-secondary">{preset.name}</span>
                {isActive && (
                  <Check className="w-4 h-4 text-accent mx-auto mt-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Customization Sections */}
      <div className="space-y-4">
        {sections.map((section) => {
          const Icon = section.icon;
          const isOpen = activeSection === section.id;

          return (
            <div key={section.id} className="noir-panel overflow-hidden">
              <button
                onClick={() => setActiveSection(isOpen ? null : section.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-bg-hover transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-accent" />
                  <span className="font-medium text-text-primary">
                    {section.label}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-text-muted transition-transform',
                    isOpen && 'rotate-180'
                  )}
                />
              </button>

              {isOpen && (
                <div className="p-6 pt-0 border-t border-border-subtle">
                  {section.id === 'colors' && (
                    <div className="space-y-6 pt-4">
                      <HSLColorPicker
                        label="Accent Color"
                        value={theme.colors.accent}
                        onChange={updateAccent}
                      />
                    </div>
                  )}

                  {section.id === 'effects' && (
                    <div className="space-y-6 pt-4">
                      <EffectToggle
                        label="Film Grain"
                        enabled={theme.effects.grain.enabled}
                        value={theme.effects.grain.opacity}
                        onChange={(enabled, opacity) =>
                          updateEffects({
                            ...theme.effects,
                            grain: { enabled, opacity },
                          })
                        }
                      />
                      <EffectToggle
                        label="Vignette"
                        enabled={theme.effects.vignette.enabled}
                        value={theme.effects.vignette.opacity}
                        onChange={(enabled, opacity) =>
                          updateEffects({
                            ...theme.effects,
                            vignette: { ...theme.effects.vignette, enabled, opacity },
                          })
                        }
                      />
                      <EffectToggle
                        label="Neon Glow"
                        enabled={theme.effects.neonGlow.enabled}
                        value={theme.effects.neonGlow.intensity}
                        onChange={(enabled, intensity) =>
                          updateEffects({
                            ...theme.effects,
                            neonGlow: { ...theme.effects.neonGlow, enabled, intensity },
                          })
                        }
                      />
                    </div>
                  )}

                  {section.id === 'typography' && (
                    <div className="space-y-4 pt-4">
                      <p className="text-sm text-text-secondary">
                        Typography customization coming soon. Currently using the
                        default Inter font stack.
                      </p>
                    </div>
                  )}

                  {section.id === 'background' && (
                    <div className="space-y-4 pt-4">
                      <div className="grid grid-cols-3 gap-3">
                        {backgroundOptions.map((bg) => (
                          <button
                            key={bg.id}
                            className={cn(
                              'p-4 rounded-lg border text-center transition-all',
                              theme.background.type === bg.id
                                ? 'border-accent bg-accent/10'
                                : 'border-border-subtle hover:border-accent/50'
                            )}
                          >
                            <span className="text-sm text-text-secondary">
                              {bg.name}
                            </span>
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="parallax"
                          checked={theme.background.parallax}
                          onChange={() => {}}
                          className="w-4 h-4 rounded border-border-subtle"
                        />
                        <label
                          htmlFor="parallax"
                          className="text-sm text-text-secondary"
                        >
                          Enable parallax scrolling
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={resetToDefault}
          variant="secondary"
          className="btn-noir-secondary"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset to Defaults
        </Button>
        <Button onClick={() => setShowExport(!showExport)} className="btn-gold">
          <Download className="w-4 h-4 mr-2" />
          Export Theme
        </Button>
      </div>

      {/* Export Panel */}
      {showExport && (
        <div className="noir-panel p-6 space-y-4">
          <h3 className="text-lg font-semibold text-text-primary">
            Export Options
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-text-primary mb-2">
                CSS Variables
              </h4>
              <pre className="p-4 rounded-lg bg-bg-primary text-xs text-text-secondary overflow-x-auto max-h-48">
                {exportCSS()}
              </pre>
            </div>
            <div>
              <h4 className="text-sm font-medium text-text-primary mb-2">
                JSON Config
              </h4>
              <pre className="p-4 rounded-lg bg-bg-primary text-xs text-text-secondary overflow-x-auto max-h-48">
                {JSON.stringify(exportConfig(), null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeCustomizer;
