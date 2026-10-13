"use client";

import { motion } from "motion/react";
import { useStaticMotion } from "@/lib/useStaticMotion";
import type { Product } from "@/lib/site";
import { KairenMockup, VeyraMockup } from "./AppMockups";

const ease = [0.16, 1, 0.3, 1] as const;

/* ---------- Lumarcs: layered architecture graph with flowing data ---------- */
function Lumarcs({ a, b }: { a: string; b: string }) {
  const reduce = useStaticMotion();
  const layers = [
    { y: 50, label: "Business journeys", boxes: [40, 160, 280] },
    { y: 140, label: "Applications", boxes: [20, 110, 200, 290] },
    { y: 230, label: "Data & systems", boxes: [60, 190, 300] },
  ];
  const links: [number, number, number, number][] = [
    [70, 72, 50, 140],
    [190, 72, 140, 140],
    [190, 72, 230, 140],
    [310, 72, 320, 140],
    [50, 162, 90, 230],
    [140, 162, 90, 230],
    [230, 162, 220, 230],
    [320, 162, 330, 230],
  ];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Animated enterprise architecture map">
      <defs>
        <linearGradient id="lum-g" x1="0" x2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      {links.map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          <path d={`M${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`} stroke="rgba(255,255,255,0.12)" fill="none" strokeWidth="1.5" />
          <path
            d={`M${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`}
            stroke="url(#lum-g)"
            fill="none"
            strokeWidth="2"
            strokeDasharray="6 14"
            className={reduce ? "" : "animate-dash"}
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        </g>
      ))}
      {layers.map((l, li) => (
        <g key={l.label}>
          <text x="20" y={l.y - 10} fill="rgba(255,255,255,0.45)" fontSize="9" letterSpacing="2" fontWeight={600}>
            {l.label.toUpperCase()}
          </text>
          {l.boxes.map((x, bi) => (
            <motion.g
              key={x}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * li + 0.08 * bi, duration: 0.8, ease }}
            >
              <rect x={x} y={l.y} width="60" height="22" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" />
              <rect x={x + 8} y={l.y + 8} width={24 + bi * 6} height="4" rx="2" fill="url(#lum-g)" opacity="0.8" />
              <circle cx={x + 52} cy={l.y + 11} r="2.5" fill={li === 1 ? b : a} className={reduce ? "" : "animate-pulse-soft"} style={{ animationDelay: `${bi * 0.4}s` }} />
            </motion.g>
          ))}
        </g>
      ))}
      {!reduce && (
        <motion.circle
          r="4"
          initial={{ cx: 70, cy: 72, opacity: 0 }}
          fill="#fff"
          style={{ filter: `drop-shadow(0 0 6px ${a})` }}
          animate={{ cx: [70, 70, 50, 90, 90], cy: [72, 72, 140, 230, 230], opacity: [0, 1, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </svg>
  );
}

/* ---------- Veyra: video timeline with playhead and review comments ---------- */
function Veyra({ a, b }: { a: string; b: string }) {
  const reduce = useStaticMotion();
  const bars = Array.from({ length: 48 }, (_, i) => 8 + Math.abs(Math.sin(i * 0.7) * 22) + (i % 5) * 2);
  const clips = [
    { x: 20, w: 90 },
    { x: 116, w: 70 },
    { x: 192, w: 110 },
    { x: 308, w: 72 },
  ];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Animated video editing timeline">
      <defs>
        <linearGradient id="vey-g" x1="0" x2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      {/* Preview frame */}
      <rect x="20" y="20" width="360" height="130" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <rect x="40" y="52" width="120" height="8" rx="4" fill="rgba(255,255,255,0.5)" />
        <rect x="40" y="70" width="80" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
        <rect x="40" y="110" width="70" height="20" rx="10" fill="url(#vey-g)" />
        <text x="54" y="124" fill="#0b1e4a" fontSize="9" fontWeight={700}>LAUNCH</text>
      </motion.g>
      <circle cx="330" cy="85" r="22" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
      <path d="M324 75 L340 85 L324 95 Z" fill="#fff" />
      {!reduce && (
        <motion.circle cx="330" cy="85" r="22" stroke={a} fill="none" animate={{ r: [22, 34], opacity: [0.6, 0] }} transition={{ duration: 1.8, repeat: Infinity }} />
      )}
      {/* Waveform */}
      {bars.map((h, i) => (
        <rect key={i} x={20 + i * 7.5} y={200 - h / 2} width="4" height={h} rx="2" fill={i % 7 === 0 ? b : "rgba(255,255,255,0.3)"} />
      ))}
      {/* Clips */}
      {clips.map((c, i) => (
        <motion.rect
          key={c.x}
          x={c.x}
          y="226"
          width={c.w}
          height="34"
          rx="7"
          fill={i % 2 ? "rgba(255,255,255,0.08)" : "url(#vey-g)"}
          opacity={i % 2 ? 1 : 0.85}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: `${c.x}px 243px` }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease }}
        />
      ))}
      {/* Comment pins */}
      {[70, 150, 250, 340].map((x, i) => (
        <motion.g key={x} initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.9 + i * 0.2, duration: 0.6, ease }}>
          <circle cx={x} cy="215" r="5" fill="#fff" />
          <circle cx={x} cy="215" r="2" fill={a} />
        </motion.g>
      ))}
      {/* Playhead */}
      <motion.g animate={reduce ? undefined : { x: [0, 360] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }}>
        <rect x="19" y="170" width="2" height="100" fill="#fff" />
        <path d="M14 166 L26 166 L20 174 Z" fill="#fff" />
      </motion.g>
      <text x="20" y="290" fill="rgba(255,255,255,0.45)" fontSize="9" letterSpacing="2" fontWeight={600}>V3 · REVIEW IN PROGRESS</text>
    </svg>
  );
}

