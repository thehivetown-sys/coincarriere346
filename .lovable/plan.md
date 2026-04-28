# CoinCarrière — Landing Page Recruteurs

A single, mobile-first French landing page optimized to drive company sign-ups to `https://coincarriere.com/register?type=company`. Strong "too many CVs, not enough good devs" angle, sticky mobile CTA, Meta Pixel hook for Lead tracking.

## Design system

Update `src/styles.css` with the brand tokens (replacing the default shadcn palette):

- Background: deep gradient from `#0A0A0A` → `#0B3F59`
- Primary CTA: `#0094D9` with subtle glow (box-shadow + hover lift)
- Dark blue surfaces: `#16498C`, accent `#1875BB`
- Text: white / slate-200, muted slate-400
- Font: Montserrat (loaded via Google Fonts in `__root.tsx` head — Bold 700 for titles, Medium 500 for body)
- Subtle SaaS-style glow halos behind hero + final CTA (radial gradients, blurred blobs)
- Micro-animations: `animate-fade-in`, `hover-scale`, smooth section transitions

## Page structure (`src/routes/index.tsx`)

Sections in order, each its own component under `src/components/landing/`:

1. **Header** — Logo "CoinCarrière" left, small "Publier une annonce" button right (desktop only)
2. **Hero** — Headline, subheadline, primary CTA, "Gratuit pour commencer", placeholder visual block (right on desktop, below on mobile) representing an overwhelmed recruiter buried in CVs (styled placeholder div with icon + label "Visuel TOF")
3. **Social Proof** — "+451 entreprises recrutent sur CoinCarrière", testimonial card, 5 logo placeholders
4. **Process** — 4 horizontal steps with Lucide icons (FileText → Users → ClipboardCheck → Handshake), numbered, connected line on desktop, vertical stack on mobile
5. **Repeat CTA strip** — single line + button
6. **Benefits** — 6-block grid (3×2 desktop, 1 col mobile), each card: icon, bold title, short description
7. **Video / Demo** — "Découvrez comment ça marche" + 16:9 placeholder with play icon (labelled "Vidéo MOF")
8. **Key Stats** — 3 huge numbers side by side (stacked on mobile): 3x, 70%, +1000
9. **Repeat CTA strip**
10. **Final CTA** — Big headline, glow background, button "Créer mon compte recruteur", urgency line "3 mois gratuits – offre limitée"
11. **Footer** — Minimal: copyright, small links

All CTAs are `<a href="https://coincarriere.com/register?type=company">` (external) with `onClick` firing `window.fbq?.('track', 'Lead')` and a `data-cta` attribute.

## Sticky mobile CTA

Fixed bottom bar visible only on `< md`: full-width "Publier votre annonce" button, safe-area padding, appears after hero scroll (simple IntersectionObserver hook).

## Meta Pixel

Add a placeholder Pixel snippet in `src/routes/__root.tsx` head with a clearly marked `REPLACE_WITH_PIXEL_ID` constant. Initializes `fbq` and fires `PageView`. CTA click handler fires `Lead`. A small helper `src/lib/tracking.ts` exposes `trackLead()` used by every CTA button.

## SEO / Head

In the index route `head()`: French title "CoinCarrière — Recrutez des développeurs qualifiés au Maroc", meta description matching the ad angle, og:title / og:description / og:type=website, twitter:card=summary_large_image, lang="fr" on `<html>` (update `__root.tsx`).

## Technical notes

- TanStack Start, single route `src/routes/index.tsx` replacing the placeholder
- Components: `Header`, `Hero`, `SocialProof`, `Process`, `Benefits`, `VideoDemo`, `Stats`, `CtaStrip` (reusable), `FinalCta`, `Footer`, `StickyMobileCta`
- Reuse shadcn `Button` with a custom `glow` variant via className (not a new variant in the file) — primary uses brand `#0094D9`
- Lucide icons throughout (Target, Users, FlaskConical, Handshake, BarChart3, Globe, FileText, ClipboardCheck, Play, ArrowRight)
- Image placeholders are styled `div`s with dashed brand border + icon + label, ready to swap for real assets
- All copy in French, exactly as specified in the brief
- Mobile-first Tailwind: base = mobile, `md:` / `lg:` for larger
- Fade-in on scroll using a small `useInView` hook (IntersectionObserver) — no extra deps

## Out of scope

- Real backend / form submission (CTA links out to coincarriere.com)
- Real Pixel ID (placeholder, user fills in)
- Real images/video (placeholders ready to swap)
- Multi-page routing — single landing page only
