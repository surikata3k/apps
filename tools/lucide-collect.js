const fs = require('fs'), path = require('path');
const { icons } = require('lucide');
const toPascal = s => s.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
const files = process.argv.slice(2);
const used = new Set(), unknownStatic = new Set();
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  for (const m of t.matchAll(/data-lucide="([a-z0-9-]+)"/g)) { if (icons[toPascal(m[1])]) used.add(m[1]); else unknownStatic.add(m[1]); }
  for (const m of t.matchAll(/['"`]([a-z][a-z0-9]*(?:-[a-z0-9]+)*)['"`]/g)) if (icons[toPascal(m[1])]) used.add(m[1]);
}
console.error('unknown static:', [...unknownStatic]);
const names = [...used].sort();
fs.writeFileSync('entry.js', `import { createIcons as ci, ${names.map(toPascal).join(', ')} } from 'lucide';
const icons = { ${names.map(toPascal).join(', ')} };
window.lucide = { createIcons: (opts = {}) => ci({ ...opts, icons: { ...icons, ...(opts.icons || {}) } }) };
`);
console.log(names.length, names.join(' '));
