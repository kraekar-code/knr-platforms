"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { ReactNode, MouseEvent } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

/** A button that gently leans toward the pointer. */
export default function MagneticButton({ href, children, variant = "primary", className = "" }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-7 text-sm font-semibold tracking-wide transition-colors";
  const styles =
    variant === "primary"
      ? "bg-white text-ink hover:text-ink"
      : "border border-white/15 text-fog hover:border-white/40 hover:text-white";

  return (
    <motion.a
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
    >
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-sky via-violet to-amber transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
        />
      )}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white">{children}</span>
    </motion.a>
  );
}
