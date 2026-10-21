"use client";

import React, { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  glowColor?: string;
  tiltAngle?: number;
  scale?: number;
}

export function TiltCard({
  children,
  className = "",
  href,
  glowColor = "rgba(91, 224, 160, 0.18)",
  tiltAngle = 10,
  scale = 1.02,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || reduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -tiltAngle;
    const rY = ((x - centerX) / centerX) * tiltAngle;

    setRotateX(rX);
    setRotateY(rY);
    setSpotlightPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const content = (
    <motion.div
      ref={cardRef}
      className={`tilt-card-root ${className} ${href ? "is-clickable" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered && !reduceMotion ? rotateX : 0,
        rotateY: isHovered && !reduceMotion ? rotateY : 0,
        scale: isHovered && !reduceMotion ? scale : 1,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.6,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="tilt-spotlight-layer"
        style={{
          background: isHovered
            ? `radial-gradient(circle 280px at ${spotlightPos.x}% ${spotlightPos.y}%, ${glowColor}, transparent 70%)`
            : "transparent",
          opacity: isHovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      <div className="tilt-card-content" style={{ transform: "translateZ(15px)" }}>
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="tilt-card-link-wrapper" style={{ display: "block" }}>
        {content}
      </Link>
    );
  }

  return content;
}
