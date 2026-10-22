"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "motion/react";

export function HeroEditorial() {
  const [hasPointer, setHasPointer] = useState(false);

  // Global window scroll tracking - instantly available and continuously updated
  const { scrollY } = useScroll();

  // 1. Background Parallax: background visibly moves down by 140px and gently scales as page scrolls down
  const bgY = useTransform(scrollY, [0, 750], [0, 140]);
  const bgScale = useTransform(scrollY, [0, 750], [1, 1.07]);

  // 2. Headline & Copy Exit: smoothly drifts upward and fades out as user leaves the hero
  const headlineY = useTransform(scrollY, [0, 480], [0, -65]);
  const headlineOpacity = useTransform(scrollY, [0, 380], [1, 0.05]);

  // 3. CTAs and trust elements follow with a slight offset
  const actionsY = useTransform(scrollY, [0, 480], [0, -45]);
  const actionsOpacity = useTransform(scrollY, [0, 340], [1, 0.05]);

  // 4. Scroll indicator: fades away promptly so it never collides with next section
  const scrollCueOpacity = useTransform(scrollY, [0, 140], [1, 0]);

  // 5. Desktop Pointer Physics: subtle camera-like optical depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 90 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 90 });

  useEffect(() => {
    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    setHasPointer(pointerFine);

    if (!pointerFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(x * 10);
      mouseY.set(y * 7);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="editorial-hero" aria-label="Hero Introduction">
      {/* ── Background Landscape Layer (Scroll Parallax + Desktop Cursor Inertia) ── */}
      <motion.div
        className="editorial-hero-bg-wrap"
        style={{
          y: bgY,
          scale: bgScale,
        }}
        aria-hidden="true"
      >
        <motion.div
          className="editorial-hero-bg-inner"
          style={hasPointer ? { x: springX, y: springY } : undefined}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/hero-landscape.jpg"
            alt="Alpine mountain landscape with lake and freelancer workspace in morning sunlight"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="editorial-hero-img"
          />
        </motion.div>
      </motion.div>

      {/* ── Controlled Contrast Scrims (Preserves Lake Vista & Workspace) ── */}
      <div className="editorial-hero-scrim-left" aria-hidden="true" />
      <div className="editorial-hero-scrim-bottom" aria-hidden="true" />

      {/* ── Editorial Foreground Typography & CTAs (Scroll Exit + Initial Entrance) ── */}
      <div className="container editorial-hero-container">
        <div className="editorial-hero-content">
          {/* Eyebrow */}
          <motion.div
            className="editorial-eyebrow-wrap"
            style={{ y: headlineY, opacity: headlineOpacity }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="editorial-eyebrow">
              FINANCIAL CLARITY FOR INDIA&apos;S FREELANCERS
            </span>
            <span className="editorial-eyebrow-line" />
          </motion.div>

          {/* Editorial Serif Headline (Clean, unclipped, elegant literary weight) */}
          <motion.div
            style={{ y: headlineY, opacity: headlineOpacity }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="editorial-headline">
              <span className="editorial-headline-lead">
                Make sense of your money.
              </span>
              <em className="editorial-headline-accent">
                Keep more of what you earn.
              </em>
            </h1>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            className="editorial-copy"
            style={{ y: headlineY, opacity: headlineOpacity }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Practical tax, GST and financial guides for freelancers,
            creators and digital professionals in India.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            className="editorial-actions"
            style={{ y: actionsY, opacity: actionsOpacity }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link className="btn btn-editorial-primary" href="/guides">
              <span>Explore Guides</span>
              <ArrowRight size={15} className="btn-arrow" />
            </Link>

            <Link
              className="btn secondary btn-editorial-secondary"
              href="/tools/44ada-calculator"
            >
              <span>Try the 44ADA Calculator</span>
              <ArrowUpRight size={15} className="btn-arrow" />
            </Link>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            className="editorial-trust-row"
            role="list"
            style={{ y: actionsY, opacity: actionsOpacity }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="editorial-trust-item" role="listitem">
              <span className="editorial-check">✓</span> Updated for FY 2026–27
            </span>
            <span className="editorial-trust-item" role="listitem">
              <span className="editorial-check">✓</span> Source-linked
            </span>
            <span className="editorial-trust-item" role="listitem">
              <span className="editorial-check">✓</span> Written for real freelancers
            </span>
          </motion.div>

          {/* Scroll Cue with early fade on scroll */}
          <motion.div
            style={{ opacity: scrollCueOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.68 }}
          >
            <a
              href="#topics"
              className="editorial-scroll-prompt"
              aria-label="Scroll to explore topics below"
            >
              <span>Scroll to explore</span>
              <ArrowDown size={13} className="editorial-scroll-arrow" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
