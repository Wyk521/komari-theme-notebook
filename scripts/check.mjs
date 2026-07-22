import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(path.join(root, 'komari-theme.json'), 'utf8'));
const html = await readFile(path.join(root, 'dist', 'index.html'), 'utf8');
const errors = [];
if (!manifest.name || !manifest.short) errors.push('Manifest must contain name and short.');
if (!/^[A-Za-z0-9_-]+$/.test(manifest.short) || manifest.short.toLowerCase() === 'default') errors.push('Invalid theme short.');
if (!html.includes('<title>Komari Monitor</title>')) errors.push('Required title placeholder missing.');
if (!html.includes('<meta name="description" content="A simple server monitor tool." />')) errors.push('Required description placeholder missing.');
if (!html.includes('Powered by Komari Monitor.')) errors.push('Required footer credit missing.');
for (const file of ['app.js', 'styles.css', 'notebook.svg']) {
  try { await access(path.join(root, 'dist', 'assets', file)); }
  catch { errors.push(`Missing asset: ${file}`); }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Theme check passed: ${manifest.short} ${manifest.version}`);
