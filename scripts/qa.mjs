import { chromium } from 'playwright-core';
import fs from 'node:fs';

const out = '/private/var/folders/rp/m4y0wkl110j7qhd5k36m0w3m0000gn/T/opencode/qa';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});

const errors = [];
async function makePage(viewport, name) {
  const context = await browser.newContext({ viewport, reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`${name}: console: ${msg.text()}`);
  });
  page.on('pageerror', (err) => errors.push(`${name}: pageerror: ${err.message}`));
  page.on('requestfailed', (req) => {
    if (!req.url().includes('favicon')) errors.push(`${name}: requestfailed: ${req.url()} ${req.failure()?.errorText}`);
  });
  return { context, page };
}

const desktop = await makePage({ width: 1440, height: 960 }, 'desktop');
await desktop.page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await desktop.page.evaluate(() => document.fonts.ready);
await desktop.page.waitForTimeout(1200);
const desktopMetrics = await desktop.page.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  innerWidth: window.innerWidth,
  height: document.documentElement.scrollHeight,
  title: document.title,
  h1: document.querySelector('h1')?.textContent?.trim(),
  sections: [...document.querySelectorAll('main > section')].map((s) => s.id),
  projectCards: document.querySelectorAll('.project-card').length,
  images: [...document.images].map((img) => ({ src: img.currentSrc, ok: img.complete && img.naturalWidth > 0, w: img.naturalWidth })),
}));
await desktop.page.screenshot({ path: `${out}/home-desktop.png`, fullPage: true });

const project = await makePage({ width: 1440, height: 960 }, 'project');
await project.page.goto('http://localhost:3000/projects/shareflow', { waitUntil: 'networkidle' });
await project.page.evaluate(() => document.fonts.ready);
await project.page.waitForTimeout(700);
const projectMetrics = await project.page.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  innerWidth: window.innerWidth,
  height: document.documentElement.scrollHeight,
  h1: document.querySelector('h1')?.textContent?.trim(),
  sections: [...document.querySelectorAll('article section')].map((s) => s.querySelector('h2')?.textContent?.trim() || s.querySelector('.eyebrow')?.textContent?.trim()),
}));
await project.page.screenshot({ path: `${out}/project-desktop.png`, fullPage: true });

const mobile = await makePage({ width: 390, height: 844 }, 'mobile');
await mobile.page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await mobile.page.evaluate(() => document.fonts.ready);
await mobile.page.waitForTimeout(900);
const mobileMetrics = await mobile.page.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  innerWidth: window.innerWidth,
  height: document.documentElement.scrollHeight,
}));
await mobile.page.screenshot({ path: `${out}/home-mobile.png`, fullPage: true });
await mobile.page.locator('button[aria-label="Open menu"]').click();
await mobile.page.waitForTimeout(300);
await mobile.page.screenshot({ path: `${out}/menu-mobile.png` });

const resume = await makePage({ width: 1100, height: 1000 }, 'resume');
await resume.page.goto('http://localhost:3000/resume', { waitUntil: 'networkidle' });
await resume.page.evaluate(() => document.fonts.ready);
await resume.page.waitForTimeout(500);
await resume.page.screenshot({ path: `${out}/resume-desktop.png`, fullPage: true });

console.log(JSON.stringify({ desktopMetrics, projectMetrics, mobileMetrics, errors }, null, 2));
await browser.close();
