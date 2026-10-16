# Responsive rules

The site is built mobile first. Unprefixed classes apply to every width, and prefixed classes take
over from their breakpoint upward.

## Breakpoints

`app/globals.css` does not override any breakpoint, so the code uses Tailwind v4's defaults
(`--breakpoint-*` in `node_modules/tailwindcss/theme.css`). Pixel values assume a 16px root font size.

| Prefix | Min width | Pixels | Where the code uses it |
| --- | --- | --- | --- |
| *(none)* | 0 | 0px | Mobile layout: one column, `px-4` gutters |
| `sm:` | `40rem` | 640px | Wider gutters (`sm:px-6`), larger section padding (`sm:py-32`), larger type, wordmark next to the logo |
| `md:` | `48rem` | 768px | **Desktop navigation** (links and CTA in the bar, burger hidden), page spotlight, 12-column footer |
| `lg:` | `64rem` | 1024px | 12-column section grids (Contact, FAQ), `lg:text-5xl` section titles, Process step numbers |
| `xl:` | `80rem` | 1280px | Hero title only (`xl:text-[7.5rem]`) |

`2xl` (`96rem`, 1536px) exists in Tailwind but no component uses it.

Other width rules in the code:

- Content is capped at `max-w-7xl` (`80rem`, 1280px) and centered, with gutters of `px-4` (16px) on
  mobile and `sm:px-6` (24px) from `sm`.
- Product carousel cards are `w-[88vw]` on mobile, `sm:w-[32rem]` (512px) and `lg:w-[36rem]` (576px).
  From `lg` the track aligns to the container with `lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]`.
- Only vertical scrolling is allowed: `html` has `overflow-x: hidden` and `body` has `overflow: clip`.
  No element may make the page wider than the viewport.

## Navigation (`components/Nav.tsx`)

The header is the same at every width: fixed to the top (`fixed inset-x-0 top-0 z-50`), a floating
`glass-light` pill (`rounded-full`, `max-w-7xl`), with an outer padding of `px-4 pt-4` that becomes
`sm:px-6`. Past 24px of scroll its shadow deepens. Anchored sections keep clear of it with
`scroll-margin-top: 5.5rem`.

### Desktop: `md` and up (≥ 768px)

- The primary links (`Platforms`, `Custom apps`, `Process`, `FAQ`, from `nav` in `lib/site.ts`) appear
  in the bar: `hidden … md:flex`, `gap-8`, `text-sm font-medium`.
- Hovered links and the current page (`aria-current="page"`) get an animated sky → amber underline (`.nav-link`).
- The "Let's talk" button (`bg-carbon text-white rounded-full px-5`, `min-h-10`) shows on the right
  (`hidden … md:inline-flex`) and turns `blue` on hover.
- The menu toggle and the mobile menu are hidden (`md:hidden`).

### Mobile: below `md` (< 768px)

- Links and the "Let's talk" button are hidden from the bar. A burger toggle takes their place on
  the right: a `size-11` (44px) round button with `Menu` / `X` icons (`size-5`), `aria-expanded`,
  `aria-controls="mobile-menu"` and a label that switches between "Open menu" and "Close menu".
- Below `sm` (< 640px) only the logo shows. The "KNR Platforms" wordmark appears from `sm` (`hidden sm:block`).
- Opening the menu reveals a panel under the bar (`#mobile-menu`): `rounded-3xl border border-carbon/10
  bg-paper p-3`. It fades and scales in from `y: -12, scale: 0.98` over 0.3s, and its links enter
  one by one with a 0.05s stagger.
- Menu links are `rounded-2xl px-4 py-3 text-base`. A full-width "Let's talk" CTA (`min-h-12`,
  `rounded-2xl bg-carbon`) closes the list.
- While the menu is open, the page cannot scroll (`document.body.style.overflow = "hidden"`). Choosing
  a link or the CTA closes the menu.

## Touch targets

**Every interactive element must offer a touch target of at least 44px × 44px.**

The code meets this rule as follows:

- Burger toggle: `size-11` = 44px.
- Buttons (`MagneticButton`, Contact submit, mobile menu CTA): `min-h-12` = 48px. Hero buttons use `min-h-14` = 56px.
- Carousel arrows: `size-12` = 48px.
- Mobile menu links: `py-3` plus `text-base` line height, at least 48px tall and full width.
- FAQ toggles: the whole row is the button (`w-full py-6`). The `size-10` circle is only its icon.
- Form fields: `px-4 py-3`, full width.

Known gaps that fall below the rule (this documentation does not change them):

- The desktop "Let's talk" nav button is `min-h-10` (40px). It only shows from `md`, where a pointer is the usual input.
- The carousel position dots in `Products.tsx` are `h-1.5` (6px) tall.

Touch-specific behavior: pointer-following effects (`Spotlight`, `MagneticButton`, `TiltCard`) react
to mouse moves only. `Spotlight` also stops itself on `(pointer: coarse)` devices and renders only
from `md`.
