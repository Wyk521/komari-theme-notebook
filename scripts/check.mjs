import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(path.join(root, 'komari-theme.json'), 'utf8'));
const html = await readFile(path.join(root, 'dist', 'index.html'), 'utf8');
const app = await readFile(path.join(root, 'dist', 'assets', 'app.js'), 'utf8');
const bootstrap = await readFile(path.join(root, 'dist', 'assets', 'bootstrap.js'), 'utf8');
const errors = [];

if (!manifest.name || !manifest.short) errors.push('Manifest must contain name and short.');
if (manifest.version !== '0.9.1') errors.push('Manifest version must be 0.9.1.');
if (/preview|hotfix|test/i.test(JSON.stringify({ name: manifest.name, description: manifest.description, version: manifest.version }))) errors.push('Formal manifest contains test labels.');
if (!html.includes('<title>Komari Monitor</title>')) errors.push('Required title placeholder missing.');
if (!html.includes('Powered by Komari Monitor.')) errors.push('Required footer credit missing.');
if (!app.includes("dataset.notebookVersion = '0.9.1'")) errors.push('Application version marker is not 0.9.1.');
if (!bootstrap.includes('release.091.css')) errors.push('v0.9.1 refinement stylesheet is not loaded.');
for (const file of ['app.js', 'bootstrap.js', 'notebook.svg', 'release.091.css']) {
  try { await access(path.join(root, 'dist', 'assets', file)); }
  catch { errors.push(`Missing asset: ${file}`); }
}
for (const forbidden of ['preview.4', 'loader-sync-fix', 'no-startup-overlay', 'first-paint-fix']) {
  if (`${html}\n${app}\n${bootstrap}`.toLowerCase().includes(forbidden.toLowerCase())) errors.push(`Test field remains in generated theme: ${forbidden}`);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Theme check passed: ${manifest.short} ${manifest.version}`);
