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
    title: 'Student Stories',
    description:
      'Discover the kinds of language goals we work toward in private English and Spanish classes in Puerto Plata.',
  },
  blog: {
    title: 'The Local Word — Puerto Plata Language Journal',
    description:
      'Practical English and Spanish guides for learning, work, confidence, and everyday conversations in Puerto Plata, Dominican Republic.',
  },
  faq: {
    title: 'Frequently Asked Questions',
    description:
      'Everything you need to know about in-person English and Spanish lessons with Carlos Reyna in Puerto Plata.',
  },
  terms: {
    title: 'Terms of Service',
    description:
      'Provisional terms for private in-person language lessons offered by Idiomas Pro in Puerto Plata.',
  },
  privacy: {
    title: 'Privacy Policy',
    description:
      'How Idiomas Pro handles your information when you explore our website and inquire about language lessons.',
  },
};
