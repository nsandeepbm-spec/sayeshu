# SAYESHU — Content & Styling Guide

Where every piece of site content lives, how to change it, and the CSS rules that keep the
project free of styling warnings. Read the **CSS rules** section before adding any new component.

---

## 1. Site map

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Homepage — composes all home components |
| `/capabilities` | `app/capabilities/page.tsx` | Service lines, capability mosaic, lifecycle matrix, technology focus, engagement scopes |
| `/capabilities/ai-infrastructure` | `app/capabilities/ai-infrastructure/page.tsx` | Full AI Infrastructure capability page (stack, GPU, workloads, ecosystem) |
| `/capabilities/gpu-performance` | `app/capabilities/gpu-performance/page.tsx` | GPU Performance & Compute Efficiency (factors, inference metrics, framework) |
| `/capabilities/power-energy` etc. | `app/capabilities/<slug>/page.tsx` | Static capability detail pages (Power, Cooling, Approach, Standards) — listed in the Capabilities dropdown |
| `/expertise` | `app/expertise/page.tsx` | Eight engineering disciplines, deep-dive tabs, AI performance measures |
| `/solutions` | `app/solutions/page.tsx` | Practice areas, engagement models, process, deliverables |
| `/projects` | `app/projects/page.tsx` | Filterable project portfolio, engagement stages |
| `/insights` | `app/insights/page.tsx` | Featured article, filterable articles, newsletter signup |
| `/company` | `app/company/page.tsx` | About, values, foundation, team, standards |
| `/contact` | `app/contact/page.tsx` | Enquiry form, contact details, locations |
| 404 | `app/not-found.tsx` | Not-found page |
| — | `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg` | SEO files and favicon |

The navbar and footer links come from `navItems` in `lib/site.ts`. Add a page by creating
`app/<name>/page.tsx` and adding one entry to `navItems` and to `app/sitemap.ts`.

---

## 2. Where the content lives

### Global details — `lib/site.ts`
Company name, tagline, description, site URL, emails, phone, locations, copyright year,
social links (empty = hidden), navbar items, header button, standards bodies.

Set the real domain with the `NEXT_PUBLIC_SITE_URL` environment variable.

### Structured content — `lib/data/`

| File | Contains | Used on |
|---|---|---|
| `capabilities.ts` | Service lines, mosaic tiles, lifecycle phases/matrix, technology panels, engagement scopes | `/capabilities` |
| `disciplines.ts` | The 8 disciplines (title, summary, tags, scope, deliverables, standard) and `performanceMeasures` | `/expertise`, footer |
| `solutions.ts` | `practiceAreas`, `engagementModels`, `aiReadyRows`, `processPhases`, `typicalDeliverables` | `/solutions`, home |
| `projects.ts` | `projectCategories`, `projects`, `engagementStages` | `/projects` |
| `insights.ts` | `insightCategories`, `insights`, `featuredInsight`, `formatInsightDate()` | `/insights` |
| `company.ts` | `values`, `whyPoints`, `foundations`, `team` | `/company` |

To change a card, article, project or team member, edit the matching array. The pages and
filters update automatically. Category counts are calculated, never typed by hand.

### Page headings and intro copy
Every page has its **own hero component**, so no two pages look the same:

| Page | Hero component | Style |
|---|---|---|
| Home | `components/home/Hero` (uses `ui/PageHero`) | Photo on the right, large headline, CTAs |
| Expertise | `components/expertise/ExpertiseHero.tsx` | Dark technical band (distinct from Home) |
| Solutions / Projects / Insights / Company / Contact | Matching `*Hero.tsx` files, all use `ui/PageHero` | Same composition as Home; page-specific copy, photo and CTAs |

Edit the hero text inside that component. Hero text uses the entrance animation classes
`rise`, `rise-1` … `rise-4`. The `metadata` (browser title and description) of each page is
in its `app/<route>/page.tsx`.

Section headings and one-off copy sit inside the component that renders them:

| Area | Folder |
|---|---|
| Home sections | `components/home/` |
| Capabilities | `components/capabilities/` |
| Expertise | `components/expertise/` |
| Solutions | `components/solutions/` |
| Projects | `components/projects/` |
| Insights | `components/insights/` |
| Company | `components/company/` |
| Contact | `components/contact/` |
| Header, footer, logo | `components/layout/` |
| Shared building blocks | `components/ui/` |

### Images — `lib/images.ts` and `public/images/`
Every photo is registered once in `lib/images.ts` and referenced as `images.<key>`.
To replace a photo, overwrite the file in `public/images/` (keep the file name) or change the
path in `lib/images.ts`. Always give new images a descriptive `alt` text where they are used.

### Forms — `lib/actions.ts`
`submitEnquiry` (contact page) and `subscribeToNewsletter` (insights page) validate input on
the server. The final step, `deliver()`, is a **placeholder**. Connect it to your email
service or CRM before launch. Nothing is sent until you do.

---

## 3. Placeholder content to replace before launch

- Project cards, article titles and dates, and team job titles are illustrative.
- Addresses, telephone number, emails and map coordinates on `/contact` and the footer.
- Performance and telemetry figures in the schematic panels (for example PUE targets, kW per rack).
- `siteConfig.social` — add LinkedIn / X URLs to show them in the footer.
- Article and project cards do not open detail pages yet.
- Team photos are stock-style images with generic job titles and no names.

---

## 4. CSS rules (read before adding styles)

The project uses **Tailwind CSS v4**. The design tokens live in `app/globals.css`
(`@theme`). Follow these rules and the editor stays free of "unknown at-rule" and
"canonical class" warnings.

### 4.1 Use tokens, never one-off values

