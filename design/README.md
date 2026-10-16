# KNR Platforms design system

This directory records the visual identity the site already uses. Every value here is copied from
the code, and each one names its source file. Nothing here is a proposal. When the code changes,
update these files to match it.

- [`tokens.json`](tokens.json): the tokens, with exact values, from the `@theme` block of
  `app/globals.css` and the product accents in `lib/site.ts`.
- [`responsive.md`](responsive.md): breakpoints, navigation per breakpoint, touch targets.

The stack is Tailwind CSS v4. Tokens in `@theme` become utilities (`--color-sky` → `bg-sky`,
`text-sky`; `--radius-xl3` → `rounded-xl3`). All other sizes use Tailwind's default scale.

## Visual identity

The site is dark by default (`:root { color-scheme: dark; }`). Its body text is fog on ink. Light
sections switch to carbon on paper. Accents come from a blue → violet → amber gradient.

### Colors (`app/globals.css` `@theme`)

| Token | Value | Use in the code |
| --- | --- | --- |
| `ink` | `#050505` | Page background (`body { background: var(--color-ink) }`), text on white buttons |
| `ink-2` | `#0e0e11` | Base of `.glass` and the lower stop of `.card-border` |
| `ink-3` | `#17171c` | Upper stop of `.card-border` |
| `navy` | `#0b1e4a` | Defined in the theme. No component uses it yet |
| `blue` | `#1e5bd8` | Hover background of the nav "Let's talk" button, contact glow blob |
| `sky` | `#2f8bff` | Primary accent: eyebrows, focus ring, selection, spotlight, nav-link underline |
| `violet` | `#7a6cc0` | Gradient midpoint (`.text-gradient-blue`, MagneticButton hover fill) |
| `amber` | `#f2a64a` | Warm accent: gradient end, nav-link underline end, contact glow blob |
| `coral` | `#ff7a59` | Same hex as Veyra's `accent2`. No component uses the token itself |
| `mint` | `#3ddc97` | Success / "live" states in product mockups |
| `fog` | `#d4d4d8` | Body text on dark (`body { color: var(--color-fog) }`) |
| `mist` | `#8e8e99` | Secondary text: leads, descriptions, footer |
| `paper` | `#f4f4f1` | Light surfaces: `.section-light`, `.glass-light`, mobile menu |
| `paper-2` | `#e9e9e4` | Defined in the theme. No component uses it yet |
| `carbon` | `#0a0a0a` | Text on light surfaces, dark buttons in the nav |

Headings on dark backgrounds use `text-white`. Hairline borders on dark backgrounds use white at
low opacity (`border-white/8`, `/10`, `/15`), and on light backgrounds `border-carbon/10`.

**Product accents** (`lib/site.ts`): each product has an `accent` and an `accent2`. Product cards
pass them to `.card-border` as `--card-accent` / `--card-accent-2`. The product category label
is colored with `accent`.

| Product | `accent` | `accent2` |
| --- | --- | --- |
| Lumarcs | `#2F8BFF` | `#7A6CC0` |
| Veyra | `#F2A64A` | `#FF7A59` |
| Kairen | `#7C5CFF` | `#2F8BFF` |
| FlipLab | `#3DDC97` | `#2F8BFF` |

**Gradients** (`app/globals.css`):

- `.text-gradient`: `linear-gradient(100deg, #2f8bff 0%, #8fa6ff 35%, #c9a0e6 55%, #f2a64a 100%)` clipped to text.
- `.text-gradient-blue`: `linear-gradient(100deg, #5aa8ff 0%, #2f8bff 50%, #7a6cc0 100%)` clipped to text.
- `.ring-spin`: `conic-gradient(from 0deg, transparent 0 60%, #2f8bff 75%, #f2a64a 90%, transparent 100%)`.
- `::selection`: `color-mix(in oklab, var(--color-sky) 70%, white)` background, `ink` text. In `.section-light`, the selection is `#0a0a0a` on `#fff`.

### Typography

