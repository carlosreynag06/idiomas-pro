import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { contentPages, pageFromSlug, pageMeta, canonicalPageSlugs } from '@/lib/site';
import { InnerPage } from '@/components/inner-pages';

export function generateStaticParams() {
  return contentPages.map((page) => ({ page: canonicalPageSlugs[page] }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page: slug } = await params;
  const page = pageFromSlug(slug);
  if (!page) return {};
  const meta = pageMeta[page];
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${canonicalPageSlugs[page]}/` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      ...(page === 'testimonials'
        ? { locale: 'es_DO', images: ['/images/testimonios-first-words.webp'] }
        : {}),
    },
  };
}
export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page: slug } = await params;
  const page = pageFromSlug(slug);
  if (!page) notFound();
  return <InnerPage page={page} />;
}
