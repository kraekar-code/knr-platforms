"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

const MotionLink = motion.create(Link);

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isCurrent = (href: string) => !href.includes("#") && pathname === href;

  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 24)), [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div
        className={`glass-light mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled ? "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : "shadow-[0_10px_30px_-20px_rgba(0,0,0,0.4)]"
        }`}
      >
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Image src="/logo.png" alt="" width={990} height={500} priority className="h-7 w-auto" />
          <span className="hidden font-display text-sm font-semibold tracking-wide text-carbon sm:block">
            KNR <span className="text-carbon/55">Platforms</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className="nav-link text-sm font-medium text-carbon/70 transition-colors hover:text-carbon aria-[current=page]:text-carbon"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden min-h-10 items-center rounded-full bg-carbon px-5 text-sm font-semibold text-white transition hover:bg-blue md:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full text-carbon md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 rounded-3xl border border-carbon/10 bg-paper p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] md:hidden"
          >
            {nav.map((item, i) => (
              <MotionLink
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="rounded-2xl px-4 py-3 text-base font-medium text-carbon/75 hover:bg-carbon/5 hover:text-carbon aria-[current=page]:text-carbon"
              >
                {item.label}
              </MotionLink>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-2xl bg-carbon text-base font-semibold text-white"
            >
              Let&apos;s talk
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
