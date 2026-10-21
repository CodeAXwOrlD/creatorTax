"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "float" | "scale" | "blur";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
  distance?: number;
  className?: string;
  spring?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  direction = "up",
  distance = 32,
  className = "",
  spring = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Calculate directional initial offsets
  let initialVariants: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
    filter?: string;
  } = { opacity: 0 };

  switch (direction) {
    case "left":
      initialVariants = { opacity: 0, x: -distance, y: 0 };
      break;
    case "right":
      initialVariants = { opacity: 0, x: distance, y: 0 };
      break;
    case "down":
      initialVariants = { opacity: 0, y: -distance };
      break;
    case "scale":
      initialVariants = { opacity: 0, scale: 0.88, y: 16 };
      break;
    case "float":
      initialVariants = { opacity: 0, y: distance * 1.2, scale: 0.94, rotate: -2 };
      break;
    case "blur":
      initialVariants = { opacity: 0, filter: "blur(10px)", y: 20 };
      break;
    case "up":
    default:
      initialVariants = { opacity: 0, y: distance };
      break;
  }

  const transitionConfig = spring
    ? {
        type: "spring" as const,
        stiffness: 140,
        damping: 18,
        mass: 0.8,
        delay,
      }
    : {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      };

  return (
    <motion.div
      className={className}
      initial={initialVariants}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={transitionConfig}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container for lists of items
 */
export function StaggerReveal({
  children,
  staggerDelay = 0.08,
  className = "",
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
