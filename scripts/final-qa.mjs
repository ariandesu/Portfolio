import { chromium } from 'playwright-core';
import fs from 'node:fs';

const out = '/private/var/folders/rp/m4y0wkl110j7qhd5k36m0w3m0000gn/T/opencode/final-qa';
fs.mkdirSync(out, { recursive: true });
const base = 'http://localhost:3000';
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });

const issues = [];
const requestFailures = [];
async function newPage(viewport, reducedMotion = 'reduce') {
  const context = await browser.newContext({ viewport, reducedMotion });
  const page = await context.newPage();
  page.on('console', (msg) => { if (msg.type() === 'error') issues.push({ type: 'console', viewport, text: msg.text() }); });
  page.on('pageerror', (err) => issues.push({ type: 'pageerror', viewport, text: err.message }));
  page.on('requestfailed', (req) => { if (!req.url().includes('favicon')) requestFailures.push({ viewport, url: req.url(), error: req.failure()?.errorText }); });
  page.on('response', (res) => { if (res.status() >= 400 && !res.url().includes('favicon')) issues.push({ type: 'http', viewport, status: res.status(), url: res.url() }); });
  return { context, page };
}

const overflow = [];
for (const viewport of [{ width: 320, height: 800 }, { width: 390, height: 844 }, { width: 768, height: 900 }, { width: 1024, height: 900 }, { width: 1440, height: 960 }]) {
  const { context, page } = await newPage(viewport);
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => document.querySelectorAll('img').forEach((img) => { img.loading = 'eager'; }));
  await page.waitForTimeout(700);
  const data = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
    height: document.documentElement.scrollHeight,
  }));
  overflow.push({ ...viewport, ...data });
  if (data.scrollWidth > data.innerWidth + 1) issues.push({ type: 'overflow', viewport, ...data });
  if (viewport.width === 390) {
    await page.locator('#home').screenshot({ path: `${out}/hero-390.png` });
    await page.locator('#about').scrollIntoViewIfNeeded();
    await page.waitForTimeout(250);
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${out}/contact-390-viewport.png` });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(250);
    await page.locator('button[aria-label="Open menu"]').click();
    await page.waitForTimeout(250);
    await page.screenshot({ path: `${out}/menu-390.png` });
  }
  if (viewport.width === 320) {
    await page.locator('button[aria-label="Open menu"]').click();
    await page.waitForTimeout(250);
    const menuBox = await page.locator('div.mobile-menu').boundingBox();
    if (!menuBox) issues.push({ type: 'menu-missing', viewport });
  }
  await context.close();
}

// Desktop home, eager assets, full-page screenshot and DOM checks.
{
  const { context, page } = await newPage({ width: 1440, height: 960 });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => document.querySelectorAll('img').forEach((img) => { img.loading = 'eager'; }));
  await page.waitForTimeout(900);
  const dom = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelector('h1')?.textContent?.trim(),
    sections: [...document.querySelectorAll('main > section')].map((s) => s.id),
    projectCards: document.querySelectorAll('.project-card').length,
    projectLinks: [...document.querySelectorAll('.project-card a')].map((a) => a.getAttribute('href')),
    images: [...document.images].map((img) => ({ src: img.currentSrc, alt: img.alt, ok: img.complete && img.naturalWidth > 0, w: img.naturalWidth, h: img.naturalHeight })),
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    og: document.querySelector('meta[property="og:image"]')?.getAttribute('content'),
    emailLinks: [...document.querySelectorAll('a[href^="mailto:"]')].map((a) => a.getAttribute('href')),
    telLinks: [...document.querySelectorAll('a[href^="tel:"]')].map((a) => a.getAttribute('href')),
    whatsapp: document.body.innerText.toLowerCase().includes('whatsapp'),
  }));
  console.log('DOM', JSON.stringify(dom, null, 2));
  for (const img of dom.images) if (!img.ok) issues.push({ type: 'image', src: img.src, alt: img.alt });
  if (dom.projectCards !== 3) issues.push({ type: 'project-count', count: dom.projectCards });
  if (!dom.sections.join(',').includes('about,skills,education,projects,experiments,contact')) issues.push({ type: 'sections', sections: dom.sections });
  if (dom.whatsapp) issues.push({ type: 'whatsapp' });
  await page.screenshot({ path: `${out}/home-1440.png`, fullPage: true });

  // Check internal routes and public files.
  for (const path of ['/', '/projects/shareflow', '/projects/star-plus', '/projects/bazardor', '/resume', '/sitemap.xml', '/robots.txt', '/og.png', '/Mahir-Faisal-Resume.pdf', '/this-page-does-not-exist']) {
    const res = await page.request.get(base + path);
    const expected = path === '/this-page-does-not-exist' ? 404 : 200;
    if (res.status() !== expected) issues.push({ type: 'route', path, status: res.status(), expected });
    if (path === '/Mahir-Faisal-Resume.pdf') {
      const ct = res.headers()['content-type'];
      if (!ct?.includes('pdf')) issues.push({ type: 'pdf-content-type', ct });
    }
  }
  await context.close();
}

// Project detail page.
{
  const { context, page } = await newPage({ width: 1440, height: 960 });
  await page.goto(base + '/projects/shareflow', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => document.querySelectorAll('img').forEach((img) => { img.loading = 'eager'; }));
  await page.waitForTimeout(700);
  const data = await page.evaluate(() => ({
    h1: document.querySelector('h1')?.textContent?.trim(),
    headings: [...document.querySelectorAll('h2')].map((h) => h.textContent?.trim()),
    live: [...document.querySelectorAll('a')].filter((a) => a.textContent?.includes('Live')).map((a) => a.getAttribute('href')),
    github: [...document.querySelectorAll('a')].filter((a) => a.textContent?.includes('GitHub')).map((a) => a.getAttribute('href')),
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
  }));
  console.log('PROJECT', JSON.stringify(data, null, 2));
  if (data.scrollWidth > data.innerWidth + 1) issues.push({ type: 'project-overflow', ...data });
  await page.screenshot({ path: `${out}/project-1440.png`, fullPage: true });
  await context.close();
}

// GhostCursor path (no reduced motion, pointer moves in contact).
{
  const { context, page } = await newPage({ width: 1440, height: 960 }, 'no-preference');
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.mouse.move(800, 500);
  await page.mouse.move(900, 550, { steps: 12 });
  await page.mouse.move(700, 600, { steps: 12 });
  await page.waitForTimeout(1200);
  const canvasCount = await page.locator('#contact canvas').count();
  console.log('GHOST_CANVAS', canvasCount);
  await page.screenshot({ path: `${out}/contact-ghost-1440.png` });
  if (canvasCount === 0) issues.push({ type: 'ghost-cursor-missing' });
  await context.close();
}

console.log('OVERFLOW', JSON.stringify(overflow, null, 2));
console.log('FAILED_REQUESTS', JSON.stringify(requestFailures, null, 2));
console.log('ISSUES', JSON.stringify(issues, null, 2));
fs.writeFileSync(`${out}/report.json`, JSON.stringify({ overflow, requestFailures, issues }, null, 2));
await browser.close();
