---
name: ui-style-explorer
description: Choose a visual style for a screen, then design it one style at a time at desktop size, from 27 styles (Claymorphism, Neo-Brutalism, Glassmorphism, Swiss, Wabi-Sabi and 22 more) to set the direction of an app's UI or brand identity. Use when asked to try a screen in different styles, to show a brutalist, glass, Y2K or other version, to explore visual directions, to make a moodboard or to compare styles.
---
<!-- Managed by Kairen: it rewrites this file when its template changes. Remove this line to keep your own changes. -->

# UI style explorer

Pick one style with the user, then design ONE real screen of the app in that
style, full size, before trying another. Depth on one direction beats a
wall of thumbnails.

This skill is for exploring a direction. Once a style is chosen, it becomes
the project's design system, and the frontend-design skill applies again.

## Workflow

1. **Pin the screen.** Which screen, what it is for, and its real content:
   titles, names, counts, dates, the primary action. Never placeholder text.
2. **Choose the style first.** Before designing anything, propose 3 to 5
   styles that suit the product, one line each on what it says and its
   risk, and let the user pick one. Use the styles they name, if any.
3. **Design one style at a time, desktop first.** One self-contained HTML
   page at 1440 x 900 for the chosen style, with the full screen, not a
   thumbnail. Google Fonts are allowed.
4. **Use real imagery for image-led styles.** When the style relies on a
   painting, a photo collage or a 3D object and an image model is available
   (for example `OPENAI_API_KEY` with the OpenAI Images API), generate the
   key visuals and place them in the page. Without one, evoke the image with
   CSS and SVG and say what a real asset would add.
5. **Critique before showing.** Compare the page with the style's recipe
   below: its signature moves, contrast, one primary action. Fix what falls
   short, then show it.
6. **Iterate, then hand off.** Adjust the chosen style with the user, add
   the mobile layout and other screens, then the tokens (colors, type
   scale, radii, shadows, motion) ready for the design system. Move on to
   the next style only when asked.

## Rules

- Keep the screen's real skeleton: header, key information, list or cards,
  primary action, navigation.
- Each style must be recognisable at a glance: apply its signature moves
  below, not just its palette.
- Body text keeps at least 4.5:1 contrast in every style. Say so when a
  style works against accessibility (Glassmorphism, Neumorphism, Ethereal).
- One primary action per frame, the same one in every style.

## Styles and their signature moves

These recipes come from reference designs. Many styles are image-led (a
painting, a photo collage, a 3D object): without image assets, evoke the
image with CSS gradients, SVG and type, and say what a real asset would add.

