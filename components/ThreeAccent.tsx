'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeAccent() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, host.clientWidth / host.clientHeight, 0.1, 100);
    camera.position.z = 6.8;

    // Elegant sculptural torus knot
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.28, 128, 24, 2, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0x486b5c,
      roughness: 0.35,
      metalness: 0.25,
      wireframe: false,
    });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    // Warm ambient light matching paper tone
    const ambientLight = new THREE.AmbientLight(0xfff7ea, 2.2);
    scene.add(ambientLight);

    // Golden sunlight highlight
    const sunLight = new THREE.DirectionalLight(0xf8d49a, 3.2);
    sunLight.position.set(4, 5, 5);
    scene.add(sunLight);

    // Subtle mint back fill light
    const fillLight = new THREE.DirectionalLight(0xcde1d5, 1.5);
    fillLight.position.set(-4, -3, -2);
    scene.add(fillLight);

    let frame = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = host.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.8;
      targetRotationX = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      if (!host) return;
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const animate = () => {
      frame = requestAnimationFrame(animate);
      knot.rotation.x += 0.0018 + (targetRotationX - knot.rotation.x) * 0.03;
      knot.rotation.y += 0.0035 + (targetRotationY - knot.rotation.y) * 0.03;
      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          if (!frame) animate();
        } else {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(host);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && host.contains(renderer.domElement)) {
        renderer.domElement.remove();
      }
    };
  }, []);

  return (
    <section className="three-note" aria-label="A study in creative clarity">
      <div className="three-copy-wrap">
        <span className="section-kicker">08 / A STUDY IN CLARITY</span>
        <p>
          Make the complicated<br />
          <em>feel a little lighter.</em>
        </p>
        <span className="three-subline">
          Clean administrative architecture clears cognitive space for the work you actually love doing.
        </span>
      </div>

      <div className="three-canvas" ref={mount} aria-hidden="true">
        {/* Fallback for reduced motion or non-webgl */}
        <div className="three-fallback-graphic">
          <div className="sculptural-ring" />
        </div>
      </div>

      <div className="three-footnote-bar">
        <span>INTERACTIVE WEBGL ACCENT</span>
        <span>CREATORTAX INDIA · EDITORIAL FIELD STUDY</span>
      </div>
    </section>
  );
}
