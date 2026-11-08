import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Clock3 } from 'lucide-react';
import { articles } from '@/lib/content';
import { BookButton } from './site-shell';
import { Journal, type JournalStory } from './journal';
import './journal-page.css';

export function JournalPage() {
  const feature =
    articles.find((article) => article.slug === 'in-person-language-lessons-puerto-plata') ??
    articles[0];
  const order = [
    'private-english-classes-puerto-plata',
    'english-job-interview-puerto-plata',
    'learn-spanish-puerto-plata-expats',
    'dominican-spanish-phrases-puerto-plata',
    'english-for-hotel-jobs-puerto-plata',
    'in-person-language-lessons-puerto-plata',
  ];
  const stories: JournalStory[] = order.flatMap((slug) => {
    const article = articles.find((item) => item.slug === slug);
    if (!article) return [];
    const { sections, ...story } = article;
    return [story];
  });
  return (
    <>
      <header className="jw-masthead">
        <div className="container">
          <div className="jw-masthead-top hero-animate">
            <span>ENGLISH, SPANISH & EVERYDAY LIFE</span>
            <span>A JOURNAL BY CARLOS REYNA</span>
          </div>
          <h1 className="hero-animate">
            The local <em>word.</em>
            <span aria-hidden="true">✳</span>
          </h1>
          <div className="jw-masthead-bottom hero-animate">
            <p>
              A few useful words. A little local perspective. Something to take into your next
              conversation.
            </p>
            <a href="#journal-stories">
              Explore the stories <ArrowDown size={17} />
            </a>
          </div>
        </div>
      </header>

      <section className="jw-feature-section" aria-label="Featured story">
        <div className="container">
          <div className="jw-feature-kicker hero-animate">
            <span>THE EDITOR’S PICK</span>
            <span>01 / THE FIRST COLLECTION</span>
          </div>
          <Link href={`/blog/${feature.slug}/`} className="jw-feature hero-animate">
            <div className="jw-feature-image">
              <Image
                className="hero-photo"
                src="/images/journal-feature.webp"
                alt="Illustrative learner sharing an idea with a tutor across a notebook during an in-person language lesson"
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 92vw, 59vw"
                preload
              />
              <span className="jw-feature-image-label">REAL PEOPLE. REAL CONVERSATIONS.</span>
            </div>
            <div className="jw-feature-copy">
              <div className="jw-feature-meta">
                <span>{feature.category}</span>
                <span>
                  <Clock3 size={12} /> {feature.readTime}
                </span>
              </div>
              <h2>{feature.title}</h2>
              <p>{feature.excerpt}</p>
              <div className="jw-feature-byline">
                <span className="jw-author-mark">CR</span>
                <div>
                  <strong>Carlos Reyna</strong>
                  <span>YOUR TEACHER & YOUR NEIGHBOR</span>
                </div>
              </div>
              <span className="jw-feature-read">
                Read the story{' '}
                <span>
                  <ArrowUpRight size={22} />
                </span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <Journal stories={stories} />

      <section className="jw-editor">
        <div className="container jw-editor-grid">
          <div className="jw-editor-copy" data-reveal>
            <span className="jw-eyebrow">A NOTE FROM CARLOS</span>
            <h2>
              From my side
              <br />
              <em>of the table.</em>
            </h2>
            <p>
              I started this journal for the little things that make a language feel more like
              yours: a useful phrase, a better question, a way to keep going when you get stuck.
            </p>
            <p>
              These notes come from teaching English and Spanish, living between languages, and
              hearing the same hopeful question from students: “How do I say this?”
            </p>
            <div className="jw-editor-signoff">
              <span>Carlos Reyna</span>
              <Link href="/sobre-carlos/">
                Meet your teacher <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <figure className="jw-editor-art" data-reveal>
            <Image
              src="/images/journal-quotation.webp"
              width={1200}
              height={943}
              alt="Original ivory and citron ceramic quotation marks with a forest-green pencil"
              sizes="(max-width: 900px) 90vw, 43vw"
            />
            <figcaption>GOOD WORDS BEGIN WITH A LITTLE CURIOSITY.</figcaption>
          </figure>
        </div>
      </section>

      <section className="jw-next">
        <div className="container jw-next-grid" data-reveal>
          <div>
            <span className="jw-eyebrow">TAKE IT OFF THE PAGE.</span>
            <h2>
              Read it. Say it.
              <br />
              <em>Make it yours.</em>
            </h2>
          </div>
          <div>
            <p>
              Ready to put a few good words into practice? Let’s work on the conversations that
              matter to you.
            </p>
            <BookButton>Let’s find your words</BookButton>
            <span className="jw-next-note">
              English & Spanish. Private. In person in Puerto Plata.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
