import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import path from 'node:path';

const dir = path.resolve(process.argv[2] ?? '.');
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });

// 1. personal card: long PNG @2x
{
  const page = await browser.newPage({ viewport: { width: 1080, height: 1200 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(dir, 'anna-card.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(dir, 'anna-card.png'), fullPage: true });
  console.log('card height', await page.evaluate(() => document.body.scrollHeight));
  await page.close();
}

// 2. Andlight one-pager: A4 PDF + PNG preview
{
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(dir, 'andlight-onepager.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: path.join(dir, 'andlight-onepager.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true });
  await page.screenshot({ path: path.join(dir, 'andlight-onepager.png'), fullPage: true });
  console.log('onepager height', await page.evaluate(() => document.body.scrollHeight));
  await page.close();
}
await browser.close();
