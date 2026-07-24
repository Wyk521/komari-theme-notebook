import { cp, mkdir, readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.resolve(root, process.argv[2] || 'release/package');
const html = await readFile(path.join(root, 'dist', 'index.html'), 'utf8');
const assets = [...new Set([...html.matchAll(/\/themes\/[A-Za-z0-9_-]+\/dist\/assets\/([^"'?#]+)/g)].map((match) => match[1]))];
for (const extra of ['release.091.css', 'release.092.css']) {
  if (!assets.includes(extra)) assets.push(extra);
}

await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'dist', 'assets'), { recursive: true });
await cp(path.join(root, 'komari-theme.json'), path.join(output, 'komari-theme.json'));
await cp(path.join(root, 'preview.png'), path.join(output, 'preview.png'));
await cp(path.join(root, 'dist', 'index.html'), path.join(output, 'dist', 'index.html'));
for (const file of assets) {
  await cp(path.join(root, 'dist', 'assets', file), path.join(output, 'dist', 'assets', file));
}
console.log(`Prepared release package with ${assets.length} assets.`);
