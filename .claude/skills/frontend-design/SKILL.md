---
name: frontend-design
description: How this project's screens should look and behave, for designing a screen, drawing a mockup or writing UI code. Use when building or changing a page, a component, a form, a list or a dialog, when restyling something, or when asked what a screen should look like.
---
<!-- Managed by Kairen: it rewrites this file when its template changes. Remove this line to keep your own changes. -->

# Frontend design

A screen succeeds when the one thing its user came to do is obvious within a
second, and everything else stays calm around it.

The exact values live in the project's design system: `design/README.md`
(visual identity, tokens, component conventions), `design/responsive.md`
(breakpoints, navigation) and `design/tokens.json`. This skill says how to use
them; when they disagree, the design system wins. Without a design system
yet, follow the project's existing stylesheet, theme and components, and
never invent a color, size or spacing the code does not contain.

## Principles

1. **One focus per screen.** Decide what the user must do there and give it
   the only primary action and the strongest contrast. Two primary buttons
   side by side means the screen has not decided.
2. **State before detail.** Lead with status (a badge, a banner, a count),
   then the content.
3. **Reuse before inventing.** Use the project's existing components and
   patterns; a new pattern that appears twice becomes a shared component, and
   gets a section in `design/README.md`.
4. **Color carries meaning.** Neutral surfaces by default; the accent for
   the main action or the current item, status colors (success, warning,
   danger, info) only for state, never as decoration.
5. **Every state is designed.** For each list or panel: empty (why it is
   empty, how to fill it), loading or working, error (what failed, what to
   do), and long content (truncation, wrapping, no overflow).

## Tokens, never raw values

- Colors, radii, spacing, fonts and shadows come from the design system's
  tokens or the theme, never as raw values (a hex code, a one-off pixel
  size) in a component.
- When the project has a dark theme, check every screen in both themes: a
  raw color breaks the one it was not picked for.

## Layout and responsiveness

- Mobile first: design the narrow layout, then add the wider ones only where
  they differ. Multi-column content stacks into one column on phones.
- Touch targets are at least 44 px high on touch screens; nothing is
  reachable by hover alone.
- No horizontal page scroll at 360 px wide; a long row of tabs or links
  scrolls inside its own container.

## Accessibility

- Body text has at least 4.5:1 contrast with its background.
- Every interactive element is a button or a link, reachable by keyboard,
  with a visible focus indicator.
- Icon-only buttons have an accessible label; tabs, menus and dialogs use
  their ARIA roles; the current navigation item is marked as current.
- Motion is short and respects `prefers-reduced-motion`.

## Copy

- Short and concrete: a button says what it does ("Save changes", not
  "Submit"), a status says what is happening.
- An error says what failed and the next step. An empty state says why it is
  empty and how to fill it.
- Keep the product's language and tone; when the design system lists a
  screen's copy, use it word for word.

## Mockups

A mockup is one self-contained HTML page with inline CSS and no script.
Copy the design system's token values into CSS variables at the top and use
only those. Draw the real content of the screen (realistic names, counts,
dates), not placeholder text, at the viewport asked for, in the state asked
for (empty, error, filled).

## Before you finish

- [ ] One primary action, and it is the thing the user must do.
- [ ] Only design tokens: no raw color or one-off size.
- [ ] Empty, working, error and long-content states exist.
- [ ] The layout holds at 360 px and on a wide screen, in every theme.
- [ ] Keyboard and screen-reader checks above pass.
- [ ] A new pattern is documented in the design system.
