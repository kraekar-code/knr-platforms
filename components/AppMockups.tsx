"use client";

import { motion, useReducedMotion } from "motion/react";
import { Bot, Check, GitMerge, Play, Rocket, Share2, Download } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

function Row({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Kairen: AI engineering control center ---------- */
export function KairenMockup({ a, b }: { a: string; b: string }) {
  const reduce = useReducedMotion();
  const agents = [
    { name: "Coordinator", state: "Idle" },
    { name: "Product Owner", state: "Idle" },
    { name: "Developer", state: "Active", note: "On GitHub — applying corrections" },
    { name: "QA", state: "Idle" },
    { name: "Code Review", state: "Idle" },
    { name: "Release Manager", state: "Idle" },
  ];
  const stats = [
    { v: "1", l: "Active missions" },
    { v: "1", l: "Agent working" },
    { v: "0", l: "In review" },
    { v: "0", l: "Ready to merge" },
  ];
  return (
    <div className="flex h-full w-full text-[10px] text-fog" style={{ fontFamily: "var(--font-inter)" }}>
      <aside className="hidden w-[26%] flex-col gap-2 border-r border-white/8 bg-white/[0.03] p-3 sm:flex">
        <div className="mb-2 flex items-center gap-2">
          <span className="flex size-5 items-center justify-center rounded-md text-[9px] font-bold text-white" style={{ background: a }}>K</span>
          <span className="font-semibold tracking-wider text-white">KAIREN</span>
        </div>
        {["Dashboard", "Projects", "Workflows", "Explorations", "Agents", "Costs"].map((i, k) => (
          <div key={i} className={`rounded-md px-2 py-1 ${k === 0 ? "bg-white/10 text-white" : "text-mist"}`}>{i}</div>
        ))}
        <div className="mt-2 text-[8px] font-semibold tracking-[0.2em] text-mist">YOUR PROJECTS</div>
        {["FlipLab", "Kairen", "Lumarcs", "Veyra"].map((p) => (
          <div key={p} className="flex items-center gap-2 px-2 text-mist">
            <span className="size-1.5 rounded-full" style={{ background: p === "Kairen" ? a : "rgba(255,255,255,0.25)" }} />
            {p}
          </div>
        ))}
      </aside>
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-3 sm:p-4">
        <Row className="flex items-end justify-between">
          <div>
            <div className="text-[8px] font-semibold tracking-[0.2em] text-mist">CONTROL CENTER</div>
            <div className="text-base font-bold text-white">Hello Nathanaël</div>
            <div className="text-mist">Your AI engineering team is at work.</div>
          </div>
          <span className="rounded-md px-2 py-1 font-semibold text-white" style={{ background: a }}>+ New mission</span>
        </Row>
        <Row delay={0.1} className="grid grid-cols-4 gap-2">
          {stats.map((s) => (
            <div key={s.l} className="rounded-lg border border-white/8 bg-white/[0.03] p-2">
              <div className="text-base font-bold text-white">{s.v}</div>
              <div className="text-mist">{s.l}</div>
            </div>
          ))}
        </Row>
        <Row delay={0.2} className="flex items-center gap-2 rounded-lg border border-mint/30 bg-mint/10 px-2 py-1.5 text-white">
          <Check className="size-3 text-mint" aria-hidden /> Nothing needs you right now. Your AI team keeps working.
        </Row>
        <Row delay={0.3} className="rounded-lg border border-white/8 bg-white/[0.03]">
          <div className="flex items-center justify-between border-b border-white/8 px-2 py-1.5">
            <span className="font-semibold text-white">Agents</span>
            <span className="text-mist">1 working · 12 idle</span>
          </div>
          {agents.map((ag, i) => (
            <div key={ag.name} className="flex items-center gap-2 border-b border-white/5 px-2 py-1.5 last:border-0">
              <span className="flex size-4 items-center justify-center rounded-full" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}>
                <Bot className="size-2.5 text-white" aria-hidden />
              </span>
              <span className="w-24 font-medium text-white">{ag.name}</span>
              <span
                className={`rounded-full px-1.5 py-px text-[8px] font-semibold ${ag.state === "Active" ? "text-ink" : "bg-white/10 text-mist"}`}
                style={ag.state === "Active" ? { background: "#3ddc97" } : undefined}
              >
                {ag.state}
              </span>
              {ag.note ? (
                <span className="hidden items-center gap-1 text-mist sm:flex">
                  <motion.span
                    animate={reduce ? undefined : { opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.1 }}
                    className="size-1.5 rounded-full"
                    style={{ background: a }}
                  />
                  {ag.note}
                </span>
              ) : (
                <span className="hidden text-mist sm:block">Waiting for work</span>
              )}
            </div>
          ))}
        </Row>
        <Row delay={0.4} className="flex items-center gap-2 text-mist">
          {["Explore", "Design", "Build", "Test", "Review", "Merge", "Release"].map((s, i, arr) => (
            <span key={s} className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-white">
                {i === arr.length - 1 ? <Rocket className="size-2.5" aria-hidden /> : i === arr.length - 2 ? <GitMerge className="size-2.5" aria-hidden /> : null}
                {s}
              </span>
              {i < arr.length - 1 && (
                <motion.span
                  className="h-px w-3 sm:w-5"
                  style={{ background: `linear-gradient(90deg, ${a}, ${b})` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                />
              )}
            </span>
          ))}
        </Row>
      </div>
    </div>
  );
}

/* ---------- Veyra: AI video review and editing ---------- */
export function VeyraMockup({ a, b }: { a: string; b: string }) {
  const reduce = useReducedMotion();
  const chapters = [
    { l: "Intro", x: "0%" },
    { l: "Platform", x: "22%" },
    { l: "Demo", x: "58%" },
    { l: "CTA", x: "84%" },
  ];
  return (
    <div className="flex h-full w-full flex-col gap-3 p-3 text-[10px] text-fog sm:p-4" style={{ fontFamily: "var(--font-inter)" }}>
      <Row className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-xs font-semibold tracking-[0.35em] text-white">VEYRA</span>
          {["Projects", "New motion", "New footage", "Brands"].map((n, i) => (
            <span key={n} className={`hidden sm:block ${i === 0 ? "rounded-md bg-white/10 px-1.5 py-0.5 text-white" : "text-mist"}`}>{n}</span>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex items-center gap-1 rounded-full border border-white/15 px-2 py-0.5 text-white"><Share2 className="size-2.5" aria-hidden />Share</span>
          <span className="flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold text-ink" style={{ background: `linear-gradient(90deg, ${a}, ${b})` }}><Download className="size-2.5" aria-hidden />Export</span>
        </div>
      </Row>
      <Row delay={0.1} className="flex items-center gap-2">
        <span className="font-display text-sm font-bold text-white">Kairen launch film</span>
        <span className="rounded-full bg-mint/15 px-1.5 py-px text-[8px] font-semibold text-mint">Review</span>
        <span className="rounded-full bg-white/10 px-1.5 py-px text-[8px] text-mist">motion-launch</span>
      </Row>
      <Row delay={0.2} className="relative flex-1 overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0f]">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(122,108,192,0.35),transparent_70%)]" />
        <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[8px] text-white"><span className="size-1.5 rounded-full bg-mint" />v2 · published</span>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }} className="text-[8px] font-semibold tracking-[0.3em]" style={{ color: b }}>
            KNR STUDIO PRESENTS
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.9, ease }} className="font-display text-2xl font-bold text-white sm:text-3xl">
            Kairen
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 0.8 }} className="text-mist">
            The control center for your AI factory.
          </motion.div>
        </div>
        {/* Timeline */}
        <div className="absolute inset-x-3 bottom-2">
          <div className="relative mb-2 h-px bg-white/20">
            {chapters.map((c) => (
              <span key={c.l} className="absolute -top-3 text-[7px] text-mist" style={{ left: c.x }}>
                {c.l}
                <span className="absolute left-0 top-3 h-1.5 w-px bg-white/40" />
              </span>
            ))}
            <motion.span
              className="absolute -top-1 size-2 rounded-full bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.2)]"
              animate={reduce ? undefined : { left: ["0%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="absolute -top-1 size-2 rotate-45 rounded-sm"
              style={{ left: "45%", background: a }}
              animate={reduce ? undefined : { scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              title="Remark at 00:06"
            />
          </div>
          <div className="flex items-center gap-2 text-white">
            <span className="flex size-4 items-center justify-center rounded-full bg-white text-ink"><Play className="size-2 fill-current" aria-hidden /></span>
            <span className="tabular-nums">00:00:06 / 00:15:00</span>
            <span className="ml-auto rounded-full border border-white/20 px-1.5 py-px text-[8px]">v2</span>
            <span className="rounded-full border border-white/20 px-1.5 py-px text-[8px]">MP4 1080p</span>
          </div>
        </div>
      </Row>
      <Row delay={0.3} className="grid grid-cols-3 gap-2">
        <div className="col-span-2 flex gap-2">
          {["v2 — Current", "v1 — Superseded"].map((v, i) => (
            <div key={v} className={`flex flex-1 items-center gap-2 rounded-lg border p-1.5 ${i === 0 ? "border-white/25 bg-white/[0.06]" : "border-white/8"}`}>
              <span className="h-6 w-9 rounded bg-[#15151c]" />
              <div>
                <div className="font-semibold text-white">{v}</div>
                <div className="text-[8px] text-mist">{i === 0 ? "No remarks · 0:15" : "1 remark · 1 applied"}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-white/8 p-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-semibold tracking-[0.2em] text-mist">REMARKS</span>
            <span className="rounded-full px-1.5 py-px text-[8px] font-semibold text-ink" style={{ background: a }}>Send</span>
          </div>
          <div className="mt-1 text-[8px] text-mist">Press R in the player to add one at the current timecode.</div>
        </div>
      </Row>
    </div>
  );
}