| Instead of | Use |
|---|---|
| `text-[10px]` / `text-[11px]` / `text-[13px]` / `text-[15px]` / `text-[17px]` | `text-micro` / `text-tiny` / `text-small` / `text-body` / `text-lead` |
| `text-[21px]` / `text-[28px]` / `text-[32px]` | `text-card-title` / `text-feature` / `text-feature-lg` |
| `text-[38px]` / `text-[40px]` / `text-[56px]` | `text-headline` / `text-display` / `text-headline-lg` |
| 32 / 40 / 44px responsive section heading | `section-title` (one utility, handles all breakpoints) |
| `tracking-[0.18em]` / `[0.15em]` / `[0.14em]` / `[0.08em]` | `tracking-eyebrow` / `tracking-label` / `tracking-link` / `tracking-caps` |
| `tracking-[-0.03em]` / `[-0.02em]` | `tracking-heading` / `tracking-heading-sm` |
| `leading-[1.06]` | `leading-headline` |
| `bg-[#faf9f6]`, `text-[#44474b]`, `border-[#c4c6cb]` … | A named colour from the table below |

### 4.2 Colour tokens

| Group | Tokens |
|---|---|
| Light surfaces | `canvas`, `canvas-hover`, `stone`, `stone-deep`, `line`, `line-warm`, `line-strong`, `outline` |
| Text | `ink`, `steel`, `steel-dark`, `steel-deep`, `mist` |
| Accent (teal) | `accent` (decorative lines, icons, focus), `accent-text` (text on light, AA-safe), `accent-bright` (text on dark), `accent-tint` (soft fills) |
| Dark bands | `night`, `night-deep`, `night-raised`, `night-panel`, `night-line`, `night-border`, `night-text`, `night-soft`, `night-muted`, `night-label` |
| Status | `success`, `danger`, `danger-ink`, `danger-tint`, `info-tint` |

If you need a new colour, add it to `@theme` in `app/globals.css` and use the class
(`bg-my-colour`). Do not paste hex codes into class names.

### 4.3 Spacing and sizing use the Tailwind scale

One step = 4px. Write `min-h-75`, not `min-h-[300px]`. Write `max-w-360`, not
`max-w-[1440px]`. Write `aspect-16/10`, not `aspect-[16/10]`. Write `lg:w-13/20`, not
`lg:w-[65%]`.

Fine to keep as arbitrary values: `min-h-[60vh]`, `before:content-['']`, and unitless values
that have no token.

### 4.4 Tailwind v4 names

| Old (v3) | Current (v4) |
|---|---|
| `bg-gradient-to-t` | `bg-linear-to-t` |
| `outline-none` | `outline-hidden` |
| `flex-shrink-0` / `flex-grow` | `shrink-0` / `grow` |
| `bg-opacity-50` | `bg-black/50` |
| `z-[100]` | `z-100` |

### 4.5 Never put two display utilities on the same element

`cn()` in `lib/cn.ts` only joins strings; it does **not** resolve conflicts. A base class such
as `inline-flex` and an override such as `hidden` can fight, and the wrong one may win. This
once pushed the mobile menu button off-screen.

To show or hide something at a breakpoint, wrap it:

```tsx
<div className="hidden sm:block">
  <Link className={buttonStyles("primary")}>…</Link>
</div>
```

The same applies to buttons. Do not override padding, text size or background through
`className`. Use the options in `components/ui/Button.tsx`:

- `variant`: `primary`, `secondary`, `inverse`, `outline-inverse` (outlined button on dark bands)
- `size`: `default`, `compact` (header), `form` (form submit)

```tsx
buttonStyles("outline-inverse")
buttonStyles("primary", "w-full sm:w-auto", "form")
```

### 4.6 Images

- Images above the fold (hero) use `preload` together with `loading="eager"`. The hero
  components already do this.
- Every `fill` image needs a `sizes` prop and a positioned parent (`relative`).
- Every image needs a meaningful `alt`.

### 4.7 Editor setup

`.vscode/settings.json` (workspace root) silences the built-in CSS linter's "unknown
at-rule" warnings for `@theme` / `@utility`, associates `.css` with Tailwind, and enables
Tailwind IntelliSense warnings for class conflicts and non-canonical classes. Install the
**Tailwind CSS IntelliSense** extension.

---

## 5. Checks before every commit

```bash
npx tsc --noEmit    # types
npx eslint .        # lint
npx next build      # production build (all routes must prerender)
```

Also check each page at 375px wide. There must be no horizontal scrollbar.

### Page opens in the middle instead of at the hero
`app/layout.tsx` has `data-scroll-behavior="smooth"` on `<html>`. **Keep it.** With the global
`scroll-behavior: smooth` CSS, Next.js 16 only jumps to the top on navigation when this
attribute is present. Without it, a new page opens at the previous scroll position.

### The `/nope` URL
`/nope` is not a page of the site. It was only a made-up address used to test the 404 page
(`app/not-found.tsx`). Keep that file: it is what visitors see when they mistype a URL.

### Dev server shows broken or missing styles
If the page suddenly loses styling after many files change at once (a "file in use" error in
the terminal), stop `npm run dev`, delete the `.next` folder and start it again.

### About terminal noise in `npm run dev`
- **Hydration diff showing `data-cursor-ref="eNN"`**: this comes from the Cursor in-IDE browser
  tool adding attributes to the page. It is not a bug in the code, and it does not appear in a
  normal browser.
- **LCP "add `loading="eager"`" warning**: appears only when a lazy image is the largest
  visible element, for example when the browser window is made very tall. Hero images already
  use `loading="eager"`.
