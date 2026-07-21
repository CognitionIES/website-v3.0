"use client";

/**
 * TEMPORARY font-preview widget — floating panel, bottom-right of viewport.
 * Lets you click between 4 candidate body fonts and see the whole site
 * update live, no reload needed. Choice persists across page navigation
 * via localStorage (session-only, doesn't touch any real user data).
 *
 * TO REMOVE once you've picked a font:
 *   1. Delete this file.
 *   2. Remove the <FontSwitcher /> import + render from app/layout.tsx.
 *   3. Hardcode your chosen font's CSS variable as --font-body in globals.css
 *      instead of leaving it switchable.
 */

import { useEffect, useState } from "react";

const FONT_OPTIONS = [
  { id: "inter", label: "Inter", cssVar: "var(--font-inter)" },
  { id: "jakarta", label: "Plus Jakarta Sans", cssVar: "var(--font-jakarta)" },
  { id: "manrope", label: "Manrope", cssVar: "var(--font-manrope)" },
  { id: "plex", label: "IBM Plex Sans", cssVar: "var(--font-plex)" },
  { id: "sora", label: "Sora", cssVar: "var(--font-sora)" },
  { id: "outfit", label: "Outfit", cssVar: "var(--font-outfit)" },
  { id: "lexend", label: "Lexend", cssVar: "var(--font-lexend)" },
  { id: "work-sans", label: "Work Sans", cssVar: "var(--font-work-sans)" },
  { id: "space-grotesk", label: "Space Grotesk", cssVar: "var(--font-space-grotesk)" },
  { id: "poppins", label: "Poppins", cssVar: "var(--font-poppins)" },
  { id: "source-sans", label: "Source Sans 3", cssVar: "var(--font-source-sans)" },
] as const;

type FontId = (typeof FONT_OPTIONS)[number]["id"];

const STORAGE_KEY = "font-preview-choice";

export default function FontSwitcher() {
  const [active, setActive] = useState<FontId>("inter");

  // Restore last choice on mount
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as FontId | null;
    if (saved && FONT_OPTIONS.some((f) => f.id === saved)) {
      applyFont(saved);
      setActive(saved);
    }
  }, []);

  function applyFont(id: FontId) {
    const option = FONT_OPTIONS.find((f) => f.id === id);
    if (!option) return;
    document.documentElement.style.setProperty("--font-body", option.cssVar);
    window.localStorage.setItem(STORAGE_KEY, id);
    setActive(id);
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        background: "#1a1a1a",
        border: "1px solid #333",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        fontFamily: "system-ui, sans-serif",
        maxHeight: "70vh",
        overflowY: "auto",
        width: "200px",
      }}
    >
      <span style={{ color: "#999", fontSize: "11px", padding: "0 4px", marginBottom: "2px" }}>
        Font preview (temp)
      </span>
      {FONT_OPTIONS.map((font) => (
        <button
          key={font.id}
          onClick={() => applyFont(font.id)}
          style={{
            padding: "8px 14px",
            borderRadius: "6px",
            border: active === font.id ? "1px solid #6ea8fe" : "1px solid transparent",
            background: active === font.id ? "#25324a" : "#252525",
            color: "#fff",
            fontSize: "13px",
            cursor: "pointer",
            textAlign: "left",
            fontFamily: font.cssVar,
          }}
        >
          {font.label}
        </button>
      ))}
    </div>
  );
}