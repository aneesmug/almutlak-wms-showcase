# Almutlak WMS Showcase

Build a professional, animated web presentation (scrollable, slide-style, one section per full viewport) for "Almutlak WMS" — a bilingual warehouse management system. 7 sections total, snap-scroll or click-through navigation with arrow controls + progress dots on the side.




DESIGN SYSTEM:

- Dark theme: background #0B1220 (deep navy), alternate sections #111827 (slate)

- Accents: #2563EB (blue, primary), #14B8A6 (teal, highlights), #F59E0B (amber, sparingly)

- Text: #F8FAFC primary, #94A3B8 muted secondary

- Cards: surface #1E293B, 1px border #334155, 12-16px rounded corners, soft shadow

- Font: Inter or Sora/Poppins for headings (semibold, 40-54px), Inter for body (16-18px)

- Use Framer Motion for animations: fade + slide-up entrances (staggered 120-150ms), scale-pop on icons/stats, smooth cross-fade or push transitions between sections (500ms)

- Line-style icons only (lucide-react), consistent 2px stroke, accent colored

- 12-column grid feel, generous whitespace, consistent header/footer zones with section kicker label + slide number




SECTIONS (build each as its own full-screen component):




1. TITLE: Kicker "WAREHOUSE MANAGEMENT SYSTEM", big title "Almutlak WMS", subtitle "A Unified, Bilingual Platform for Modern Warehouse Operations". Subtle animated dot-grid background drifting slowly. Title scales in, subtitle slides up after.




2. EXECUTIVE OVERVIEW: Headline "One System Managing the Entire Warehouse Lifecycle". Body: digitizes and connects every stage of warehouse operation, real-time source of truth for every role. Animated horizontal flow diagram: Supplier -> Inbound Receiving -> Storage/Inventory -> Picking -> Outbound -> Delivery, nodes appear left-to-right with connecting lines drawing in. Below, 3 stat cards: Multi-Warehouse support, Role-Based Access (Viewer/Operator/Manager), Real-Time Data.




3. CORE MODULES: Headline "Purpose-Built Modules for Every Function". 2x3 animated card grid, staggered entrance: Inbound & Receiving (containers, suppliers), Inventory & Locations (bin tracking, put-away), Picking & Outbound Orders (pick lists, staging), Warehouse Transfers (inter-warehouse stock moves), Delivery & Driver Management (third-party delivery tracking), Reports & Analytics (inbound/outbound/inventory reporting).




4. BILINGUAL DESIGN: Headline "Built to Speak Every User's Language — Natively". Bullets: full page auto-renders in English or Arabic with true RTL mirroring (not just text swap); smart translation engine caches translations for speed; names/records display in user's language automatically while data stays consistent; admin Translations dashboard for full control. Visual: split-screen mockup, same dashboard in English (LTR) and Arabic (RTL) mirrored, meeting at a center seam that animates in.




5. RELIABILITY & CONTROL: Headline "Engineered for Data Integrity and Operational Control". Animated checklist (checkmarks tick in one by one): secure config kept outside app code; inactive suppliers/products auto-filtered from selection lists; parameterized queries throughout (injection-safe); granular role-based permissions per warehouse. Central pulsing shield icon.




6. TECH STACK: Headline "Simple, Proven, Scalable Technology". Animated 3-layer stack rising bottom-to-top: MySQL (data) -> PHP REST API (logic) -> Responsive web UI with DataTables/SweetAlert2 (experience). Side note: "No heavy frameworks, no unnecessary complexity — a lean stack chosen for reliability and ease of maintenance." Pulse line travels up through all layers on load.




7. CLOSING: Headline "One Platform. Every Warehouse. Any Language." Centered closing statement: "Almutlak WMS brings every warehouse operation — receiving, storage, picking, delivery, and reporting — into a single, secure, bilingual system built to reduce errors, save time, and scale with the business." Three outcome pill badges: Fewer Errors, Faster Operations, Seamless Bilingual Access. Return to title's ambient background, calmer/slower pulse.




Make it fully responsive, keyboard arrow navigation between sections, and a small progress indicator (dots) fixed on the right edge showing current section out of 7.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/37894eef-d2fa-47c3-b556-a2f122bb6de0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
