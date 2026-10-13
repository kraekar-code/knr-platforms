import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import Products from "@/components/Products";
import ScrollProgress from "@/components/ScrollProgress";
import Services from "@/components/Services";
import Spotlight from "@/components/Spotlight";
import Vision from "@/components/Vision";
import { platformFaqs, platformServices, platformSteps } from "@/lib/site";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Spotlight />
      <Nav />
      <main className="relative z-[2]">
        <Hero />
        <Marquee />
        <Products />
        <Services
          eyebrow="For our clients"
          title={platformServices.title}
          lead={platformServices.intro}
          groups={[{ id: "apps", title: "What we build", intro: "Custom software, designed around your users and your business.", items: platformServices.items }]}
        />
        <Process
          steps={platformSteps}
          title={
            <>
              From idea <span className="text-gradient">to product in use.</span>
            </>
          }
        />
        <Vision />
        <Faq items={platformFaqs} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
