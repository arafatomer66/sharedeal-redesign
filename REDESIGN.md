# ShareDeal (sharedealnow.com) — Redesign

A working, zero-build redesign prototype of sharedealnow.com covering the **entire
marketing funnel**: landing → group deal → product → cart → checkout → order success.
All products, prices, images, delivery areas and the brand green (`#4cbf42`) are pulled
from the live site; group membership counts and countdowns are simulated.

**Run it:** `python3 -m http.server 8742` in this folder → http://localhost:8742
(Everything is vanilla HTML/CSS/JS — no build step, no dependencies.)

| File | Purpose |
|---|---|
| `index.html` | Home / landing — the top of the funnel |
| `product.html?id=N` | Product detail with the group-buy module |
| `cart.html` | Cart with savings + free-delivery progress |
| `checkout.html` | Single-page checkout |
| `success.html` | Confirmation + referral viral loop |
| `css/main.css` | Design system + every micro-animation |
| `js/app.js` | Cart store, BN/EN i18n, renderers, animation engines |
| `js/data.js` | 64 real products (9 categories) + 6 group deals |

---

## 1. What's wrong with the current site (audit findings)

1. **The core product is invisible.** ShareDeal *is* group buying, yet the product
   detail page shows no group mechanics at all — no member count, no progress, no
   deadline, no group price. It looks like any regular grocery shop, so the value
   proposition never lands.
2. **No education step.** A visitor who doesn't already know what "group buy" means
   gets no explanation anywhere on the funnel.
3. **No social proof.** Zero testimonials, reviews, activity signals, or savings
   numbers. Group buying runs on trust and crowd behavior — this is the single
   cheapest conversion lever the site isn't using.
4. **No urgency.** Group deals have deadlines by nature, but nothing on the site
   communicates them.
5. **Weak cart→checkout bridge.** No savings summary, no free-delivery nudge, no
   cross-sell, so average order value and completion rate are left on the table.
6. **No post-purchase loop.** The order-complete moment (peak customer excitement)
   isn't used to fill more groups — which is literally the growth engine of the
   business model.

## 2. Funnel design, stage by stage

### Stage 1 — Land & understand (index.html)
- **Hero** answers *what/why/how much* in 3 seconds: "একসাথে কিনুন, বেশি বাঁচান" +
  count-up trust stats (families joined / saved this month / max discount).
- **Live group card** in the hero shows the hottest almost-full deal with a real
  countdown and progress bar — the product *is* the pitch.
- **Social-proof ticker** (marquee): "Rahima from Banasree joined the Pulao Rice
  group — saved ৳61". Constant ambient activity = the platform feels alive.
- **How-it-works** — 3 illustrated steps, placed *before* the deals so first-time
  visitors are educated before they're sold to.
