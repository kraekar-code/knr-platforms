import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, lead, align = "left" }: Props) {
  const center = align === "center";
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky">
          <span aria-hidden className="h-px w-8 bg-gradient-to-r from-sky to-transparent" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-3xl font-bold leading-[1.08] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
