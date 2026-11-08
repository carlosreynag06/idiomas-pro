import fs from 'node:fs';
import { spanishFaqs as faqs } from '../app/preguntas-frecuentes/questions.ts';

const sources = [
  [
    'lib/content.ts',
    [
      'presencial',
      'nivel',
      'profesor',
      'lugar',
      'ingles-trabajo',
      'espanol-practico',
      'duracion',
      'reprogramar',
      'reserva',
      'progreso',
    ],
  ],
  ['components/about-carlos.tsx', ['siempre-carlos', 'nivel', 'donde']],
  ['components/languages-page.tsx', ['desde-cero', 'privadas', 'meta', 'elegir']],
  [
    'components/pricing-page.tsx',
    ['idioma-precio', 'paquete-inicial', 'horario-pago', 'vigencia', 'cambio'],
  ],
];
if (faqs.length !== 21 || new Set(faqs.map((item) => item.id)).size !== 21)
  throw new Error('Expected 21 unique Spanish FAQ entries.');
const coverage = [];
for (const [file, ids] of sources) {
  let source = fs.readFileSync(file, 'utf8');
  if (file === 'lib/content.ts')
    source = source.slice(
      source.indexOf('export const faqs'),
      source.indexOf('export const stories'),
    );
  const pattern = file === 'lib/content.ts' ? /q:\s*'([^']+\?)'/g : /\[\s*'([^']+\?)'\s*,/g;
  const pairs = [...source.matchAll(pattern)].map((match) => match[1]);
  if (pairs.length !== ids.length)
    throw new Error(
      `${file}: found ${pairs.length} FAQ questions; expected ${ids.length}. Add translations for changed content.`,
    );
  pairs.forEach((question, index) => {
    const faq = faqs.find((item) => item.id === ids[index]);
    if (!faq || !faq.q.includes('¿') || !faq.a.trim())
      throw new Error(`Missing Spanish answer for ${file}: ${question}`);
    coverage.push({
      source: file,
      question,
      target: `/preguntas-frecuentes/#pregunta-${faq.id}`,
      spanishQuestion: faq.q,
    });
  });
}
if (coverage.length !== 22) throw new Error('Expected all 22 original FAQ entries.');
if (process.argv.includes('--write'))
  fs.writeFileSync('docs/FAQ-ES-COVERAGE.json', JSON.stringify(coverage, null, 2) + '\n');
console.log(
  'Spanish FAQ coverage verified: all 22 source entries are represented in 21 distinct questions; the exact duplicate is combined.',
);
