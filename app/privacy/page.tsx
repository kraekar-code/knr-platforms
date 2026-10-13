import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import SectionHeading from "@/components/SectionHeading";
import Spotlight from "@/components/Spotlight";
import { privacy } from "@/lib/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy — ${site.name}`,
  description: `How ${site.name} handles personal data: no server-side collection, no cookies, no trackers.`,
};

const updated = new Date(privacy.updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function PrivacyPage() {
  return (
    <>
      <ScrollProgress />
      <Spotlight />
      <Nav />
      <main className="relative z-[2]">
        <PageHero
          eyebrow="Privacy"
          lead={privacy.intro}
          title={
            <>
              Your data stays <span className="text-gradient">with you.</span>
            </>
          }
          primary={{ label: "Read the policy", href: "#policy" }}
        />
        <section id="policy" className="relative border-t border-white/8 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading eyebrow="Privacy policy" title="What we collect, and what we don't." lead={`Last updated ${updated}.`} />
            <div className="mt-16 max-w-3xl space-y-14">
              {privacy.sections.map((s) => (
                <Reveal key={s.id}>
                  <article id={s.id} aria-labelledby={`${s.id}-title`}>
                    <h3 id={`${s.id}-title`} className="text-xl font-semibold text-white sm:text-2xl">
                      {s.title}
                    </h3>
                    {s.paragraphs.map((p) => (
                      <p key={p} className="mt-4 text-base leading-relaxed text-mist">
                        {p}
                      </p>
                    ))}
                    {s.items && (
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-mist marker:text-sky">
                        {s.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
