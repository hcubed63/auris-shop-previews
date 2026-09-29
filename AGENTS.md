# Auris shop previews — Florida auto shops

Static preview sites for independent auto and tire shops. Each page is one self-contained `index.html`. There is no build step, framework, or backend.

Live site: [https://auris-shop-previews.pages.dev](https://auris-shop-previews.pages.dev) (Cloudflare Pages).

Call scripts (shop-specific): `CALL-SCRIPTS.md`.

## Status

27 shops are live: 6 in Brandon, 8 in Plant City, 3 in Riverview, 1 in Valrico, 1 in Seffner, 1 in Ruskin, 3 in Gibsonton, 4 in Lakeland.

Call progress (Hans, 29 Sep 2026):
- Weaver's Tire — Mark — **not interested**. Do not call again.

Do not email shops. Calls only, and only when Hans asks. Do not mark a shop contacted unless he says the call happened.

## Research rule — do not miss this again

Scout / any research pass **must** check more than the Google Maps website button.

Before writing `None found`, `no website`, or the call hook “you don’t have a website”:

1. Open the Google Maps listing and record what the website button actually does (none / Add website / Facebook / dead domain / directory).
2. Search Facebook for **exact shop name + city**. Save the URL even if Maps does not use it.
3. Search Instagram and TikTok for the shop or owner.
4. Hit any historic domain (Wayback / DNS). Record dead domains as dead, not as “no web presence.”
5. Grab emails off signs, cards, and Google.

A Facebook, Instagram, or TikTok page is **not** “no online presence.” Put it in `shops.csv` `current_website` or `notes`.

**Never** tell an owner they have no website if they have Facebook. Say: Maps has no site / the old address doesn’t load / we drafted a page.

Known misses caught 29 Sep 2026 (must stay in the sheet):
- Bennett's Auto Care — facebook.com/BennettsAutoCare (~357 followers). Domain dead. Maps says Add website.
- Hometown Tire Plant City — facebook.com/p/Hometown-Tire-Auto-Repair-100090711014930/ — email Hometownplantcity@gmail.com — owner Brandon Prince.
- Mozalez — TikTok @morales_automotive. Domain dead.
- JPE — card already said Like us on Facebook; page not confirmed.
- Automotive Edge — Birdeye hours exist (Mon–Fri 8–5, Sat 9–12); Scout had “hours not found.”

Do not say “404” on a call. Say the old address doesn’t load.

## Pricing

Stripe is the price of record.

| Plan | Checkout | What the customer pays |
| --- | --- | --- |
| Monthly | https://buy.stripe.com/8x2aEYc7n6501pi5uz7N60h | $148 first charge, then $49 each month |
| Yearly | https://buy.stripe.com/dRmaEYefv8d82tm9KP7N60i | $510 |

The $148 first charge is $99 setup plus the first $49 month. The $510 year is $99 setup plus $411 hosting (30% off $49 × 12).

Overlay copy on the HTML still says “$99 setup / $49 mo” and “Pay the year — $411 hosting (30% off)”. That is the component breakdown, not a different offer. Do not change Stripe links or invent a third price. If you edit the overlay, keep it consistent with the table above.

## Do not invent reviews

Quotes, reviewer names, and dates on a page must already exist in that page or in `shops.csv`. If a real review cannot be sourced, ship fewer reviews or leave the gap. Never write a placeholder quote, a composite, or a “sounds like a local” line.

`shops.csv` `notes` records where each review came from. Read that before changing a reviews section.

## Repo

```
index.html          Root is Weaver's Tire & Automotive (same preview as the shop path)
shops.csv           Shop list: slug, contact, hours, site status, review sources
CALL-SCRIPTS.md     Live call scripts — one per shop
shops/brandon/      6 pages
shops/plant-city/   8 pages
shops/riverview/    3 pages
shops/valrico/      1 page
shops/seffner/      1 page
shops/ruskin/       1 page
shops/gibsonton/    3 pages
shops/lakeland/     4 pages
```

Each shop folder is `shops/{city}/{slug}/index.html`. Public URL: `https://auris-shop-previews.pages.dev/shops/{city}/{slug}/`.

Addresses, hours, and source notes live in `shops.csv`. Prefer that file over memory when they disagree with a page. Prefer `CALL-SCRIPTS.md` for what Hans says on the phone.

## Editing rules

- Keep each shop as one HTML file with inlined CSS. Match the existing page (hero, services, reviews, visit, Auris footer, claim overlay).
- Phone buttons use `tel:` links already on the page. Do not add email links or contact forms.
- Claim overlay stays on every preview: monthly Stripe link on “Claim this site”, yearly Stripe link on the year option.
- Unsplash (or another licensed photo) only. Do not hotlink a shop’s Google photos.
- If hours or an address are unverified, keep the page’s “call ahead” wording. Do not fill gaps from guesswork.
- Deploy is Cloudflare Pages from this repo. Do not publish a shop Hans has not already approved as a preview.
