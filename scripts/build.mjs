import { mkdir, readFile, rm, writeFile, cp } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { gunzipSync } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');
const manifest = JSON.parse(await readFile(path.join(root, 'komari-theme.json'), 'utf8'));
const assetBase = `/themes/${manifest.short}/dist/`;

const styleB64 = (await Promise.all([1, 2, 3, 4].map((part) =>
  readFile(path.join(src, 'assets', `styles.css.gz.b64.part${part}`), 'utf8')
))).join('');
const styleSource = gunzipSync(Buffer.from(styleB64, 'base64'));
const appTemplate = gunzipSync(await readFile(path.join(src, 'assets', 'app.js.gz'))).toString('utf8');
const htmlTemplate = gunzipSync(await readFile(path.join(src, 'index.html.gz'))).toString('utf8');
const styleHash = createHash('sha256').update(styleSource).digest('hex').slice(0, 10);
const styleFile = `styles.${styleHash}.css`;
const resolveAssets = (source) => source
  .replaceAll('{{ASSET_BASE}}', assetBase)
  .replaceAll('{{STYLE_FILE}}', styleFile);

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, 'assets'), { recursive: true });
await writeFile(path.join(dist, 'assets', 'app.js'), resolveAssets(appTemplate), 'utf8');
await writeFile(path.join(dist, 'assets', styleFile), styleSource);
await cp(path.join(src, 'assets', 'bootstrap.js'), path.join(dist, 'assets', 'bootstrap.js'));
await cp(path.join(src, 'assets', 'notebook.svg'), path.join(dist, 'assets', 'notebook.svg'));
await writeFile(path.join(dist, 'index.html'), resolveAssets(htmlTemplate), 'utf8');
console.log(`Built ${manifest.name} -> dist/`);
