"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/lib/site";
import ProductVisual from "./ProductVisuals";
import SectionHeading from "./SectionHeading";

export default function Products() {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (child) el.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
  };

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const pos = el.scrollLeft + 24;
      let best = 0;
      children.forEach((c, i) => {
        if (c.offsetLeft <= pos) best = i;
      });
      setIndex(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="products" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-[60%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(122,108,192,0.14),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Our platforms"
            title={
              <>
                Software built for <span className="text-gradient">specialized work.</span>
              </>
            }
            lead="Each product addresses one specific business need, with AI doing the heavy lifting and people staying in control."
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollTo(Math.max(0, index - 1))}
              disabled={index === 0}
              aria-label="Previous platform"
              className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/50 disabled:opacity-30"
            >
              <ArrowLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollTo(Math.min(products.length - 1, index + 1))}
              disabled={index === products.length - 1}
              aria-label="Next platform"
              className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/50 disabled:opacity-30"
            >
              <ArrowRight className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={track}
        className="carousel mt-14 flex gap-5 overflow-x-auto px-4 pb-6 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
        aria-label="Platforms"
      >
        {products.map((p, i) => (
          <motion.li
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-[88vw] shrink-0 sm:w-[32rem] lg:w-[36rem]"
          >
            <article
              className="card-border group flex h-full flex-col overflow-hidden rounded-xl3"
              style={{ "--card-accent": p.accent, "--card-accent-2": p.accent2 } as React.CSSProperties}
            >
              {/* App window */}
              <div className="relative m-3 overflow-hidden rounded-2xl border border-white/10 bg-ink">
                <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[0.03] px-3 py-2">
                  <span className="size-2 rounded-full bg-white/15" />
                  <span className="size-2 rounded-full bg-white/15" />
                  <span className="size-2 rounded-full bg-white/15" />
                  <span className="ml-3 h-4 flex-1 rounded-md bg-white/[0.05] px-2 text-[9px] leading-4 text-mist">{p.id}.app</span>
                </div>
                <div className="aspect-[4/3] sm:aspect-[16/10]">
                  <ProductVisual product={p} />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: `radial-gradient(60% 40% at 50% 100%, ${p.accent}22, transparent 70%)` }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6 pt-3 sm:p-8 sm:pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: p.accent }}>
                  {p.category}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-white">{p.name}</h3>
                <p className="mt-3 text-base leading-relaxed text-mist">{p.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-fog">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: `linear-gradient(90deg, ${p.accent}, ${p.accent2})` }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-sm font-medium text-white">
                  <span className="text-mist">Core idea · </span>
                  {p.coreIdea}
                </p>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>

      <div className="mx-auto mt-2 flex max-w-7xl gap-2 px-4 sm:px-6" role="tablist" aria-label="Platform position">
        {products.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={p.name}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-white" : "w-4 bg-white/20 hover:bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
