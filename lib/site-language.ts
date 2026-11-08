export function isSpanishPage(path: string) {
  return [
    '/preguntas-frecuentes',
    '/terminos',
    '/privacidad',
    '/faq',
    '/terms',
    '/privacy',
  ].includes(path.replace(/\/$/, ''));
}
