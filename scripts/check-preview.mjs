import sharp from 'sharp';
const base = process.argv[2] || 'http://localhost:3000';
const page = await fetch(base);
if (!page.ok) throw new Error(`Preview returned ${page.status}`);
const html = await page.text();
const sources = [...html.matchAll(/<img\b[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]);
if (sources.length < 6)
  throw new Error(`Expected at least 6 homepage images, found ${sources.length}`);
if (new Set(sources).size !== sources.length)
  throw new Error('The homepage reuses an image source.');
const allSources = new Set(sources);
for (const route of [
  '/blog/',
  '/preguntas-frecuentes/',
  '/terminos/',
  '/privacidad/',
  '/testimonios/',
  '/sobre-carlos/',
]) {
  const response = await fetch(new URL(route, base));
  if (!response.ok) throw new Error(`${route} returned ${response.status}`);
  const content = await response.text();
  const images = [...content.matchAll(/<img\b[^>]*\ssrc="([^"]+)"/g)].map((match) => match[1]);
  if (!images.length) throw new Error(`${route} is missing its artwork.`);
  if (route === '/blog/' && new Set(images).size !== 8)
    throw new Error('The Journal must include eight distinct image sources.');
  if (!['/blog/', '/sobre-carlos/'].includes(route) && !/<main[^>]*lang="es"/.test(content))
    throw new Error(`${route} is missing its Spanish content language.`);
  for (const source of images) allSources.add(source);
  console.log(`OK ${route} — ${images.length} images`);
}
for (const source of allSources) {
  const response = await fetch(new URL(source, base));
  if (!response.ok) throw new Error(`${source} returned ${response.status}`);
  if (!response.headers.get('content-type')?.startsWith('image/'))
    throw new Error(`${source} did not return an image`);
  const bytes = Buffer.from(await response.arrayBuffer());
  const meta = await sharp(bytes).metadata();
  if (!meta.width || !meta.height) throw new Error(`${source} could not be decoded`);
  console.log(`OK ${source} — ${meta.width}×${meta.height}, ${Math.round(bytes.length / 1024)} KB`);
}
console.log(
  `Live preview verified: ${allSources.size} distinct images across all reviewed pages return valid, decodable image data.`,
);