- **Display**: `--font-display: var(--font-sora), ui-sans-serif, system-ui, sans-serif`. Sora is
  loaded in `app/layout.tsx` with weights 400, 500, 600, 700 and 800. All `h1`–`h4` use it with
  `letter-spacing: -0.02em`.
- **Body**: `--font-body: var(--font-inter), ui-sans-serif, system-ui, sans-serif`. Inter is loaded in
  `app/layout.tsx`. The `body` element sets it, with antialiasing and `text-rendering: optimizeLegibility`.
- **Section title** (`SectionHeading`): `text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-white`.
- **Hero title** (`Hero`): `text-[2.9rem] sm:text-7xl lg:text-8xl xl:text-[7.5rem] font-bold leading-[0.98]`.
- **Eyebrow** (`SectionHeading`): `text-xs font-semibold uppercase tracking-[0.25em] text-sky`, preceded by
  an `h-px w-8` line that fades from sky to transparent.
- **Lead**: `text-base sm:text-lg leading-relaxed text-mist`.
- **Pills/tags** (`Hero`, `PageHero`): `text-[11px] font-semibold uppercase tracking-[0.18em]` on `.glass rounded-full`.

### Radii

- Theme tokens: `rounded-xl2` = `1.25rem`, `rounded-xl3` = `1.75rem`. `rounded-xl3` is the radius of
  the big containers: product cards, the contact form panel and the service cards.
- Tailwind defaults used in components: `rounded-full` (buttons, nav bar, icon buttons, pills),
  `rounded-3xl` (mobile menu), `rounded-2xl` (mobile menu items, app window inside product cards, service
  icons) and `rounded-xl` (form fields).
- Focus ring: `outline: 2px solid var(--color-sky); outline-offset: 3px; border-radius: 4px` on `:focus-visible`.

### Shadows

The `@theme` block defines no shadow tokens. The shadows in use are arbitrary values:

| Where | Value |
| --- | --- |
| Nav bar, at rest (`Nav.tsx`) | `shadow-[0_10px_30px_-20px_rgba(0,0,0,0.4)]` |
| Nav bar, scrolled > 24px (`Nav.tsx`) | `shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]` |
| Mobile menu panel (`Nav.tsx`) | `shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]` |
| Service card on light section (`Services.tsx`) | `shadow-[0_30px_60px_-40px_rgba(10,10,10,0.35)]` |

### Motion

- One easing everywhere: `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`. Motion components use the same
  curve as `ease: [0.16, 1, 0.3, 1]`.
- Theme animations: `animate-marquee` (40s), `animate-float` (7s), `animate-spin-slow` (14s),
  `animate-pulse-soft` (3s), `animate-dash` (3s), `animate-scan` (6s). Their keyframes are in `tokens.json`.
- `prefers-reduced-motion: reduce` turns off smooth scrolling and cuts every animation and transition to
  `0.001ms`.

### Surfaces and texture (`app/globals.css`)

- `.glass`: 72% `ink-2`, a 1px border of 9% white, `backdrop-filter: blur(18px) saturate(140%)`.
- `.glass-light`: 90% `paper`, a 1px border of 8% `carbon`, the same blur. Only the floating nav uses it, so
  that the dark logo stays legible.
- `.section-light`: a `paper` background with `carbon` text.
- `.bg-grid`: a 64px × 64px grid of 5% white lines, masked radially.
- `.noise`: a fractal-noise SVG overlay at `opacity: 0.045`, `mix-blend-mode: overlay`.
- `.spotlight`: a 600px radial light of `rgba(47, 139, 255, 0.09)` that follows the cursor.

## Component conventions (`components/`)

### Sections

- Markup: `<section id="…" className="relative py-24 sm:py-32">`. Vision uses `py-28 sm:py-40`.
  Heroes use `pt-36 pb-10 sm:pt-44` (`Hero`) or `pt-36 pb-20 sm:pt-44 sm:pb-28` (`PageHero`).
- Content container: `mx-auto max-w-7xl px-4 sm:px-6`. Vision narrows it to `max-w-6xl`.
- Section headings always go through `SectionHeading` (eyebrow, title, optional lead, `align` left or
  center, `max-w-3xl`), and each line is wrapped in `Reveal` with delays of 0, 0.08 and 0.16.
