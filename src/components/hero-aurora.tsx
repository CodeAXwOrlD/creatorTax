"use client";

import { useReducedMotion } from "motion/react";

export function HeroAurora() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="hero-motion-root" aria-hidden="true">
      {/* ── Background Aurora / Cloud Mesh Waves (Full Width Ambient Atmosphere) ── */}
      <div className="aurora-container">
        <div className="aurora-mesh mesh-1" />
        <div className="aurora-mesh mesh-2" />
        <div className="aurora-mesh mesh-3" />
        <div className="aurora-mesh mesh-4" />
        <div className="aurora-noise-overlay" />
      </div>
    </div>
  );
}
