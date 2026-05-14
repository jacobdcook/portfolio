# Design System: jacobdcook.com

## Color Tokens

### Canvas
- **Light (default):** `#F7F6F3` (`oklch(0.97 0.005 80)`)
- **Dark (opt-in):** `#16161A` (`oklch(0.18 0.005 80)`)

### Text
- **Body:** `#1A1A1A` (`oklch(0.20 0.005 80)`)
- **Secondary:** `#6B6B68` (`oklch(0.50 0.005 80)`)
- **Tertiary:** `#9B9B98` (`oklch(0.62 0.005 80)`)

### Accent
- **Primary (Terracotta):** `#B8553E` (`oklch(0.55 0.12 35)`)
- **Hover:** `#A24430` (10% darker)
- **Active:** `#8F3729` (20% darker)

### Hairlines
- **Light mode:** `#E5E4DF` (`oklch(0.92 0.005 80)`)
- **Dark mode:** `#2A2A2E` (`oklch(0.25 0.005 80)`)

### Semantic
- **Success:** `#4B7C5A` (muted sage)
- **Error:** `#9F2F2D` (muted red)
- **Warning:** `#956400` (muted gold)
- **Info:** `#1F6C9F` (muted blue)

## Typography

### Typefaces
- **Display:** Cabinet Grotesk (local, woff2)
- **Body:** Geist Sans (via `next/font/google`)
- **Mono:** Geist Mono (via `next/font/google`)
- **Fallback:** system-ui, sans-serif

### Scale & Hierarchy
- **Display (Hero):** 48px / 56px / 64px on mobile / tablet / desktop; `tracking-tighter`; `leading-none`
- **H1 (Section):** 36px; `font-bold`; `tracking-tight`; `leading-tight`
- **H2:** 28px; `font-bold`; `tracking-tight`
- **H3:** 20px; `font-semibold`; `tracking-tight`
- **Body:** 16px; `font-normal`; `leading-relaxed` (1.75); `line-height: 1.75`
- **Label:** 13px; `font-medium`; `tracking-wide` (0.05em); uppercase
- **Mono:** 14px; `font-mono`; `leading-relaxed`

### Line Length
- Body prose: max 65ch (approx 650px)
- Constrain via `max-w-[65ch]`

## Spacing & Layout

### Vertical Rhythm
- **Hero section:** `min-h-[100dvh]` (prevents iOS Safari bounce)
- **Section padding:** `py-24` / `py-32` (generous macro whitespace)
- **Inner padding:** `px-6` mobile, `px-8` tablet, `px-0` desktop (with `max-w-6xl mx-auto`)
- **Component gaps:** `gap-6` / `gap-8` between major blocks
- **Line spacing multiplier:** 1.5–1.75 for readability

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Container
- `max-w-6xl` (approx 1280px content)
- Centered with `mx-auto`
- Horizontal padding `px-6` on mobile, `px-0` on desktop

## Component Patterns

### Buttons (Primary)
- Background: Terracotta `#B8553E`
- Text: White `#FFFFFF`
- Padding: `px-6 py-3` / `px-8 py-3.5`
- Border-radius: `4px` (crisp, not rounded)
- Transition: `transition-all 200ms cubic-bezier(0.16, 1, 0.3, 1)`
- Hover: scale 102%, background darkens to `#A24430`
- Active: scale 98%, translateY 1px
- Font: `font-semibold`, `text-base`
- **Ban:** `rounded-full` pill shape (minimalist-ui rule)

### Buttons (Secondary)
- Background: transparent or hairline border `#E5E4DF`
- Text: Body color `#1A1A1A`
- Hover: border becomes terracotta `#B8553E`, text becomes terracotta
- Transition: 200ms ease-out-quart

### Cards (Editorial List Item)
- Background: light canvas `#F7F6F3` (or white on desktop)
- Border: 1px solid `#E5E4DF`
- Padding: `p-6` / `p-8`
- Border-radius: `8px` / `12px`
- Hover: shadow lifts to `0 2px 8px rgba(0,0,0,0.04)` (very subtle)
- **No gradients, no heavy shadows, no rounded-full**

### Form Inputs
- Label above input (always)
- Input: `py-2 px-3`, `text-base`, `border: 1px solid #E5E4DF`
- Focus: `outline-none`, `border-color: #B8553E`, `ring-1 ring-terracotta/50`
- Helper text: `text-sm text-secondary` below label
- Error text: `text-error #9F2F2D` below input, inline validation
- No rounded-full, no colored shadows

### Timeline (Experience)
- Two-column layout on desktop: date (mono, right-aligned, narrow) | content
- Border-left or border-bottom separators: 1px `#E5E4DF`
- No cards, no background boxes

### Grid (Projects / Bento)
- CSS Grid with mixed aspect ratios
- Featured projects: 2fr width, taller aspect ratio
- Regular projects: 1fr width, standard aspect ratio
- Gap: `gap-6` / `gap-8`
- Responsive: 1 column on mobile, 2–3 on desktop