/* ---------- Kairen: orchestrator with specialised agents and pipeline ---------- */
function Kairen({ a, b }: { a: string; b: string }) {
  const reduce = useStaticMotion();
  const cx = 200;
  const cy = 125;
  const R = 82;
  const agents = ["Product", "Design", "Code", "Test", "Security", "Release"];
  const stages = ["Explore", "Design", "Build", "Test", "Secure", "Ship"];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Animated AI agent orchestration">
      <defs>
        <linearGradient id="kai-g" x1="0" x2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
        <radialGradient id="kai-core">
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.5" stopColor={a} />
          <stop offset="1" stopColor={a} stopOpacity="0" />
        </radialGradient>
      </defs>
      <motion.circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 6" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: `${cx}px ${cy}px` }} />
      {agents.map((name, i) => {
        const ang = (i / agents.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(ang) * R;
        const y = cy + Math.sin(ang) * R;
        return (
          <g key={name}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(255,255,255,0.12)" />
            {!reduce && (
              <motion.circle r="3" fill="#fff" initial={{ cx, cy, opacity: 0 }} animate={{ cx: [cx, x, cx], cy: [cy, y, cy], opacity: [0, 1, 0] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }} />
            )}
            <motion.g initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease }} style={{ transformOrigin: `${x}px ${y}px` }}>
              <circle cx={x} cy={y} r="17" fill="#0a0f24" stroke="url(#kai-g)" strokeWidth="1.5" />
              <text x={x} y={y + 3} textAnchor="middle" fill="#fff" fontSize="7" fontWeight={700} letterSpacing="0.5">
                {name.toUpperCase()}
              </text>
            </motion.g>
          </g>
        );
      })}
      <motion.circle cx={cx} cy={cy} r="34" fill="url(#kai-core)" animate={reduce ? undefined : { scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: `${cx}px ${cy}px` }} opacity="0.7" />
      <circle cx={cx} cy={cy} r="20" fill="#0a0f24" stroke="#fff" strokeWidth="1.5" />
      <text x={cx} y={cy + 3} textAnchor="middle" fill="#fff" fontSize="7" fontWeight={800} letterSpacing="1">KAIREN</text>
      {/* Pipeline */}
      <rect x="20" y="240" width="360" height="2" fill="rgba(255,255,255,0.1)" />
      {!reduce && (
        <motion.rect x="20" y="240" height="2" fill="url(#kai-g)" animate={{ width: [0, 360] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      )}
      {stages.map((s, i) => {
        const x = 20 + (i / (stages.length - 1)) * 360;
        return (
          <g key={s}>
            <motion.circle cx={x} cy="241" r="5" fill={a} animate={reduce ? undefined : { scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 5, repeat: Infinity, delay: i * 0.8 }} style={{ transformOrigin: `${x}px 241px` }} />
            <text x={x} y="262" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="8" fontWeight={600} letterSpacing="1">{s.toUpperCase()}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- FlipLab: ideas, votes and a decision ---------- */
function FlipLab({ a, b }: { a: string; b: string }) {
  const reduce = useStaticMotion();
  const cards = [
    { x: 30, y: 40, rot: -6, votes: 7 },
    { x: 130, y: 60, rot: 4, votes: 12 },
    { x: 230, y: 36, rot: -3, votes: 4 },
    { x: 320, y: 70, rot: 7, votes: 9 },
  ];
  const results = [12, 9, 7, 4];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Animated workshop with ideas and votes">
      <defs>
        <linearGradient id="flip-g" x1="0" x2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      {cards.map((c, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: c.rot }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.12, duration: 0.8, ease }}
          style={{ transformOrigin: `${c.x + 32}px ${c.y + 32}px` }}
        >
          <motion.g animate={reduce ? undefined : { y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}>
            <rect x={c.x} y={c.y} width="64" height="64" rx="8" fill={i === 1 ? "url(#flip-g)" : "rgba(255,255,255,0.08)"} stroke="rgba(255,255,255,0.18)" />
            <rect x={c.x + 10} y={c.y + 14} width="40" height="5" rx="2.5" fill={i === 1 ? "#0b1e4a" : "rgba(255,255,255,0.55)"} />
            <rect x={c.x + 10} y={c.y + 26} width="28" height="5" rx="2.5" fill={i === 1 ? "#0b1e4a" : "rgba(255,255,255,0.3)"} />
            <circle cx={c.x + 50} cy={c.y + 50} r="9" fill="#fff" />
            <text x={c.x + 50} y={c.y + 53} textAnchor="middle" fill="#0b1e4a" fontSize="8" fontWeight={800}>{c.votes}</text>
          </motion.g>
        </motion.g>
      ))}
      {/* Voting dots flying to the chart */}
      {!reduce &&
        [0, 1, 2].map((i) => (
          <motion.circle key={i} r="3" fill={i ? b : a} initial={{ cx: 160 + i * 40, cy: 110, opacity: 0 }} animate={{ cx: [160 + i * 40, 60 + i * 40], cy: [110, 200], opacity: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }} />
        ))}
      {/* Results chart */}
      <text x="20" y="170" fill="rgba(255,255,255,0.45)" fontSize="9" letterSpacing="2" fontWeight={600}>PRIORITIZED</text>
      {results.map((v, i) => (
        <g key={i}>
          <rect x="20" y={184 + i * 26} width="300" height="14" rx="7" fill="rgba(255,255,255,0.06)" />
          <motion.rect x="20" y={184 + i * 26} height="14" rx="7" fill={i === 0 ? "url(#flip-g)" : "rgba(255,255,255,0.25)"} initial={{ width: 0 }} whileInView={{ width: (v / 12) * 300 }} viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.15, duration: 1, ease }} />
          <text x="330" y={195 + i * 26} fill="#fff" fontSize="9" fontWeight={700}>{v} votes</text>
        </g>
      ))}
      <motion.g initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.8, duration: 0.6, ease }} style={{ transformOrigin: "340px 170px" }}>
        <rect x="300" y="160" width="80" height="18" rx="9" fill={a} />
        <text x="340" y="172" textAnchor="middle" fill="#0b1e4a" fontSize="8" fontWeight={800} letterSpacing="1">DECIDED</text>
      </motion.g>
    </svg>
  );
}

export { Veyra as VeyraGraphic, Kairen as KairenGraphic };

export default function ProductVisual({ product }: { product: Product }) {
  const props = { a: product.accent, b: product.accent2 };
  switch (product.id) {
    case "lumarcs":
      return <Lumarcs {...props} />;
    case "veyra":
      return <VeyraMockup {...props} />;
    case "kairen":
      return <KairenMockup {...props} />;
    case "fliplab":
      return <FlipLab {...props} />;
  }
}
