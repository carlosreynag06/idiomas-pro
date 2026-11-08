import { TestimoniosPage } from './testimonios-page';
import { AboutCarlos } from './about-carlos';
import { LanguagesPage } from './languages-page';
import { PricingPage } from './pricing-page';

import { JournalPage } from './journal-page';
import type { PageName } from '@/lib/site';

export function InnerPage({ page }: { page: PageName }) {
  return (
    <main
      id="main"
      lang={page === 'testimonials' ? 'es' : undefined}
      className={
        page === 'about'
          ? 'about-page'
          : page === 'languages'
            ? 'languages-page'
            : page === 'pricing'
              ? 'lesson-pricing-page'
              : page === 'blog'
                ? 'journal-page'
                : page === 'testimonials'
                  ? 'testimonios-page'
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
        <TestimoniosPage />
      ) : page === 'blog' ? (
        <JournalPage />
      ) : null}
    </main>
  );
}
