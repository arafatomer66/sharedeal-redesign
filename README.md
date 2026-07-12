# ShareDeal Redesign

A full-funnel redesign concept for [sharedealnow.com](https://sharedealnow.com) — Bangladesh's group-buying grocery platform. Zero-build HTML/CSS/JS, real products and prices from the live site.

**Live demo:** https://arafatomer66.github.io/sharedeal-redesign/

## What's inside

| Page | Highlights |
|---|---|
| `index.html` | Hero with live group card, social-proof ticker, auto-sliding group deals with member progress + countdowns, blog teaser |
| `product.html` | Solo-vs-group price selector, group progress, share-to-fill nudge, sticky mobile CTA |
| `cart.html` | Free-delivery progress bar, savings summary, cross-sell rail, promo (`SAVE50`) |
| `checkout.html` | Single-page, phone-first, COD/bKash/Nagad/card, sticky mobile pay bar |
| `success.html` | Confetti, order timeline, referral share loop |
| `profile.html` | Orders, groups, notifications, lifetime savings |
| `blog.html` / `post.html` | 6 bilingual posts, category filter, deals CTA |
| `partner.html` | Seller product-offer form with live discount badge |

Plus a 4-step **group-join wizard** (animated "what is group buy" explainer → invite/share → phone OTP → app hand-off) on every join button. Bengali/English toggle throughout; cart and identity simulated in `localStorage`.

## Run locally

```bash
python3 -m http.server 8742
# → http://localhost:8742
```

See `REDESIGN.md` for the full UX audit and porting notes for the production site.

> Prototype only — no backend; orders, OTP and groups are simulated.
