import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(path.join(root, 'komari-theme.json'), 'utf8'));
const pkg = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
const html = await readFile(path.join(root, 'dist', 'index.html'), 'utf8');
const bootstrap = await readFile(path.join(root, 'dist', 'assets', 'bootstrap.js'), 'utf8');
const errors = [];

if (!manifest.name || !manifest.short) errors.push('Manifest must contain name and short.');
if (manifest.version !== pkg.version) errors.push(`Manifest version ${manifest.version} does not match package version ${pkg.version}.`);
if (/preview|hotfix|test/i.test(JSON.stringify({ name: manifest.name, description: manifest.description, version: manifest.version }))) errors.push('Formal manifest contains test labels.');
if (!html.includes('<title>Komari Monitor</title>')) errors.push('Required title placeholder missing.');
if (!html.includes('Powered by Komari Monitor.')) errors.push('Required footer credit missing.');
if (html.includes('control-section')) errors.push('Duplicate standalone checklist controls remain.');
if (!html.includes('summary-toolbar')) errors.push('Summary toolbar is missing.');
if (!bootstrap.includes("dataset.notebookVersion = '0.9.2'")) errors.push('Bootstrap version marker is not 0.9.2.');
if (!bootstrap.includes('release.092.css')) errors.push('v0.9.2 layout stylesheet is not loaded.');
for (const file of ['app.js', 'bootstrap.js', 'notebook.svg', 'styles.6afbeb0ae2.css', 'release.091.css', 'release.092.css']) {
  try { await access(path.join(root, 'dist', 'assets', file)); }
  catch { errors.push(`Missing asset: ${file}`); }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Theme check passed: ${manifest.short} ${manifest.version}`);
