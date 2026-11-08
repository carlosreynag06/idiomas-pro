export const site = {
  name: 'Idiomas Pro',
  teacher: 'Carlos Reyna',
  email: 'carlosreynag0605@gmail.com',
  location: 'Puerto Plata, Dominican Republic',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://idiomaspro.com',
};
export const pages = [
  'about',
  'languages',
  'pricing',
  'testimonials',
  'blog',
  'faq',
  'terms',
  'privacy',
] as const;
export type PageName = (typeof pages)[number];
export const canonicalPageSlugs: Record<PageName, string> = {
  about: 'sobre-carlos',
  languages: 'idiomas',
  pricing: 'precios',
  testimonials: 'testimonios',
  blog: 'blog',
  faq: 'preguntas-frecuentes',
  terms: 'terminos',
  privacy: 'privacidad',
};
// The three legal/FAQ pages have their own route folders.
export const contentPages = ['about', 'languages', 'pricing', 'testimonials', 'blog'] as const;
export function pageFromSlug(slug: string) {
  return contentPages.find((page) => canonicalPageSlugs[page] === slug);
}
export const pageMeta: Record<PageName, { title: string; description: string }> = {
  about: {
    title: 'Meet Carlos Reyna',
    description:
      'Meet your private English and Spanish teacher in Puerto Plata. Eight years in the United States and real hospitality experience, brought to every lesson.',
  },
  languages: {
    title: 'Private English & Spanish Lessons in Puerto Plata',
    description:
      'One-to-one, in-person English classes for Spanish speakers and Spanish lessons for foreigners in Puerto Plata, Dominican Republic.',
  },
  pricing: {
    title: 'Private Language Lesson Pricing',
    description:
      'Explore flexible private English and Spanish lesson plans in Puerto Plata. Personal attention, practical conversation, and lessons built around you.',
  },
  testimonials: {
    title: 'Testimonios · La confianza tiene voz',
    description:
      'Historias de aprendizaje de inglés y español con Carlos Reyna. Clases privadas y presenciales para encontrar tu voz en Puerto Plata.',
  },
  blog: {
    title: 'The Local Word — Puerto Plata Language Journal',
    description:
      'Practical English and Spanish guides for learning, work, confidence, and everyday conversations in Puerto Plata, Dominican Republic.',
  },
  faq: {
    title: 'Preguntas frecuentes',
    description:
      'Respuestas sobre clases privadas de inglés y español con Carlos Reyna en Puerto Plata: niveles, horarios, precios y reservas.',
  },
  terms: {
    title: 'Términos del servicio',
    description:
      'Condiciones para usar Idiomas Pro y acordar clases privadas y presenciales de idiomas en Puerto Plata.',
  },
  privacy: {
    title: 'Política de privacidad',
    description:
      'Cómo se manejan tus datos al consultar sobre clases de inglés y español con Carlos Reyna en Puerto Plata.',
  },
};
