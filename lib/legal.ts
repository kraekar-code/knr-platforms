import { site } from "./site";

/**
 * Privacy policy shown on /privacy.
 *
 * Written from what the site does today: static pages, no app/api routes, no
 * analytics or tracking package, no cookies, fonts self-hosted by next/font, and a
 * contact form that only builds a mailto: link. If any of that changes (a backend,
 * an emailing service, analytics, an embedded video player), list the new processing
 * here with its retention period.
 *
 * The "third-parties" section records a source audit of external services: hosting
 * (Vercel), Google Fonts self-hosted by next/font, no analytics/pixel/consent script,
 * no middleware.ts or .env.example. Update it whenever one of those changes.
 */

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

export const privacy = {
  updated: "2026-10-13",
  intro: `This page explains what personal data ${site.name} handles when you visit ${site.url.replace("https://", "")} or contact us, and the rights you have over it under the GDPR and the ePrivacy rules.`,
  sections: [
    {
      id: "operator",
      title: "Who is responsible",
      paragraphs: [
        `The controller of the data described on this page is ${site.name}. For any question about privacy, or to exercise your rights, write to ${site.email}.`,
      ],
    },
    {
      id: "no-collection",
      title: "What this website collects: nothing",
      paragraphs: [
        "This website has no server-side data collection: it is made of static pages, it has no backend, no database and no API that receives what you type.",
        "This website uses no cookies and no trackers: no analytics, no advertising or social media pixels, no fingerprinting, and nothing stored in your browser. Fonts are served from our own domain, so loading a page does not contact a third-party font service.",
        "Because no cookie or tracker is used, there is no cookie banner to accept or refuse.",
      ],
    },
    {
      id: "third-parties",
      title: "Third-party services",
      paragraphs: [
        "We checked the website's source code for every external service it loads, either when the site is built or when you browse it. The list below is the complete result of that check.",
      ],
      items: [
        "Hosting and delivery (Vercel): the site is hosted and delivered by Vercel, which acts as our hosting and content delivery network (CDN) provider. Like any web host, Vercel's servers receive the technical data your browser sends with each request (IP address, browser user agent, requested page and time) in order to deliver the page, and may keep it briefly in server logs for security and operation. Images on the site are also optimised and served by this host, from our own domain; no external image domain is configured.",
        "Google Fonts (Sora and Inter), self-hosted: both typefaces are loaded with next/font/google, which downloads the font files once when the site is built and serves them from our own domain. Your browser makes no request to fonts.googleapis.com or fonts.gstatic.com, so Google receives no data about your visit.",
        "Analytics, tracking pixels and consent managers: none found. No analytics script, tracking or advertising pixel, or consent-manager script is present in app/layout.tsx, next.config.ts, lib/site.ts or the components/ folder, nor in the pages under app/.",
        "Middleware and environment-based scripts: none exists in the repository. There is no middleware.ts and no .env.example file, so no script is injected into pages by middleware or through environment settings.",
      ],
    },
    {
      id: "contact-form",
      title: "How the contact form works",
      paragraphs: [
        "The contact form does not send anything to us or to any server. When you press “Send message”, your browser builds a mailto link from your name, email and message, and opens your own mail client with a pre-filled email addressed to us.",
        "Nothing is stored on our side at that point: the form has no server-side storage, and if you close your mail client without sending, we never receive anything.",
      ],
    },
    {
      id: "emails",
      title: "When you send us an email",
      paragraphs: [
        "If you choose to send the email, or write to us directly, we receive it in our mailbox like any other email. It contains what you decided to include: usually your name, your email address and your message.",
      ],
      items: [
        "Purpose: answer your request and, if you wish, discuss and follow up on your project.",
        "Legal basis: the steps you ask us to take before a possible contract, and our legitimate interest in replying to messages we receive.",
        "Recipients: only the KNR Platforms team. We do not sell, rent or share your messages, and we do not add you to a mailing list.",
        "Retention: kept for as long as the exchange is ongoing, then deleted at most 3 years after our last contact with you, unless it leads to a contract, in which case it is kept for the time required by law.",
      ],
    },
    {
      id: "links",
      title: "Links to other websites",
      paragraphs: [
        "Any link to another service on this site is a plain link: nothing is loaded from those services until you click. Once you are on their site, their own privacy policy applies.",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      paragraphs: [
        `For the emails you send us, you can at any time ask to access, correct or delete your data, restrict or object to its use, or receive it in a portable format. Write to ${site.email}; we reply within one month.`,
        "If you think your rights are not respected, you can lodge a complaint with the data protection authority of your country (in France, the CNIL, www.cnil.fr).",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      paragraphs: [
        "If the way this site handles data changes, for example if we add a service that processes personal data, we will update this page before the change goes live and list each processing with its retention period.",
      ],
    },
  ] satisfies PrivacySection[],
};