| Style | Palette | Type | Signature moves |
|---|---|---|---|
| Claymorphism | monochrome soft light grey, one coral accent | soft rounded sans | every control extruded and pillowy (keys, segmented control, inputs, toggles), large radius, the coral only for active states, ring progress |
| Cybercore | light grey, black, one red block | custom geometric display, tiny mono uppercase labels | technical grid of thin rule panels with chamfered corners, labels like HUMAN / EXPRESSION, bitmap and ink imagery, pixel motifs, asterisks |
| Neo-Brutalism | cream with candy coral, violet, teal, yellow, pink | big rounded grotesk (Space Grotesk) | thick black outlines, hard offset shadows `4px 4px 0 #000`, pill chips, chunky tabs, split-color progress bars, tilted stacked buttons, confetti squares and stars |
| Scrapbook | cream, kraft, ink black | handwritten marker headline, typewriter body (Caveat, Special Elite) | torn kraft card held by masking tape, polaroid photo, lined to-do note with ticks, ink doodles (flower, star, arrow, splat), label-maker CTA |
| Surrealism | sky blue, cloud white, one saturated object color, grain | big condensed display (Bebas Neue, Anton) | photo collage of an everyday object floating on a cloud, landscape below, film grain, giant type behind and around the subject |
| Y2K Aesthetic | white grid paper, airbrush pink, teal, orange, yellow | distressed heavy black type with white sticker outline | spray-paint blobs, 3D smiley balls and flowers, pixel cursor, hand-drawn scribbles and stars, loud collage |
| Pixel Art | white page, electric blue, black, one pink | pixel display (Silkscreen, Press Start 2P) with mono body | huge blocky headline, mono nav, big pixel numerals for figures, voxel 3D heart or sticker character, clean web layout |
| Synthwave | night navy and purple, magenta, cyan, orange sun | retro chrome display (Monoton, Audiowide) | huge striped sun, neon wireframe grid floor and mountains, neon palm outlines, glow, starry sky |
| Glassmorphism | iridescent pastel gradient (lilac, mint, aqua), dark navy text | clean sans (Inter) | frosted white tiles with large radius, a hero 3D object breaking out of the grid, ring and line charts, pill search, bright and airy |
| Neumorphism | one light grey, no accent | clean sans, thin big numerals | panels and pill rows extruded with twin soft shadows, dial gauge with ticks, raised list rows with chevrons, monochrome icons |
| Bento Grid | cream page, each tile its own flat pastel | serif tile titles, sans body | rounded tiles of mixed sizes, one feature per tile with a short line, a product mockup bleeding off each tile's edge |
| Editorial Design | photo-led, black type, highlighter yellow, pink | huge condensed headline (Anton, Archivo Black), small caps nav | headline overlapping a full-bleed portrait, marker scribbles and highlighter circle, handwritten notes, film strip, vertical edge text, flat CTA with long arrow |
| Swiss Design | light grey, black, one red-orange | tight grotesk (Inter Tight) | huge words staggered across the grid, one red-orange square overlapping the type, faint giant watermark wordmark, tiny corner meta (Est. 2017 //) |
| Minimalism | white, black, one product color | clean grotesk, centred headline | huge white space, a small mark at the top, centred headline with one inline image, one black pill button, the product (a fan of book covers) peeking from the bottom edge |
| Maximalism | everything at once: black, white, magenta, acid lime, pixel rainbow | giant condensed white headline (Anton) with mono labels | post-internet collage: classical statue with a pixelated face, Windows 98 dialogs, file names (identity.exe), stickers, halftone eye, parental-advisory label, barcodes, smileys |
| Luxury Typography | sage green type on a pale sky, natural photo | condensed Didone capitals mixed with flowing swash script (Pinyon Script) | words swapped mid-line between capitals and script, wide centred composition, one quiet photographic object below (a chair on a hill) |
| Conceptual Sketch | paper white, graphite, rust and sepia wash | small technical labels | architect's presentation drawing: watercolor elevation, pale wash, graphite lines, misty trees, scale bar with tiny labels |
| Ethereal | luminous greens and white light, chromatic fringes | bold soft serif (Fraunces) | cinematic photo, radial zoom blur toward a glowing portal, tiny figure, chromatic aberration streaks, centred headline |
| Bohemian | bone and cream panels, landscape painting, dark vignette | wide light serif title, tiny technical meta | notched chamfered cut-out panels framing a classical landscape painting, poster metadata (No 072, 28/11), sparkles, checker strips, dot pairs |
| Victorian | deep red velvet, gold, cream clouds | giant calligraphic swash script with Didone capitals | gilded baroque frame around a still-life painting, cloud bank at the bottom, bracketed labels [ Studio ], small white CTA |
| Cyberpunk | white, electric blue, black, one lime highlight | wide geometric sans, tiny mono labels in black bars | HUD frame with thick angled blue bands, circuit lines, orbit diagrams with dots, crosshairs and sparkles, bracketed callout boxes, barcode glyphs, HANDLE WITH CARE vertical text |
| Wabi-Sabi | off-white paper, black ink, one red dot | calm serif, vertical Japanese text | ink woodcut of tree rings sweeping across, vertical わびさび with a red hinomaru dot, small centred title, sparse asymmetry |
| Risograph | off-white paper, fluo pink, medium blue, purple where they overprint | heavy grotesk (Bricolage Grotesque), mono labels | two spot inks only, slight misregistration (offset pink shadow), halftone dot fills, paper grain, dotted rules, two-ink illustration plate |
| Isometric | cool off-white with a faint 30-degree grid, indigo, one coral | rounded geometric sans (Sora), mono labels | true 30-degree isometric illustration (a scene seen from above), UI blocks as extruded slabs with two visible side faces, small isometric cubes as markers, skewed progress segments |
| Blueprint | cyanotype blue, white lines, red for markup | condensed grotesk (Archivo), technical mono, a handwritten note | double square grid, ruled frames with corner ticks, white technical drawing with circled detail callouts (A, B), dimension lines, a title block for the details, red redlines for what needs the human |
| Linear-style | near-black, hairline borders, one indigo accent, amber for attention | Inter, tight tracking, mono IDs | app shell with sidebar, issue-like IDs (KRN-405), status circle icons, properties panel, keyboard shortcut hints (⌘K), restrained glow on the one primary button |
| Dark tech | black with a dot grid, violet, amber | Geist with gradient-filled headings, Geist Mono | cinematic dark render behind the title, glass cards with gradient hairline borders, floating pill navigation, glowing nodes for progress, code shown as a diff in a terminal card |

## Before you finish

- [ ] The user chose the style before the design started.
- [ ] The page shows the style's signature moves at desktop size.
- [ ] Body text contrast is at least 4.5:1, or the risk is named.
- [ ] Image-led styles use generated visuals, or say what a real asset would add.
