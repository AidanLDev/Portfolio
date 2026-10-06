/**
 * Generates the site's social preview images, app icons and link-page logo tiles
 * by screenshotting small HTML templates with Playwright.
 *
 * Usage: node scripts/generate-images.mjs
 * Set CHROMIUM_PATH to use a specific Chromium binary instead of Playwright's bundled one.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const pub = (...p) => path.join(root, 'public', ...p)

const COLOURS = {
  primary: '#faebd7',
  secondary: '#d5262e',
  background: '#010b11',
}

const dataUrl = async (file, mime) =>
  `data:${mime};base64,${(await readFile(file)).toString('base64')}`

const coolvetica = await dataUrl(pub('fonts', 'CoolveticaRg-Regular.woff2'), 'font/woff2')
const aidanAvatar = await dataUrl(
  pub('images', 'BromoSoloRoundSmallerCompressed.webp'),
  'image/webp',
)
const arniAvatar = await dataUrl(pub('images', 'arni-avatar.webp'), 'image/webp')

const baseCss = `
  @font-face { font-family: Coolvetica; src: url(${coolvetica}) format('woff2'); }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: transparent; }
  body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
`

// --- Social preview (Open Graph / Twitter) images: 1200x630 --------------------------------------

const ogTemplate = ({ avatar, eyebrow, name, highlight, tagline, footer }) => `
<style>
  ${baseCss}
  .card {
    width: 1200px; height: 630px; position: relative; overflow: hidden;
    background:
      radial-gradient(circle at 85% 15%, rgba(213, 38, 46, 0.35), transparent 45%),
      radial-gradient(circle at 10% 90%, rgba(250, 235, 215, 0.08), transparent 40%),
      ${COLOURS.background};
    color: ${COLOURS.primary};
    display: flex; align-items: center; gap: 72px; padding: 0 96px;
  }
  .avatar {
    width: 300px; height: 300px; border-radius: 50%; flex-shrink: 0; object-fit: cover;
    border: 8px solid ${COLOURS.primary}; box-shadow: 0 0 0 10px ${COLOURS.secondary};
  }
  .eyebrow { font-size: 30px; letter-spacing: 4px; text-transform: uppercase; opacity: 0.75; }
  h1 { font-family: Coolvetica, sans-serif; font-weight: 400; font-size: 104px; line-height: 1; margin: 16px 0 24px; }
  h1 span { color: ${COLOURS.secondary}; }
  .tagline { font-size: 34px; line-height: 1.35; max-width: 640px; }
  .footer {
    position: absolute; left: 96px; right: 96px; bottom: 40px; font-size: 26px; opacity: 0.7;
    display: flex; justify-content: space-between;
  }
  .bar { position: absolute; left: 0; top: 0; width: 100%; height: 12px; background: ${COLOURS.secondary}; }
</style>
<div class="card">
  <div class="bar"></div>
  <img class="avatar" src="${avatar}" />
  <div>
    <div class="eyebrow">${eyebrow}</div>
    <h1>${name} <span>${highlight}</span></h1>
    <div class="tagline">${tagline}</div>
  </div>
  <div class="footer"><span>aidanlowson.com</span><span>${footer}</span></div>
</div>`

const ogImages = [
  {
    file: pub('images', 'og', 'home.png'),
    html: ogTemplate({
      avatar: aidanAvatar,
      eyebrow: 'Full-Stack Software Engineer',
      name: 'Aidan',
      highlight: 'Lowson',
      tagline: 'Building with React, Next.js, TypeScript, Node.js and AWS since 2018.',
      footer: 'Oxfordshire, UK',
    }),
  },
  {
    file: pub('images', 'og', 'links-aidan.png'),
    html: ogTemplate({
      avatar: aidanAvatar,
      eyebrow: 'Links',
      name: 'Aidan',
      highlight: 'Lowson',
      tagline: 'Quick links to my profiles on GitHub, LinkedIn, YouTube, Instagram and more.',
      footer: '/links-aidan',
    }),
  },
  {
    file: pub('images', 'og', 'links-arni.png'),
    html: ogTemplate({
      avatar: arniAvatar,
      eyebrow: 'Links',
      name: 'Arni',
      highlight: 'Riani',
      tagline: 'Quick links to my website and profiles on Instagram, TikTok, LinkedIn and more.',
      footer: '/links-arni',
    }),
  },
]

// --- App icons ------------------------------------------------------------------------------------

const iconTemplate = (size) => `
<style>
  ${baseCss}
  .icon {
    width: ${size}px; height: ${size}px; background: ${COLOURS.primary}; color: ${COLOURS.secondary};
    display: flex; align-items: center; justify-content: center;
    font-family: Coolvetica, sans-serif; font-size: ${Math.round(size * 0.52)}px; line-height: 1;
    padding-top: ${Math.round(size * 0.04)}px;
  }
</style>
<div class="icon">AL</div>`

const icons = [
  { file: pub('apple-touch-icon.png'), size: 180 },
  { file: pub('icon-192.png'), size: 192 },
  { file: pub('icon-512.png'), size: 512 },
].map(({ file, size }) => ({ file, html: iconTemplate(size) }))

// --- Link page logo tiles (round, 320x320 webp) ---------------------------------------------------

const tileTemplate = ({ background, colour = '#fff', label, size = 52 }) => `
<style>
  ${baseCss}
  .tile {
    width: 320px; height: 320px; border-radius: 50%; background: ${background}; color: ${colour};
    display: flex; align-items: center; justify-content: center; text-align: center;
    padding: 0 36px 70px; font-weight: 700;
    box-shadow: inset 0 0 0 8px rgba(250, 235, 215, 0.35); font-size: ${size}px; line-height: 1.1;
  }
</style>
<div class="tile">${label}</div>`

const tiles = [
  {
    name: 'InstagramCircle',
    label: 'Instagram',
    background:
      'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285aeb 90%)',
  },
  { name: 'x_icon', label: 'X', background: '#000', size: 140 },
  {
    name: 'TikTokLogo',
    label: '<span style="text-shadow: -3px -3px 0 #25f4ee, 3px 3px 0 #fe2c55">TikTok</span>',
    background: '#010101',
  },
  { name: 'LinkedInLogoRound', label: 'LinkedIn', background: '#0a66c2' },
  { name: 'github-512', label: 'GitHub', background: '#24292f' },
  { name: 'ThradsLogoSmall', label: 'Threads', background: '#000' },
  { name: 'leetCodeIcon', label: 'LeetCode', background: '#ffa116', colour: '#1a1a1a' },
  {
    name: 'portfolioIcon',
    label: `<span style="font-family: Coolvetica; font-weight: 400; font-size: 120px">AL</span>`,
    background: COLOURS.primary,
    colour: COLOURS.secondary,
  },
  { name: 'blogIcon', label: 'Blog', background: COLOURS.secondary, size: 72 },
  { name: 'YTNoBackGround', label: 'YouTube', background: '#ff0000' },
  { name: 'websiteIcon', label: 'Website', background: '#2a9d8f' },
].map(({ name, ...tile }) => ({
  file: pub('images', 'Logos', `${name}.webp`),
  html: tileTemplate(tile),
  webp: true,
}))

// --- Render ---------------------------------------------------------------------------------------

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined })
const page = await browser.newPage()

for (const { file, html, webp } of [...ogImages, ...icons, ...tiles]) {
  await page.setContent(html)
  await page.evaluate(() => document.fonts.ready)
  const png = await page.locator('body > div').screenshot({ omitBackground: true })
  let output = png
  if (webp) {
    // Let Chromium's canvas encoder convert the PNG to WebP, so no extra image library is needed
    const base64 = await page.evaluate(
      async (src) => {
        const img = new Image()
        img.src = src
        await img.decode()
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        canvas.getContext('2d').drawImage(img, 0, 0)
        return canvas.toDataURL('image/webp', 0.9).split(',')[1]
      },
      `data:image/png;base64,${png.toString('base64')}`,
    )
    output = Buffer.from(base64, 'base64')
  }
  await mkdir(path.dirname(file), { recursive: true })
  await writeFile(file, output)
  console.log(`Wrote ${path.relative(root, file)}`)
}

await browser.close()
