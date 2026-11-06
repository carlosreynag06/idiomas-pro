import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pages, pageMeta, type PageName } from '@/lib/site';
import { InnerPage } from '@/components/inner-pages';

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
    alternates: { canonical: `/${page}/` },
    openGraph: { title: meta.title, description: meta.description },
  };
}
export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  if (!pages.includes(page as PageName)) notFound();
  return <InnerPage page={page as PageName} />;
}
