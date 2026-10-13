"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { vision } from "@/lib/site";
import { useStaticMotion } from "@/lib/useStaticMotion";

function Word({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useStaticMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = vision.text.split(" ");

  return (
    <section id="vision" className="relative overflow-hidden py-28 sm:py-40">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,139,255,0.12),transparent_60%)]" />
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky">
          <span aria-hidden className="h-px w-8 bg-gradient-to-r from-sky to-transparent" />
          Our vision
        </p>
        <p className="font-display text-2xl font-semibold leading-[1.35] text-white sm:text-4xl lg:text-5xl">
          {reduce
            ? vision.text
            : words.map((w, i) => (
                <Word key={i} progress={scrollYProgress} range={[i / words.length, Math.min(1, (i + 3) / words.length)]}>
                  {w}
                </Word>
              ))}
        </p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 font-display text-xl font-bold tracking-tight sm:text-2xl"
        >
          <span className="text-gradient">{vision.motto}</span>
        </motion.p>
      </div>
    </section>
  );
}
