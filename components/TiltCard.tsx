"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import type { ReactNode, MouseEvent, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  intensity?: number;
};

/** 3D tilt that follows the pointer, with a travelling sheen. */
export default function TiltCard({ children, className = "", style, intensity = 8 }: Props) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const srx = useSpring(rx, { stiffness: 180, damping: 20 });
  const sry = useSpring(ry, { stiffness: 180, damping: 20 });
  const sheen = useMotionTemplate`radial-gradient(500px circle at ${mx}% ${my}%, rgba(255,255,255,0.08), transparent 55%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * intensity * 2);
    rx.set((0.5 - py) * intensity * 2);
    mx.set(px * 100);
    my.set(py * 100);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d", transformPerspective: 1200, ...style }}
      className={`relative ${className}`}
    >
      <motion.div aria-hidden style={{ background: sheen }} className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]" />
      {children}
    </motion.div>
  );
}
