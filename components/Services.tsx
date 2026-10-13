"use client";

import { motion } from "motion/react";
import { AppWindow, Camera, Clapperboard, Sparkles, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

const icons: Record<string, LucideIcon> = { apps: AppWindow, content: Sparkles, shooting: Camera, editing: Clapperboard };

type Group = { id: string; title: string; intro: string; items: string[] };

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  groups: Group[];
};

export default function Services({ eyebrow, title, lead, groups }: Props) {
  const cols = groups.length >= 3 ? "lg:grid-cols-3" : groups.length === 2 ? "lg:grid-cols-2" : "";
  return (
    <section id="services" className="section-light relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-0 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(47,139,255,0.18),transparent_65%)]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(242,166,74,0.2),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue">
              <span aria-hidden className="h-px w-8 bg-gradient-to-r from-blue to-transparent" />
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl font-bold leading-[1.05] text-carbon sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-carbon/65">
              {lead}
            </p>
          </Reveal>
        </div>

        <div className={`mt-16 grid grid-cols-1 gap-6 ${cols}`}>
          {groups.map((s, si) => {
            const Icon = icons[s.id];
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: si * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl3 border border-carbon/10 bg-white p-8 shadow-[0_30px_60px_-40px_rgba(10,10,10,0.35)] sm:p-10"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-carbon text-white">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="text-2xl font-bold text-carbon">{s.title}</h3>
                </div>
                <p className="mt-5 text-base leading-relaxed text-carbon/65">{s.intro}</p>
                <ul className="mt-8 divide-y divide-carbon/10 border-t border-carbon/10">
                  {s.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-display text-xs font-semibold tabular-nums text-carbon/40">{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-medium text-carbon transition-transform duration-500 group-hover:translate-x-1">{item}</span>
                      </span>
                      <span aria-hidden className="h-px w-8 bg-gradient-to-r from-blue to-amber opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
