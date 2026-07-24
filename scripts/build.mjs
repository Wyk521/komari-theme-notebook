import { access, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distAssets = path.join(root, 'dist', 'assets');
const srcAssets = path.join(root, 'src', 'assets');

for (const file of ['index.html', 'assets/app.js', 'assets/bootstrap.js', 'assets/notebook.svg']) {
  await access(path.join(root, 'dist', file));
}

await copyFile(path.join(srcAssets, 'release.091.css'), path.join(distAssets, 'release.091.css'));
console.log('Verified self-contained distribution and copied v0.9.1 refinements.');