- Two-column layouts use a 12-column grid from `lg`: `grid grid-cols-1 gap-12 lg:grid-cols-12`
  (for example FAQ `lg:col-span-5` / `lg:col-span-7`).
- Section separators: `border-t border-white/8`. Light sections add `.section-light`.
- Decorative glows are `aria-hidden`, `pointer-events-none`, absolutely positioned radial gradients or
  blurred `rounded-full` blobs.
- `section[id]` has `scroll-margin-top: 5.5rem`, so anchored sections clear the fixed nav.

### Buttons

- **`MagneticButton`**: a link that leans toward the pointer (spring `stiffness: 200, damping: 18,
  mass: 0.4`) and scales to `0.97` on tap. Base classes:
  `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold tracking-wide`.
  - `primary`: `bg-white text-ink`. On hover, a `from-sky via-violet to-amber` gradient slides up from the
    bottom (`duration-500`, expo ease) and the label turns white.
  - `ghost`: `border border-white/15 text-fog`, and `hover:border-white/40 hover:text-white` on hover.
  - Heroes enlarge it with `min-h-14 px-8 text-base`.
- **Submit button** (`Contact`): `min-h-12 rounded-full bg-white px-7 text-sm font-semibold text-ink`,
  `hover:bg-sky hover:text-white`, full width below `sm` (`w-full sm:w-auto`).
- **Icon buttons**: round, bordered `border-white/15`, and `size-12` (Products carousel arrows,
  `hover:border-white/50`, `disabled:opacity-30`) or `size-11` (nav menu toggle). Icons are `size-5`.
- Buttons are always `rounded-full`. The one exception is the mobile menu CTA, which is `rounded-2xl` to
  match the menu items.

### Cards

- **Product card** (`Products`): `<article className="card-border group … rounded-xl3">`. It has a gradient
  border (`.card-border::before`, the product's `accent` → transparent → `accent2`, `opacity: 0.35`, `1` on
  hover), a mock app window inside (`m-3 rounded-2xl border border-white/10 bg-ink` with three `size-2`
  dots), and a body of `p-6 pt-3 sm:p-8 sm:pt-4`. The category label uses `text-xs uppercase
  tracking-[0.2em]` in the accent color, and the name uses `font-display text-3xl font-bold`.
- **Glass panel** (`Contact` form): `glass rounded-xl3 p-6 sm:p-8`.
- **Light card** (`Services`): `rounded-xl3 border border-carbon/10 bg-white p-8 sm:p-10` with the shadow
  listed above. Its icon tile is `size-12 rounded-2xl bg-carbon text-white`.
- **`TiltCard`**: a wrapper that tilts in 3D toward the pointer (`intensity` 8 by default, spring
  `stiffness: 180, damping: 20`, perspective 1200) and shows a white sheen at 8% that follows the pointer.

### Navigation (`Nav`)

- A fixed, floating pill: `fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6`, with a
  `glass-light mx-auto max-w-7xl rounded-full px-4 py-2.5 sm:px-6` bar inside. It slides in from `y: -40`
  on load.
- The logo is `/logo.png` at `h-7`, followed by "KNR Platforms" in `font-display text-sm font-semibold` from `sm`.
- Links are `nav-link text-sm font-medium text-carbon/70`. On hover and when `aria-current="page"`, a 1px
  sky → amber underline grows from the left (`0.4s`, expo ease).
- The shadow deepens once the page scrolls past 24px.
- See [`responsive.md`](responsive.md) for desktop versus mobile behavior.

### Forms (`Contact`)

- Fields: `rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-mist/60
  focus:border-sky`.

### Interaction effects

- `Spotlight` sets `--cursor-x` / `--cursor-y` from pointer moves. It is skipped on `(pointer: coarse)`
  devices and rendered only from `md` (`hidden md:block`).
- `Reveal` fades content in, lifts it by `y = 32` px and removes a `blur(6px)` as it enters the viewport
  (`0.9s`, expo ease). With reduced motion it only fades. Product cards slide up 40px with an 0.08s stagger.
