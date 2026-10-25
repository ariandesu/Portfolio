import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const data = await page.evaluate(() => {
  const pick = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    return { text: el.textContent?.slice(0, 40), fontFamily: cs.fontFamily, fontWeight: cs.fontWeight, fontStyle: cs.fontStyle, fontSize: cs.fontSize };
  };
  return {
    h1: pick('h1'),
    logo: pick('header a span.font-serif'),
    quote: pick('blockquote'),
    sectionH2: pick('#about h2'),
    cssFontSerif: getComputedStyle(document.documentElement).getPropertyValue('--font-serif'),
    cssFontSans: getComputedStyle(document.documentElement).getPropertyValue('--font-sans'),
    displayFont: getComputedStyle(document.querySelector('h1')).fontFamily,
  };
});
console.log(data);
await browser.close();
