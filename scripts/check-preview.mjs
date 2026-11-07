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
for (const source of sources) {
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
  `Live preview verified: all ${sources.length} distinct homepage images return valid, decodable image data.`,
);
