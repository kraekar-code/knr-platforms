"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import HeroCanvas from "./HeroCanvas";
import MagneticButton from "./MagneticButton";

const headline = ["We", "build", "apps", "and", "platforms."];
const accented = new Set([2, 4]);

export default function Hero() {
  const reduce = useReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.4], [reduce ? 1 : 0.92, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.4], [reduce ? 24 : 48, 24]);
  const logoY = useTransform(scrollYProgress, [0.2, 0.8], [0, reduce ? 0 : -60]);

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-10 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(47,139,255,0.18),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h1 className="mx-auto max-w-5xl text-[2.9rem] font-bold leading-[0.98] text-white sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
          {headline.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-top">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.25 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`mr-[0.22em] inline-block ${accented.has(i) ? "text-gradient" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl"
        >
          Our own AI-powered platforms, open to everyone, and custom apps for our clients, designed, built and run by the same team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#products" className="min-h-14 px-8 text-base">
            See our platforms
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost" className="min-h-14 px-8 text-base">
            Let&apos;s talk
          </MagneticButton>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-mist"
        >
          Lumarcs · Veyra · Kairen · FlipLab · Custom apps
        </motion.p>
      </div>

      {/* Stage, in place of a looping hero video */}
      <motion.div
        ref={stage}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ scale, borderRadius: radius }}
        className="noise relative isolate mx-auto mt-16 aspect-[4/3] w-[calc(100%-2rem)] max-w-7xl overflow-hidden border border-white/10 bg-ink-2 sm:mt-20 sm:aspect-[16/9] sm:w-[calc(100%-3rem)]"
      >
        <div aria-hidden className="bg-grid absolute inset-0 -z-20" />
        <div aria-hidden className="absolute inset-0 -z-10">
          <motion.div
            animate={reduce ? undefined : { x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[-10%] top-[-20%] h-[60%] w-[55%] rounded-full bg-blue/40 blur-[110px]"
          />
          <motion.div
            animate={reduce ? undefined : { x: [0, -60, 40, 0], y: [0, 40, -30, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] right-[-10%] h-[60%] w-[50%] rounded-full bg-violet/30 blur-[120px]"
          />
          <motion.div
            animate={reduce ? undefined : { x: [0, 30, -30, 0], y: [0, 30, 20, 0] }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[40%] top-[20%] h-[50%] w-[35%] rounded-full bg-violet/35 blur-[110px]"
          />
        </div>
        <HeroCanvas />

        <motion.div style={{ y: logoY }} className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-float relative w-[46%] max-w-md">
            <div aria-hidden className="absolute inset-[10%] rounded-full bg-sky/25 blur-3xl" />
            <Image
              src="/logo.png"
              alt="KNR Platforms"
              width={990}
              height={500}
              priority
              className="relative w-full drop-shadow-[0_30px_60px_rgba(47,139,255,0.35)]"
            />
          </div>
        </motion.div>

        {/* HUD chips */}
        {[
          { label: "Apps & platforms", cls: "left-5 top-5 sm:left-8 sm:top-8", d: 0 },
          { label: "AI agents", cls: "right-5 top-5 sm:right-8 sm:top-8 hidden sm:flex", d: 0.6 },
          { label: "Custom apps", cls: "bottom-5 left-5 sm:bottom-8 sm:left-8", d: 1.2 },
          { label: "SaaS platforms", cls: "bottom-5 right-5 sm:bottom-8 sm:right-8 hidden sm:flex", d: 1.8 },
        ].map((c) => (
          <motion.span
            key={c.label}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 + c.d * 0.3, duration: 0.6 }}
            className={`glass absolute flex items-center gap-2 ${c.cls} rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-[11px]`}
          >
            <span className="size-1.5 rounded-full bg-gradient-to-r from-sky to-amber" aria-hidden />
            {c.label}
          </motion.span>
        ))}
        <div aria-hidden className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
      </motion.div>
    </section>
  );
}
