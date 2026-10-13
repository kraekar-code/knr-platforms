import Image from "next/image";
import Link from "next/link";
import { products, site } from "@/lib/site";

const company = [
  { label: "Vision", href: "/#vision" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3" aria-label={`${site.name} home`}>
            <Image src="/logo.png" alt="" width={990} height={500} className="h-8 w-auto" />
            <span className="font-display text-base font-semibold text-white">
              KNR <span className="text-mist">Platforms</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">{site.description}</p>
          <p className="mt-6 font-display text-sm font-semibold text-gradient">{site.tagline}</p>
        </div>
        <div className="md:col-span-3 md:col-start-7">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Our platforms</h3>
          <ul className="mt-4 space-y-2">
            {products.map((p) => (
              <li key={p.id}>
                <Link href="/#products" className="text-sm text-mist transition hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#services" className="text-sm text-mist transition hover:text-white">
                Custom apps
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Company</h3>
          <ul className="mt-4 space-y-2">
            {company.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-mist transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#contact" className="text-sm text-mist transition hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/8 px-4 pt-6 text-xs text-mist sm:px-6">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
