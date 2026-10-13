"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  primary: { label: string; href: string };
  /** What the page covers, shown as chips under the buttons. */
  tags?: string[];
};

/** Opening section of a page: name, promise, and what it covers. */
export default function PageHero({ eyebrow, title, lead, primary, tags = [] }: Props) {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="top" className="noise relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <motion.div
          animate={reduce ? undefined : { x: [0, 50, -30, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[-10%] h-[70%] w-[50%] rounded-full bg-sky opacity-35 blur-[130px]"
        />
        <motion.div
          animate={reduce ? undefined : { x: [0, -50, 30, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] h-[60%] w-[45%] rounded-full bg-violet opacity-30 blur-[140px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease }}
          className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky"
        >
          <span aria-hidden className="h-px w-8 bg-gradient-to-r from-sky to-transparent" />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.1, ease }}
          className="mt-6 max-w-5xl text-[2.6rem] font-bold leading-[1] text-white sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl"
        >
          {lead}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href={primary.href} className="min-h-14 px-8 text-base">
            {primary.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost" className="min-h-14 px-8 text-base">
            Let&apos;s talk
          </MagneticButton>
        </motion.div>
        {tags.length > 0 && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-2"
            aria-label={`${eyebrow} covers`}
          >
            {tags.map((t) => (
              <li key={t} className="glass rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                {t}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
}
