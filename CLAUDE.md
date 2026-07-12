# CLAUDE.md — ShareDeal Redesign

Redesign concept for the **live production site sharedealnow.com** (ShareDeal — group-buying grocery, Dhaka). This repo is a zero-build prototype and a porting reference; the production site (Laravel + Bootstrap 5 + GTM) lives elsewhere and is NOT in this repo.

- **Live:** https://arafatomer66.github.io/sharedeal-redesign/ (GitHub Pages, main branch root — every push redeploys in ~1 min)
- **Run locally:** `python3 -m http.server 8742` → http://localhost:8742
- **No build step, no dependencies.** Vanilla HTML/CSS/JS only — keep it that way.

## Structure

```
index.html            home: hero + live group card, ticker, how-it-works, deal rail, shop, blog teaser, FAQ
product.html?id=N     solo-vs-group buy modes, group progress, sticky mobile CTA
cart.html             free-delivery bar, savings row, cross-sell rail, promo SAVE50
checkout.html         single page, 4 steps, COD default, sticky mobile pay bar
success.html          confetti + timeline + referral share loop
profile.html?tab=     info | orders | groups | notif (live-site /profile parity + lifetime savings)
blog.html, post.html?slug=   6 bilingual posts from BLOG array
partner.html          seller offer form ("আমাদের পার্টনার হোন" parity)
css/main.css          entire design system (~1400 lines, token block at top)
js/data.js            PRODUCTS (64, scraped from live site), DEALS, BLOG, AREAS, FAQS…
js/app.js             i18n dict + cart store + renderers + wizard + animations
tools/build_artifact.py      builds single-file demo (all pages + internal router, images → data URIs)
REDESIGN.md           UX audit of live site + funnel rationale + porting notes
```

## Key conventions

- **Bilingual:** BN default, EN via header toggle (`localStorage sd_lang`, page reloads). Static text uses `data-i18n` keys; JS-rendered strings use `t('key')`. Every new string needs BOTH `bn:` and `en:` entries in `I18N` (app.js top).
- **State is localStorage:** `sd_cart` (items `{id, mode: 'solo'|'group', qty}`), `sd_user` (phone after OTP), `sd_customer`, `sd_orders`, `sd_last_order`, `sd_notif`, `sd_partner_subs`. No backend — OTP accepts any 4 digits (demo).
- **Group-join wizard** (`openGroupWizard()` in app.js) — the core funnel. Product-owner rules, do not change without asking:
  - JOIN existing group = allowed on web → OTP verify → "spot reserved" screen shows **share buttons + app download only, NO order button**
  - CREATE new group = **app-only** → app-gate step with Play Store CTA
  - If the user's join fills the group → celebration screen (confetti, savings, "track in app")
- Header/footer are rendered by `renderHeader()/renderFooter()` in app.js — edit there, not per page.
- Deal rails auto-slide via `initAutoRail()` (pauses on hover/touch, reduced-motion aware).

## Gotchas (hard-won)

1. **Never use padding shorthand `padding: X 0` on elements that also carry `.wrap`** (`.hero-in`, `.header-in`, `.footer-in`…) — it kills `.wrap`'s side padding. Use `padding-top/bottom`.
2. **Verify in headless Firefox too**, not just Chrome — Bengali glyph widths differ and have exposed overflow bugs Chrome hid:
   `firefox -headless -no-remote -profile /tmp/ffp -screenshot out.png <url> -window-size=393,H` (single-dash args).
3. Headless Chrome `--window-size=390` screenshots are unreliable — wrap the page in a 390px iframe on a wider canvas instead.
4. Horizontal rails need `overflow-y: hidden` or card hover-lift creates a vertical scrollbar.
5. Mobile is 99% of the audience — test at 390px before calling anything done. `body { overflow-x: clip }` guards against stray overflow.

## Claude artifact (single-file shareable demo)

https://claude.ai/code/artifact/ad2e8d17-9db4-4b15-93aa-5502c19c9c4e
Rebuild after changes: `python3 tools/build_artifact.py` → outputs `sharedeal-demo.html` to the session scratchpad (adjust `SC` path in the script). Output must start with `<meta charset="UTF-8">`. Republish via the Artifact tool with the same file path (same conversation) or pass the artifact `url` (new conversation) to keep the URL. Artifacts block all external requests — that's why images are baked in as data URIs.

## Next steps (agreed direction)

Port into production Laravel/Bootstrap site, highest impact first: ① product-page group module (solo/group price cards + progress + countdown), ② cart savings + free-delivery bar, ③ group-join wizard, ④ post-order referral block. Add GTM events: `wizard_educate/share/join`, `app_install_click`, `begin_checkout`, `purchase`.