- **Delivery-cutoff countdown** in the announcement bar ("order within 04:12:33 for
  same-day delivery") — recurring urgency that resets daily.

### Stage 2 — Desire (deal cards + product page)
- Deal cards show **solo price vs group price side by side** — the discount is
  framed as a loss to avoid, not a coupon.
- **Member progress bar with avatars** (7/10 joined) + **"only 1 spot left"** pulse
  when a group is nearly full + per-deal **countdown timer**.
- Product page: **buy-mode selector** (solo vs group as two tappable price cards,
  group pre-selected with the savings badge), group status, and a **"share to fill
  your group faster" nudge** with one-tap link copy.
- Trust row (quality guarantee / COD / easy returns) directly under the CTA.
- **Sticky bottom CTA bar on mobile** — price + join button always reachable.

### Stage 3 — Cart (cart.html)
- **Free-delivery progress bar** ("add ৳150 more for free delivery") — the
  highest-ROI AOV lever in grocery e-commerce.
- **"You're saving ৳X"** highlighted line — reinforces the win before checkout.
- **Cross-sell rail** of cheap add-ons (one-tap add) sized to push carts over the
  free-delivery threshold.
- Promo code (`SAVE50` works in the prototype). Empty state routes back to deals.

### Stage 4 — Checkout (checkout.html)
- **Single page, 4 visible steps** — no multi-page wizard, no forced account.
- Phone-first contact (11-digit BD validation), area dropdown limited to actual
  coverage areas, delivery-slot picker (past slots auto-disabled).
- **COD pre-selected** (dominant BD payment), bKash/Nagad/card as alternatives with
  brand-colored icons.
- Sticky order summary repeats items, savings, and total next to the pay button.
- Trust microcopy at the decision point: "🔒 SSL protected · quality guaranteed".
- Customer details persist in localStorage → **repeat checkout is pre-filled**.

### Stage 5 — Success = growth loop (success.html)
- Confetti + animated checkmark (peak-moment delight).
- Order timeline (confirmed → packing → on the way → delivered).
- **Referral block: "bring members to your group, you both get ৳50"** with
  WhatsApp / Facebook / copy-link buttons — turns every completed order into
  group-fill marketing. This is the most important screen for a group-buying
  business and the current site doesn't have it.

## 3. Micro-animation inventory (css/main.css + js/app.js)

| Animation | Where | Purpose |
|---|---|---|
| Scroll-reveal fade-up with stagger | all sections | progressive disclosure, perceived polish |
| Fly-to-cart dot + badge pop | every add button | instant feedback, draws eye to cart |
| Add-button → quantity-stepper morph | product cards | removes a click, mirrors the live site's pattern but animated |
| Group progress bars animate on reveal + shimmer | deals | "filling up" feels live |
| Countdown timers (deal + delivery cutoff) | topbar, deals, product | urgency |
| "Only N left" pulse | nearly-full groups | scarcity |
| Count-up stats | hero | credibility |
| Social-proof marquee (pauses on hover) | below hero | ambient activity |
| Card hover lift + image zoom | all cards | affordance |
| Button sheen sweep + spring press | primary CTAs | tactile feel |
| Sticky header shrink + shadow | all pages | space efficiency |
| Skeleton shimmer on images | product grids | no layout jank |
| Toast notifications | cart actions | non-blocking confirmation |
| Cart line slide-out on remove | cart | clear cause/effect |
| FAQ accordion with rotating + icon | home | scannable objection handling |
| Checkmark draw-on + confetti + pulsing timeline ring | success | peak-moment delight |
| `prefers-reduced-motion` respected | global | accessibility |

## 4. Functionality improvements over the live site

- **Working bilingual toggle (BN/EN)** — full dictionary in `js/app.js`, persisted.
- **Real cart state machine** (localStorage) shared across all pages, with
  solo/group price modes per line item.
- **Live search** filtering the product grid as you type.
- **Category chips** filter without page reloads.
- **Client-side validation** with inline errors + scroll-to-first-error.
- **Free-delivery math** (৳500 threshold / ৳30 fee) computed everywhere consistently.
- Lazy-loaded images, no CLS; whole prototype is 7 files, no framework.

## 5. Porting notes for the production site (Laravel + Bootstrap 5)

1. Highest-impact, lowest-effort first: **group module on the product page**
   (solo/group price cards + progress + countdown), **savings line + free-delivery
   bar in the cart**, and the **post-order referral share block**.
2. The design tokens at the top of `css/main.css` (`:root` block) can layer on top
   of Bootstrap — the palette is derived from the existing brand green.
3. `data-i18n` keys in `js/app.js` map 1:1 to Laravel `lang/bn` + `lang/en` files.
4. Progress/joined counts should come from the real group tables; keep the animated
   width transition (`.gbar > i`) — it's one CSS rule.
5. GTM events worth adding while porting: `join_group`, `add_to_cart` (mode),
   `begin_checkout`, `purchase`, `referral_share` — the funnel above is designed
   around those measurement points.
