import { marquee } from "@/lib/site";

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div aria-hidden className="relative overflow-hidden border-y border-white/8 bg-ink-2/60 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap [animation-play-state:running] hover:[animation-play-state:paused]">
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-sm font-semibold uppercase tracking-[0.25em] text-mist">
            {m}
            <span className="size-1.5 rounded-full bg-gradient-to-r from-sky to-amber" />
          </span>
        ))}
      </div>
    </div>
  );
}
