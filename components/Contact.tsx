"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export default function Contact() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="noise relative isolate overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div
          animate={reduce ? undefined : { x: [0, 50, -30, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[-10%] h-[60%] w-[50%] rounded-full bg-blue/30 blur-[130px]"
        />
        <motion.div
          animate={reduce ? undefined : { x: [0, -50, 30, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] h-[60%] w-[50%] rounded-full bg-amber/25 blur-[140px]"
        />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
          >
            Let&apos;s build <span className="text-gradient">your app.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-lg text-mist"
          >
            A product idea, an app for your clients, a platform to try. Tell us about it and we will come back with a point of view.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            href={`mailto:${site.email}`}
            className="mt-10 inline-flex items-center gap-3 text-base font-semibold text-white"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/15">
              <Mail className="size-4" aria-hidden />
            </span>
            {site.email}
          </motion.a>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-xl3 p-6 sm:p-8 lg:col-span-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Name</span>
              <input name="name" required autoComplete="name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-mist/60 focus:border-sky" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Email</span>
              <input name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-mist/60 focus:border-sky" placeholder="you@company.com" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Project</span>
            <textarea name="message" required rows={5} className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-mist/60 focus:border-sky" placeholder="What are you trying to build?" />
          </label>
          <p className="mt-4 text-xs leading-relaxed text-mist">
            Nothing is stored on our servers: the form only prepares an email in your own mail client. See our{" "}
            <Link href="/privacy" className="font-semibold text-fog underline underline-offset-2 transition hover:text-white">
              privacy policy
            </Link>
            .
          </p>
          <button
            type="submit"
            className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-ink transition hover:bg-sky hover:text-white sm:w-auto"
          >
            Send message
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </button>
          <p className="mt-4 text-xs text-mist" aria-live="polite">
            {sent ? "Your email client should open with the message ready to send." : "Opens your email client. We reply to every message."}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
