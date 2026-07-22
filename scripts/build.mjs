import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');
const manifest = JSON.parse(await readFile(path.join(root, 'komari-theme.json'), 'utf8'));
const assetBase = `/themes/${manifest.short}/dist/`;

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(src, 'assets'), path.join(dist, 'assets'), { recursive: true });
const sourceHtml = await readFile(path.join(src, 'index.html'), 'utf8');
await writeFile(path.join(dist, 'index.html'), sourceHtml.replaceAll('{{ASSET_BASE}}', assetBase), 'utf8');
console.log(`Built ${manifest.name} -> dist/`);
