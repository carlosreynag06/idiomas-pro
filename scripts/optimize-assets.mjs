import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
const root = process.cwd();
const images = path.join(root, 'public', 'images');
await mkdir(images, { recursive: true });
for (const [name, width, quality] of [
  ['confident-learner', 1600, 88],
  ['personal-lesson', 1400, 88],
  ['study-materials', 1400, 88],
  ['about-learning-table', 1400, 88],
  ['about-finding-your-voice', 1400, 88],
  ['languages-english', 1400, 88],
  ['languages-spanish', 1400, 88],
  ['pricing-personal-attention', 1400, 88],
  ['journal-feature', 1600, 88],
  ['es-faq-v2', 1100, 92],
  ['testimonios-first-words', 1300, 90],
  ['testimonios-spanish-practice', 1500, 90],
  ['home-learning-voices', 1300, 90],
  ['about-backstory-notes', 1200, 90],
  ['journal-private-lessons', 1200, 86],
  ['journal-real-conversation', 1200, 86],
  ['journal-spanish-everyday', 1200, 86],
  ['journal-english-at-work', 1200, 86],
  ['journal-spanish-listening', 1200, 86],
  ['journal-interview-practice', 1200, 86],
]) {
  await sharp(path.join(root, 'assets', 'imagegen', `${name}-original.png`))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(path.join(images, `${name}.webp`));
}
await sharp(path.join(images, 'conversation-sculpture.png'))
  .resize({ width: 900, withoutEnlargement: true })
  .webp({ quality: 92, alphaQuality: 100 })
  .toFile(path.join(images, 'conversation-sculpture.webp'));
await sharp(path.join(images, 'conversation-sculpture-charcoal.png'))
  .resize({ width: 900, withoutEnlargement: true })
  .webp({ quality: 92, alphaQuality: 100 })
  .toFile(path.join(images, 'conversation-sculpture-charcoal.webp'));
await sharp(path.join(images, 'about-open-book.png'))
  .resize({ width: 1100, withoutEnlargement: true })
  .webp({ quality: 92, alphaQuality: 100 })
  .toFile(path.join(images, 'about-open-book.webp'));
await sharp(path.join(images, 'languages-alphabet.png'))
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 92, alphaQuality: 100 })
  .toFile(path.join(images, 'languages-alphabet.webp'));
await sharp(path.join(images, 'pricing-momentum.png'))
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 92, alphaQuality: 100 })
  .toFile(path.join(images, 'pricing-momentum.webp'));
await sharp(path.join(images, 'journal-quotation.png'))
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 92, alphaQuality: 100 })
  .toFile(path.join(images, 'journal-quotation.webp'));
for (const name of ['es-terms', 'es-privacy', 'testimonios-si']) {
  await sharp(path.join(images, `${name}.png`))
    .resize({ width: 1100, withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(path.join(images, `${name}.webp`));
}
const image = await sharp(path.join(images, 'confident-learner.webp'))
  .resize(500, 630, { fit: 'cover' })
  .toBuffer();
const type = Buffer.from(
  `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="700" height="630" fill="#f7f7ef"/><text x="65" y="85" font-family="Arial,sans-serif" font-size="32" font-weight="bold" fill="#222620">idiomaspro.</text><text x="65" y="196" font-family="Arial,sans-serif" font-size="15" letter-spacing="2" fill="#244ce6">ENGLISH &amp; SPANISH. IN REAL LIFE.</text><text x="60" y="299" font-family="Arial,sans-serif" font-size="84" letter-spacing="-5" fill="#222620">Your world,</text><text x="60" y="389" font-family="Arial,sans-serif" font-size="84" letter-spacing="-5" fill="#222620">in other words.</text><rect x="65" y="456" width="277" height="50" rx="25" fill="#244ce6"/><text x="91" y="488" font-family="Arial,sans-serif" font-size="17" fill="white">Find your first words  ↗</text><text x="65" y="578" font-family="Arial,sans-serif" font-size="15" fill="#697064">Private lessons with Carlos Reyna · Puerto Plata, RD</text></svg>`,
);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f7f7ef' } })
  .composite([
    { input: image, left: 700, top: 0 },
    { input: type, left: 0, top: 0 },
  ])
  .jpeg({ quality: 90 })
  .toFile(path.join(images, 'og-cover.jpg'));
console.log('Optimized learning and journal assets and generated the social sharing cover.');
