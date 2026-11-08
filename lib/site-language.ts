export function isSpanishPage(path: string) {
  return ['/preguntas-frecuentes', '/terminos', '/privacidad', '/testimonios'].includes(
    path.replace(/\/$/, ''),
  );
}
