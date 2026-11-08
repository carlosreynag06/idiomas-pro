import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pages, pageMeta, canonicalPageSlugs, type PageName } from '@/lib/site';
import { InnerPage } from '@/components/inner-pages';
import PreguntasFrecuentesPage from '@/app/preguntas-frecuentes/page';
import TerminosPage from '@/app/terminos/page';
import PrivacidadPage from '@/app/privacidad/page';

export function generateStaticParams() {
  return pages.map((page) => ({ page }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  if (!pages.includes(page as PageName)) return {};
  const meta = pageMeta[page as PageName];
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${canonicalPageSlugs[page as PageName] ?? page}/` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      ...(page === 'faq' || page === 'terms' || page === 'privacy'
        ? {
            locale: 'es_DO',
            images: [
              page === 'faq'
                ? '/images/es-faq-v2.webp'
                : page === 'terms'
                  ? '/images/es-terms.webp'
                  : '/images/es-privacy.webp',
            ],
          }
        : {}),
    },
  };
}
export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  if (!pages.includes(page as PageName)) notFound();
  if (page === 'faq') return <PreguntasFrecuentesPage />;
  if (page === 'terms') return <TerminosPage />;
  if (page === 'privacy') return <PrivacidadPage />;
  return <InnerPage page={page as PageName} />;
}
