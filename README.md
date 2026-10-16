# KNR Platforms — website

Website for KNR Platforms: our own AI-powered platforms open to the public (Lumarcs, Veyra, Kairen, FlipLab) and custom apps and platforms built for clients.

It is a standalone Next.js app. It used to live in the `knr-platforms/` folder of the [KNR Studio repository](https://github.com/kraekar-code/knr-studio), whose history for that folder this repository keeps; the two sites share no code.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, two static pages: `/` and `/privacy`)
- React 19, TypeScript
- Tailwind CSS 4 with design tokens declared in `app/globals.css`
- [Motion](https://motion.dev) for scroll-linked and in-view animations
- A hand-written canvas particle network in the hero (`components/HeroCanvas.tsx`)

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript only
```

## Where things live

| What | Where |
| --- | --- |
| All copy: products, services, steps, FAQs, vision, nav | `lib/site.ts` |
| Colours, fonts, radii, keyframes | `app/globals.css` (`@theme`) |
| Privacy policy copy (update it if the site starts collecting data) | `lib/legal.ts` |
| Page composition | `app/page.tsx` (home), `app/privacy/page.tsx` |
| Sections | `components/*.tsx` |
| Animated app mockups (Kairen, Veyra) | `components/AppMockups.tsx` |
| Animated illustrations (Lumarcs, FlipLab) | `components/ProductVisuals.tsx` |
| Logo (transparent) | `public/logo.png` |
| Favicon (picked up automatically by Next.js) | `app/icon.png` |

## Deploying on Vercel

Create a second Vercel project from the same GitHub repository and set its **Root Directory** to `knr-platforms`. Vercel then builds only this folder; the KNR Studio project keeps building the repository root.

## Before going live

- Add the domain `knrplatforms.com` to the Vercel project. It is set in `lib/site.ts` (`site.url`, used for Open Graph metadata) and in the KNR Studio `next.config.ts` (`platformsUrl`), which redirects the old `knr-studio.com/platforms` page here; change both if the domain ever changes.
- Check the contact address in `lib/site.ts` (`site.email`); the contact form opens the visitor's email client with that address.

Motion respects `prefers-reduced-motion`: animations are shortened or disabled for users who ask for it.
