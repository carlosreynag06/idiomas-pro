import type { Metadata } from 'next';
import '@/components/journal-page.css';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { articles } from '@/lib/content';
import { site } from '@/lib/site';
import { ArticleCard, CTA, Eyebrow } from '@/components/shared';
import { BookButton } from '@/components/site-shell';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      type: 'article',
      title: a.title,
      description: a.excerpt,
      authors: ['Carlos Reyna'],
      images: [a.image],
    },
  };
}
export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  const related = [
    ...articles.filter((x) => x.slug !== slug && x.category === a.category),
    ...articles.filter((x) => x.slug !== slug && x.category !== a.category),
  ].slice(0, 3);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.excerpt,
    author: { '@type': 'Person', name: 'Carlos Reyna' },
    publisher: { '@type': 'Organization', name: 'Idiomas Pro' },
    datePublished: '2026-11-06',
    dateModified: '2026-11-06',
    image: `${site.url}${a.image}`,
    mainEntityOfPage: `${site.url}/blog/${a.slug}/`,
  };
  return (
    <main id="main" className="journal-article-page">
      <article>
        <header className="article-header">
          <div className="container">
            <Link className="back-link hero-animate" href="/blog/">
              <ArrowLeft size={16} />
              Back to the journal
            </Link>
            <div className="article-heading-meta hero-animate">
              <Eyebrow>{a.category}</Eyebrow>
              <span>{a.readTime} · November 6, 2026</span>
            </div>
            <h1 className="hero-animate">{a.title}</h1>
            <p className="article-deck hero-animate">{a.excerpt}</p>
            <div className="article-byline">
              <span className="author-avatar">CR</span>
              <div>
                <strong>Carlos Reyna</strong>
                <span>Your English & Spanish teacher in Puerto Plata</span>
              </div>
            </div>
          </div>
        </header>
        <div className="container article-cover">
          <Image
            src={a.image}
            alt={a.imageAlt}
            width={1500}
            height={800}
            preload
            style={{ objectPosition: a.imagePosition }}
          />
          <span>THE LOCAL WORD · PUERTO PLATA, DOMINICAN REPUBLIC</span>
        </div>
        <div className="container article-body-layout">
          <aside className="article-toc">
            <span className="eyebrow">IN A FEW WORDS</span>
            <nav aria-label="Article sections">
              {a.sections.map((s, i) => (
                <a key={s.title} href={`#part-${i + 1}`}>
                  <span>0{i + 1}</span>
                  {s.title}
                </a>
              ))}
            </nav>
            <div className="article-aside-cta">
              <MessageIcon />
              <h3>
                Let’s put it
                <br />
                into practice.
              </h3>
              <p>
                Private lessons. Your goals.
                <br />
                In person, in Puerto Plata.
              </p>
              <BookButton className="button button-small">Talk to Carlos</BookButton>
            </div>
          </aside>
          <div className="article-body">
            {a.sections.map((s, i) => (
              <section key={s.title} id={`part-${i + 1}`}>
                <h2>{s.title}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 50)}>{p}</p>
                ))}
              </section>
            ))}
            <div className="article-author-box">
              <span className="author-avatar">CR</span>
              <div>
                <strong>A note from Carlos</strong>
                <p>
                  I teach English and Spanish, face to face, in Puerto Plata. Eight years in the US,
                  a career in hospitality, and hundreds of students have shaped my belief that good
                  conversations change things.
                </p>
                <Link href="/sobre-carlos/" className="text-link">
                  More of my story <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      <section className="section related-articles">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>KEEP THE CONVERSATION GOING</Eyebrow>
              <h2>
                A few more <em>good words.</em>
              </h2>
            </div>
            <Link href="/blog/" className="text-link">
              All stories <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="article-grid">
            {related.map((a, i) => (
              <ArticleCard article={a} index={i} key={a.slug} />
            ))}
          </div>
        </div>
      </section>
      <CTA artwork="charcoal" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
    </main>
  );
}
function MessageIcon() {
  return (
    <span className="aside-conversation" aria-hidden="true">
      “
    </span>
  );
}
