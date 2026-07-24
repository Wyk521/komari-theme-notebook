import { access, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { gunzipSync } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(path.join(root, 'komari-theme.json'), 'utf8'));
const html = await readFile(path.join(root, 'dist', 'index.html'), 'utf8');
const app = await readFile(path.join(root, 'dist', 'assets', 'app.js'), 'utf8');
const styleB64 = (await Promise.all([1, 2, 3, 4].map((part) =>
  readFile(path.join(root, 'src', 'assets', `styles.css.gz.b64.part${part}`), 'utf8')
))).join('');
const styleSource = gunzipSync(Buffer.from(styleB64, 'base64'));
const styleHash = createHash('sha256').update(styleSource).digest('hex').slice(0, 10);
const styleFile = `styles.${styleHash}.css`;
const errors = [];

if (!manifest.name || !manifest.short) errors.push('Manifest must contain name and short.');
if (manifest.version !== '0.9.0') errors.push('Manifest version must be 0.9.0.');
if (/preview|hotfix|test/i.test(JSON.stringify({ name: manifest.name, description: manifest.description, version: manifest.version }))) errors.push('Formal manifest contains test labels.');
if (!html.includes('<title>Komari Monitor</title>')) errors.push('Required title placeholder missing.');
if (!html.includes('<meta name="description" content="A simple server monitor tool." />')) errors.push('Required description placeholder missing.');
if (!html.includes('Powered by Komari Monitor.')) errors.push('Required footer credit missing.');
if (!app.includes(`/assets/${styleFile}`)) errors.push(`Versioned stylesheet is not loaded by app.js: ${styleFile}`);
if (app.includes('{{ASSET_BASE}}') || app.includes('{{STYLE_FILE}}')) errors.push('Unresolved asset placeholder remains in app.js.');
for (const file of ['app.js', styleFile, 'bootstrap.js', 'notebook.svg']) {
  try { await access(path.join(root, 'dist', 'assets', file)); }
  catch { errors.push(`Missing asset: ${file}`); }
}
for (const forbidden of ['issue3-loader', 'preview 9', 'hotfix 6', 'KomariNotebookFieldNotesP9H2']) {
  if (`${html}\n${app}`.toLowerCase().includes(forbidden.toLowerCase())) errors.push(`Test field remains in generated theme: ${forbidden}`);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Theme check passed: ${manifest.short} ${manifest.version}`);
