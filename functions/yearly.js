// GET /yearly?shop=<slug> -> Stripe Checkout (subscription): $99 one-time setup + $588/yr hosting,
// with a 40%-off first-year coupon that applies only to the yearly hosting product. First charge $452.
const YEARLY_PRICE = 'price_1UUi5jKrK4e65vuZpX9xt5yF'; // $588/yr, prod_VVjYeT43WguuNl
const SETUP_PRICE = 'price_1UUi5jKrK4e65vuZxksUzdBe';  // $99 one-time, prod_VVjYNNf6nZJD91
const COUPON = 'R62AnHHk';                              // 40% off, once, applies_to yearly product

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const origin = url.origin;
  const shop = (url.searchParams.get('shop') || '').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 80);
  let back = origin + '/';
  const ref = request.headers.get('Referer');
  if (ref) { try { const r = new URL(ref); if (r.origin === origin) back = r.origin + r.pathname; } catch (_) {} }

  const p = new URLSearchParams();
  p.set('mode', 'subscription');
  p.set('line_items[0][price]', SETUP_PRICE);
  p.set('line_items[0][quantity]', '1');
  p.set('line_items[1][price]', YEARLY_PRICE);
  p.set('line_items[1][quantity]', '1');
  p.set('discounts[0][coupon]', COUPON);
  p.set('success_url', back + (back.includes('?') ? '&' : '?') + 'claimed=1');
  p.set('cancel_url', back);
  if (shop) { p.set('metadata[shop]', shop); p.set('subscription_data[metadata][shop]', shop); }

  const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + env.STRIPE_SECRET_KEY, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: p,
  });
  const data = await res.json();
  if (!res.ok || !data.url) {
    return new Response('Sorry, checkout is unavailable right now. Please try again shortly.', { status: 502, headers: { 'Cache-Control': 'no-store' } });
  }
  return new Response(null, { status: 303, headers: { Location: data.url, 'Cache-Control': 'no-store' } });
}
