import { chromium } from 'playwright-core';
import fs from 'node:fs';

const out = '/private/var/folders/rp/m4y0wkl110j7qhd5k36m0w3m0000gn/T/opencode/qa2';
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 960 }, reducedMotion: 'reduce' });
const page = await context.newPage();
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => document.querySelectorAll('img').forEach((img) => { img.loading = 'eager'; }));
await page.waitForTimeout(2500);
const imageState = await page.evaluate(() => [...document.images].map((img) => ({ src: img.currentSrc, alt: img.alt, ok: img.complete && img.naturalWidth > 0, w: img.naturalWidth, h: img.naturalHeight })));
console.log(JSON.stringify(imageState, null, 2));

for (const id of ['home', 'about', 'skills', 'education', 'projects', 'experiments', 'contact']) {
  const el = page.locator(`#${id}`);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await el.screenshot({ path: `${out}/${id}.png` });
}
await page.screenshot({ path: `${out}/home-full-loaded.png`, fullPage: true });

const project = await context.newPage();
await project.goto('http://localhost:3000/projects/shareflow', { waitUntil: 'networkidle' });
await project.evaluate(() => document.fonts.ready);
await project.evaluate(() => document.querySelectorAll('img').forEach((img) => { img.loading = 'eager'; }));
await project.waitForTimeout(1500);
await project.screenshot({ path: `${out}/project-full.png`, fullPage: true });
await project.locator('article').screenshot({ path: `${out}/project-article.png` });

const mobile = await context.newPage();
await mobile.setViewportSize({ width: 390, height: 844 });
await mobile.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await mobile.evaluate(() => document.fonts.ready);
await mobile.evaluate(() => document.querySelectorAll('img').forEach((img) => { img.loading = 'eager'; }));
await mobile.waitForTimeout(1800);
await mobile.locator('#home').screenshot({ path: `${out}/mobile-hero.png` });
await mobile.locator('#projects').scrollIntoViewIfNeeded();
await mobile.waitForTimeout(800);
await mobile.locator('#projects').screenshot({ path: `${out}/mobile-projects.png` });
await mobile.locator('#contact').scrollIntoViewIfNeeded();
await mobile.waitForTimeout(500);
await mobile.locator('#contact').screenshot({ path: `${out}/mobile-contact.png` });
await browser.close();
