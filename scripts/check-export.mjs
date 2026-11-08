import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('out');
const failures = [];
let checkedPages = 0,
  checkedLinks = 0,
  checkedImages = 0;
async function exists(p) {
  try {
    return await stat(p);
  } catch {
    return null;
  }
}
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!entry.name.startsWith('_next')) await walk(full);
    } else if (entry.name === 'index.html') await inspect(full);
  }
}
async function inspect(file) {
  checkedPages++;
  const html = await readFile(file, 'utf8');
  const route = '/' + path.relative(root, path.dirname(file)).replaceAll('\\', '/') + '/';
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) failures.push(`${route}: expected one H1`);
  if (!/<meta name="description" content="[^"]+"/.test(html))
    failures.push(`${route}: missing meta description`);
  const header = html.match(/<header class="header"[^>]*>[\s\S]*?<\/header>/)?.[0] ?? '';
  const footer = html.match(/<footer class="footer"[^>]*>[\s\S]*?<\/footer>/)?.[0] ?? '';
  if (!header.includes('lang="es"') || !footer.includes('lang="es"'))
    failures.push(`${route}: header and footer must be Spanish`);
  for (const [url, label] of [
    ['sobre-carlos', 'Sobre Carlos'],
    ['idiomas', 'Idiomas'],
    ['precios', 'Precios'],
    ['testimonios', 'Testimonios'],
    ['blog', 'Blog'],
  ]) {
    const link = new RegExp(`href="/${url}/"[^>]*>${label}</a>`);
    if (!link.test(header) || !link.test(footer))
      failures.push(`${route}: missing global Spanish navigation link ${label}`);
  }
  if (!/<div class="footer-wordmark"[^>]*>\s*Hablemos/.test(footer))
    failures.push(`${route}: footer wordmark must start with capital H`);
  if (/href="\/(?:about|languages|pricing|testimonials|faq|terms|privacy)\//.test(html))
    failures.push(`${route}: an internal link still uses an old English route`);
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/<(?:a|link)\b[^>]*?href="([^"]+)"/g)) {
    const href = m[1];
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    if (href.startsWith('//')) continue;
    checkedLinks++;
    const [raw, hash] = href.split('#');
    const clean = raw.split('?')[0];
    if (!clean) {
      if (hash && !ids.has(hash)) failures.push(`${route}: broken anchor ${href}`);
      continue;
    }
    let target = path.join(root, decodeURIComponent(clean));
    let info = await exists(target);
    if (info?.isDirectory()) {
      target = path.join(target, 'index.html');
      info = await exists(target);
    }
    if (!info) failures.push(`${route}: broken link ${href}`);
    if (hash && info?.isFile() && target.endsWith('.html')) {
      const dest = await readFile(target, 'utf8');
      if (!dest.includes(`id="${hash}"`))
        failures.push(`${route}: broken destination anchor ${href}`);
    }
  }
  for (const m of html.matchAll(/<img\b[^>]*?src="([^"]+)"/g)) {
    const src = m[1];
    if (!src.startsWith('/')) continue;
    checkedImages++;
    if (!(await exists(path.join(root, decodeURIComponent(src.split('?')[0])))))
      failures.push(`${route}: missing image ${src}`);
  }
}
await walk(root);
for (const oldRoute of [
  'about',
  'languages',
  'pricing',
  'testimonials',
  'faq',
  'terms',
  'privacy',
]) {
  if (await exists(path.join(root, oldRoute, 'index.html')))
    failures.push(`Old English page still generated: /${oldRoute}/`);
}
const blogEntries = await readdir(path.join(root, 'blog'), { withFileTypes: true });
const count = (
  await Promise.all(
    blogEntries
      .filter((e) => e.isDirectory())
      .map((e) => exists(path.join(root, 'blog', e.name, 'index.html'))),
  )
).filter(Boolean).length;
if (count !== 6) failures.push(`Expected six article pages; found ${count}`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else
  console.log(
    `Export verified: ${checkedPages} pages, ${checkedLinks} internal links, ${checkedImages} image references, and all 6 articles. No broken references.`,
  );
