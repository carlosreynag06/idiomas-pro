import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('out');
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};
await stat(path.join(root, 'index.html')).catch(() => {
  console.error('Run npm run build before npm start.');
  process.exit(1);
});
http
  .createServer(async (req, res) => {
    try {
      if (!['GET', 'HEAD'].includes(req.method)) {
        res.writeHead(405, { Allow: 'GET, HEAD' });
        res.end();
        return;
      }
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      let file = path.resolve(root, `.${pathname}`);
      if (file !== root && !file.startsWith(root + path.sep)) {
        res.writeHead(403);
        res.end();
        return;
      }
      let code = 200;
      try {
        const info = await stat(file);
        if (info.isDirectory()) file = path.join(file, 'index.html');
        await stat(file);
      } catch {
        file = path.join(root, '404.html');
        code = 404;
      }
      const content = await readFile(file);
      const type = mime[path.extname(file)] || 'application/octet-stream';
      res.writeHead(code, {
        'Content-Type': type,
        'Content-Length': content.length,
        'Cache-Control': pathname.startsWith('/_next/static/')
          ? 'public, max-age=31536000, immutable'
          : 'no-cache',
        'X-Content-Type-Options': 'nosniff',
      });
      res.end(req.method === 'HEAD' ? undefined : content);
    } catch {
      res.writeHead(400);
      res.end('Bad request');
    }
  })
  .listen(port, '0.0.0.0', () =>
    console.log(`Idiomas Pro production preview: http://localhost:${port}`),
  );