### Badges / Chips (Certs)
- Styled as `<kbd>` elements (per minimalist-ui)
- Background: hairline border `#E5E4DF`
- Padding: `px-2 py-1`, `text-xs`, `font-mono`
- Border-radius: `2px` (sharp)
- **No pill shape, no colored backgrounds**

### Icons
- Source: Phosphor Icons (fill or bold weight)
- Stroke width: 1.5 or 2.0 (standardized across project)
- Color: inherit or terracotta on hover
- Size: 20px / 24px

## Motion & Transitions

### Easing Curve
- Default: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quart)
- Duration: 200–300ms for interactions, 600ms for scroll entries

### Spring Physics (Framer Motion)
- Type: `"spring"`
- Stiffness: 100
- Damping: 20
- Used on: interactive CTAs, form submissions, hover transforms

### Scroll Entry (Intersection Observer)
- Fade-up: `opacity: 0` → `1`, `translateY: 12px` → `0`
- Duration: 600ms
- Stagger on lists: `delay: calc(index * 80ms)`
- **Never:** layout-property animations (`top`, `left`, `width`, `height`)
- **Always:** `transform` and `opacity` only

### Hover / Active States
- Buttons: `scale(1.02)` on hover, `scale(0.98)` on active
- Cards: subtle shadow lift
- Links: color change (no underline-on-hover unless explicitly designed)

## Dark Mode

### Token Overrides
- Canvas: `#16161A` (dark)
- Text: `#EBEBEB` (off-white, never `#FFF`)
- Secondary: `#9B9B98` (warm gray, unchanged)
- Accent: Terracotta unchanged
- Hairlines: `#2A2A2E` (dark hairlines)
- Card bg: `#1F1F24` (slightly lighter than canvas)

### Demotion
- Dark mode is **opt-in via toggle**, not the default impression
- Light mode is canonical; dark is a courtesy

## Accessibility

### Focus Indicators
- Visible focus ring: 2px solid terracotta `#B8553E`
- Never `:focus { outline: none }` without a replacement
- All interactive elements keyboard-navigable

### Color Contrast
- Body on canvas: `#1A1A1A` on `#F7F6F3` = WCAG AAA ✓
- Secondary on canvas: `#6B6B68` on `#F7F6F3` = WCAG AA ✓
- Accent `#B8553E` on white: WCAG AAA ✓

### Semantic HTML
- Use `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`
- Form: `<label>` with `htmlFor`, proper `<input>` types
- Icons: `aria-hidden="true"` when decorative; `aria-label` when meaningful
- Images: descriptive `alt` text

## Component Primitive Reference

### Hero
- Asymmetric split (left text, right visual artifact)
- Left: h1 identity + p tagline + 2 CTAs (staggered)
- Right: `<pre>` code block OR headshot (no glow, no gradient blur)
- Layout: `flex md:flex-row` with `gap-12`, `items-center`
- Min height: `min-h-[100dvh]`

### Navbar
- Sticky, minimal visual weight
- Logo / name left, nav links center (hidden mobile), theme toggle right
- Sentence case all links
- Active link: terracotta underline
- Background: light canvas with hairline bottom border

### Footer
- Minimal. Email + socials, no link farm
- Legal: privacy + terms placeholders
- Background: light canvas, hairline top border

### About
- Single-column prose (`max-w-[65ch]`)
- Pull-quote lede (typographic contrast, larger serif or bold)
- Body copy: 16px, line-height 1.75
- No cards, no background boxes

### Timeline (Experience)
- Desktop: 2-column grid (date | content)
- Date: mono, right-aligned, `text-secondary`, narrow
- Content: h3 title, p company, p description
- Separator: 1px border-bottom between items
- Mobile: single column, date above title

### Projects (Bento)
- CSS Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (adjust for asymmetry)
- Featured: `col-span-2` on desktop, taller aspect ratio
- Card: border, 1px solid `#E5E4DF`; padding `p-6` / `p-8`; hover lift shadow
- Title: h3, terracotta on hover
- Description: body, secondary color
- Footer: "View on GitHub" link + Phosphor icon

### Contact Form
- Label above input (always)
- Layout: stack vertically, `gap-2` per input block
- Input: clean border, terracotta focus ring
- Submit: primary button (terracotta, spring physics)
- Success: inline message (no `!`)
- Error: inline message below field, `#9F2F2D`

## Deprecated / Banned

- `gradient-text` (background-clip: text)
- `rounded-full` on buttons or large containers
- Centered hero with circular photo + glow blur
- Em dashes (`—`) in copy
- Typewriter animation on greeting
- Pill-shaped badges (use square `<kbd>` instead)
- Multiple accent colors
- Emojis anywhere
- Inter font
- `min-h-screen` (use `min-h-[100dvh]` instead)
