import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Plus, Check, ArrowRight } from 'lucide-react';
import { BookButton } from './site-shell';
import { articles, faqs, stories, type Article } from '@/lib/content';

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span className={`eyebrow ${light ? 'light' : ''}`}>
      <span className="little-star" aria-hidden="true">
        ✳
      </span>
      {children}
    </span>
  );
}
export function CTA({ artwork = 'cobalt' }: { artwork?: 'cobalt' | 'charcoal' }) {
  return (
    <section className="cta-section">
      <div className="container cta-inner" data-reveal>
        <div>
          <Eyebrow>A GOOD PLACE TO BEGIN</Eyebrow>
          <h2>
            Your next chapter.
            <br />
            <em>In your own words.</em>
          </h2>
          <p>Tell me where you want to go. We’ll find the words to get you there.</p>
          <BookButton>Let’s start a conversation</BookButton>
          <span className="cta-footnote">No pressure. Just a friendly hello.</span>
        </div>
        <div className="cta-art">
          <Image
            src={
              artwork === 'charcoal'
                ? '/images/conversation-sculpture-charcoal.webp'
                : '/images/conversation-sculpture.webp'
            }
            alt="Two ceramic speech bubbles representing English and Spanish conversations"
            width={600}
            height={500}
            loading="eager"
          />
          <span className="art-annotation">A little hello goes a long way. ↗</span>
        </div>
      </div>
    </section>
  );
}
export function FAQList({ limit, items = faqs }: { limit?: number; items?: typeof faqs }) {
  return (
    <div className="faq-list">
      {items.slice(0, limit).map((f, i) => (
        <details key={f.q} className="faq-item">
          <summary>
            <span className="faq-number">{String(i + 1).padStart(2, '0')}</span>
            <span>{f.q}</span>
            <Plus size={21} className="faq-plus" />
          </summary>
          <div className="faq-answer">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
export function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  return (
    <Link href={`/blog/${article.slug}/`} className="article-card" data-reveal>
      <div className="article-image">
        <Image
          src={article.image}
          alt={article.imageAlt}
          width={720}
          height={510}
          loading="eager"
          style={{ objectPosition: article.imagePosition }}
        />
        <span className="article-arrow">
          <ArrowUpRight size={22} />
        </span>
        <span className="article-index">0{index + 1}</span>
      </div>
      <div className="article-meta">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
    </Link>
  );
}
export function JournalPreview() {
  return (
    <section className="section journal-section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <Eyebrow>THE LOCAL WORD</Eyebrow>
            <h2>
              A few words
              <br />
              <em>worth reading.</em>
            </h2>
          </div>
          <Link href="/blog/" className="text-link">
            Explore the journal <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="article-grid">
          {[articles[2], articles[5], articles[1]].map((a, i) => (
            <ArticleCard article={a} index={i} key={a.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
export function StoryCards({ full = false }: { full?: boolean }) {
  return (
    <div className={`stories-grid ${full ? 'full-stories' : ''}`}>
      {stories.map((s) => (
        <figure className={`story-card ${s.color}`} key={s.name}>
          <span className="quote-symbol">“</span>
          <blockquote>{s.quote}</blockquote>
          {full && <p className="story-detail">{s.detail}</p>}
          <figcaption>
            <span className={`avatar ${s.color}`}>{s.initial}</span>
            <div>
              <strong>{s.name}</strong>
              <span>{s.role}</span>
            </div>
            <span className="story-language">{s.language}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
export function PriceCards({ compact = false }: { compact?: boolean }) {
  const plans = [
    {
      name: 'A fresh start',
      tag: 'FIND YOUR FOOTING',
      price: '1,200',
      frequency: 'per lesson',
      desc: 'A little room to explore. A great place to begin.',
      items: [
        'One private 60-minute lesson',
        'English or Spanish, at your level',
        'A practical plan for what comes next',
      ],
      cta: 'Start with one lesson',
      featured: false,
    },
    {
      name: 'A little momentum',
      tag: 'MAKE IT A HABIT',
      price: '4,400',
      frequency: '4 lessons',
      desc: 'Your weekly conversation. Your steady progress.',
      items: [
        'Four private 60-minute lessons',
        'A plan built around your goals',
        'Useful practice between meetings',
        'Flexible scheduling by arrangement',
      ],
      cta: 'Find my momentum',
      featured: true,
    },
    {
      name: 'Going places',
      tag: 'GIVE YOUR GOAL SOME SPACE',
      price: '8,000',
      frequency: '8 lessons',
      desc: 'More practice for the conversations that matter.',
      items: [
        'Eight private 60-minute lessons',
        'Focused work or everyday conversation',
        'Progress check-ins with Carlos',
        'Personal exercises to keep you going',
      ],
      cta: 'Let’s go further',
      featured: false,
    },
  ];
  return (
    <>
      <div className={`pricing-grid ${compact ? 'compact' : ''}`}>
        {plans.map((p) => (
          <article
            key={p.name}
            className={`price-card ${p.featured ? 'featured' : ''}`}
            data-reveal
          >
            {p.featured && <span className="popular-label">A GOOD RHYTHM TO START</span>}
            <span className="eyebrow">{p.tag}</span>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="price">
              <span>RD$</span>
              {p.price}
            </div>
            <span className="price-frequency">{p.frequency} · 60 minutes each</span>
            <div className="price-rule" />
            <ul>
              {p.items.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
            <BookButton className={`button ${p.featured ? 'button-lime' : ''}`}>{p.cta}</BookButton>
          </article>
        ))}
      </div>
      <p className="pricing-note">
        Illustrative launch pricing in Dominican pesos. Final rates, availability, payment, and
        lesson terms are confirmed directly with Carlos before booking.
      </p>
    </>
  );
}
export function PageIntro({
  eyebrow,
  title,
  italic,
  description,
  className = '',
}: {
  eyebrow: string;
  title: string;
  italic: string;
  description: string;
  className?: string;
}) {
  return (
    <section className={`page-intro ${className}`}>
      <div className="container">
        <div className="hero-animate">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="hero-animate">
          {title}
          <br />
          <em>{italic}</em>
        </h1>
        <p className="hero-animate">{description}</p>
      </div>
    </section>
  );
}
export function Steps() {
  return (
    <div className="steps-grid">
      {[
        {
          title: 'First, a little hello.',
          copy: 'Tell me about you. Your goals, your starting point, the things you wish were easier to say.',
        },
        {
          title: 'A plan with your name on it.',
          copy: 'We choose a focus, a pace, and an in-person meeting arrangement that work for your life.',
        },
        {
          title: 'Talk. Try. Make it yours.',
          copy: 'Real conversations, useful feedback, and a little more confidence to take into your day.',
        },
      ].map((s, i) => (
        <div className="step" key={s.title} data-reveal>
          <div className="step-top">
            <span>0{i + 1}</span>
            <ArrowRight size={24} />
          </div>
          <h3>{s.title}</h3>
          <p>{s.copy}</p>
        </div>
      ))}
    </div>
  );
}
