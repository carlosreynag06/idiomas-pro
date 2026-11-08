import Link from 'next/link';
import { AboutCarlos } from './about-carlos';
import { LanguagesPage } from './languages-page';
import { PricingPage } from './pricing-page';
import { ArrowUpRight } from 'lucide-react';
import { BookButton } from './site-shell';
import { CTA, Eyebrow, PageIntro, StoryCards } from './shared';
import { JournalPage } from './journal-page';
import type { PageName } from '@/lib/site';

function Testimonials() {
  return (
    <>
      <PageIntro
        eyebrow="THE MOMENTS WE WORK TOWARD"
        title="Sometimes, progress"
        italic="sounds like this."
        description="The first confident check-in. A chat with a neighbor. The answer you didn’t have to rehearse. This is what we’re here for."
      />
      <section className="section testimonials-page">
        <div className="container">
          <div className="editorial-note">
            <span className="eyebrow">A NOTE FOR THIS FIRST EDITION</span>
            <p>
              The stories below are illustrative examples for this website’s design. Names, quotes,
              and experiences are sample content, ready to be replaced with verified student
              testimonials before public launch.
            </p>
          </div>
          <StoryCards full />
        </div>
      </section>
      <section className="outcomes-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>PROGRESS HAS A PERSONAL SOUND</Eyebrow>
              <h2>
                What would your
                <br />
                <em>turning point be?</em>
              </h2>
            </div>
            <p>
              No two goals sound the same.
              <br />
              That’s why no two plans are identical.
            </p>
          </div>
          <div className="outcomes-grid">
            <article>
              <span>01</span>
              <h3>
                “I’m ready for
                <br />
                that interview.”
              </h3>
              <p>
                Practice talking about your experience in English, with answers that feel natural
                and honest.
              </p>
              <BookButton className="text-link" language="English">
                That sounds like me
              </BookButton>
            </article>
            <article>
              <span>02</span>
              <h3>
                “I feel more
                <br />
                at home here.”
              </h3>
              <p>
                Learn the Spanish that brings you closer to the people and places around you in
                Puerto Plata.
              </p>
              <BookButton className="text-link" language="Spanish">
                That sounds like me
              </BookButton>
            </article>
            <article>
              <span>03</span>
              <h3>
                “I just kept
                <br />
                the conversation going.”
              </h3>
              <p>
                Build the habits and confidence to keep trying, even when you don’t have every word.
              </p>
              <BookButton className="text-link">That sounds like me</BookButton>
            </article>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function InnerPage({ page }: { page: PageName }) {
  return (
    <main
      id="main"
      className={
        page === 'about'
          ? 'about-page'
          : page === 'languages'
            ? 'languages-page'
            : page === 'pricing'
              ? 'lesson-pricing-page'
              : page === 'blog'
                ? 'journal-page'
                : undefined
      }
    >
      {page === 'about' ? (
        <AboutCarlos />
      ) : page === 'languages' ? (
        <LanguagesPage />
      ) : page === 'pricing' ? (
        <PricingPage />
      ) : page === 'testimonials' ? (
        <Testimonials />
      ) : page === 'blog' ? (
        <JournalPage />
      ) : null}
    </main>
  );
}
