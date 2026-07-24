import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { gunzipSync } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');
const manifest = JSON.parse(await readFile(path.join(root, 'komari-theme.json'), 'utf8'));
const assetBase = `/themes/${manifest.short}/dist/`;
const versionToken = manifest.version.replace(/\D/g, '');
const appFile = `app.${versionToken}.js`;
const bootstrapFile = `bootstrap.${versionToken}.js`;

const appSource = gunzipSync(Buffer.from(await readFile(path.join(src, 'assets', 'app.js.gz.b64'), 'utf8'), 'base64'));
const styleSource = gunzipSync(Buffer.from(await readFile(path.join(src, 'assets', 'styles.css.gz.b64'), 'utf8'), 'base64'));
const styleHash = createHash('sha256').update(styleSource).digest('hex').slice(0, 10);
const styleFile = `styles.${styleHash}.css`;
const htmlTemplate = await readFile(path.join(src, 'index.html'), 'utf8');
const html = htmlTemplate
  .replaceAll('{{ASSET_BASE}}', assetBase)
  .replaceAll('{{APP_FILE}}', appFile)
  .replaceAll('{{BOOTSTRAP_FILE}}', bootstrapFile)
  .replaceAll('{{STYLE_FILE}}', styleFile);

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, 'assets'), { recursive: true });
await writeFile(path.join(dist, 'assets', appFile), appSource);
await writeFile(path.join(dist, 'assets', styleFile), styleSource);
await cp(path.join(src, 'assets', 'bootstrap.js'), path.join(dist, 'assets', bootstrapFile));
await cp(path.join(src, 'assets', 'notebook.svg'), path.join(dist, 'assets', 'notebook.svg'));
await writeFile(path.join(dist, 'index.html'), html, 'utf8');
console.log(`Built ${manifest.name} ${manifest.version} -> dist/`);
