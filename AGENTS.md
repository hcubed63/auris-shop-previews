# Auris shop previews — Florida auto shops

Static preview sites for independent auto and tire shops. Each page is one self-contained `index.html`. There is no build step, framework, or backend.

Live site: [https://auris-shop-previews.pages.dev](https://auris-shop-previews.pages.dev) (Cloudflare Pages).

## Status

19 shops are live: 6 in Brandon, 8 in Plant City, 3 in Riverview, 1 in Valrico, 1 in Seffner. **Nobody has been contacted.**

Monday call order:

1. Weaver's Tire & Automotive (Brandon)
2. Bennett's Auto Care by Scotty (Brandon)

Do not email shops. Calls only, and only when Hans asks. Do not mark a shop contacted unless he says the call happened.

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
shops/brandon/      6 pages
shops/plant-city/   8 pages
shops/riverview/    3 pages
shops/valrico/      1 page
shops/seffner/      1 page
```

Each shop folder is `shops/{city}/{slug}/index.html`. Public URL: `https://auris-shop-previews.pages.dev/shops/{city}/{slug}/`.

### Brandon

| Slug | Shop | Phone |
| --- | --- | --- |
| `weavers-tire-automotive` | Weaver's Tire & Automotive | (813) 685-2906 |
| `bennetts` | Bennett's Auto Care by Scotty | (813) 571-1520 |
| `automotive-edge` | Automotive Edge | (813) 506-2812 |
| `haynes-engine-works` | Haynes Engine Works | (813) 502-5920 |
| `rb-auto-connection` | RB Auto Connection | (813) 381-4044 |
| `acevedo-euro-import` | Acevedo Euro Import | (813) 787-5905 |

### Plant City

| Slug | Shop | Phone |
| --- | --- | --- |
| `el-toro-tire` | El Toro Tire & Service | (813) 441-4648 |
| `jpe-auto` | JPE Auto Repairs Inc. & Tire Service | (813) 652-8282 |
| `mozalez` | Mozalez Auto Repair | (813) 520-0635 |
| `tire-shop-of-plant-city` | The Tire Shop of Plant City | (813) 752-2532 |
| `aviles-tires` | Aviles Tires | (813) 946-2792 |
| `automax` | Automax Services | (813) 441-4477 |
| `92-tires` | 92 Tires | (813) 752-4600 |
| `hometown-tire` | Hometown Tire & Auto Repair | (813) 652-8093 |

### Riverview

| Slug | Shop | Phone |
| --- | --- | --- |
| `boyds` | Boyd's Auto Center | (813) 677-1865 |
| `sonnys-tire` | Sonny's Tire & Automotive | (813) 626-4556 |
| `caribbean-auto` | Caribbean Auto Service & Tire Shop | (813) 647-6409 |

### Valrico

| Slug | Shop | Phone |
| --- | --- | --- |
| `dk-european` | DK European Services & Repairs | (813) 802-1695 |

### Seffner

| Slug | Shop | Phone |
| --- | --- | --- |
| `brandon-auto-tech` | Brandon Auto Tech (named Brandon, located in Seffner) | (813) 689-5950 |

Addresses, hours, and source notes live in `shops.csv`. Prefer that file over memory when they disagree with a page.

## Editing rules

- Keep each shop as one HTML file with inlined CSS. Match the existing page (hero, services, reviews, visit, Auris footer, claim overlay).
- Phone buttons use `tel:` links already on the page. Do not add email links or contact forms.
- Claim overlay stays on every preview: monthly Stripe link on “Claim this site”, yearly Stripe link on the year option.
- Unsplash (or another licensed photo) only. Do not hotlink a shop’s Google photos.
- If hours or an address are unverified, keep the page’s “call ahead” wording. Do not fill gaps from guesswork.
- Deploy is Cloudflare Pages from this repo. Do not publish a shop Hans has not already approved as a preview.
