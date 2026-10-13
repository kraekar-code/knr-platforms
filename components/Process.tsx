"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

type Props = {
  steps: { n: string; title: string; text: string }[];
  title: React.ReactNode;
};

export default function Process({ steps, title }: Props) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How we work"
          title={title}
        />
        <ol ref={ref} className="relative mt-16 grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-4">
          <div aria-hidden className="absolute left-5 top-0 hidden h-full w-px bg-white/10 lg:hidden" />
          <div aria-hidden className="absolute left-0 top-6 hidden h-px w-full bg-white/10 lg:block" />
          <motion.div aria-hidden style={{ width: h }} className="absolute left-0 top-6 hidden h-px bg-gradient-to-r from-sky via-violet to-amber lg:block" />
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative lg:pt-14"
            >
              <span className="absolute left-0 top-0 hidden size-12 items-center justify-center rounded-full border border-white/15 bg-ink font-display text-sm font-bold text-white lg:flex">
                {s.n}
              </span>
              <span className="font-display text-sm font-bold text-sky lg:hidden">{s.n}</span>
              <h3 className="mt-2 text-2xl font-bold text-white lg:mt-0">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-mist">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
