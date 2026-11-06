'use client';
import { useState } from 'react';
import { faqs } from '@/lib/content';
import { FAQList } from './shared';
export function FAQBrowser() {
  const [category, setCategory] = useState('All questions');
  const categories = ['All questions', 'Getting started', 'Your lessons', 'The practical details'];
  return (
    <section className="section faq-page-content">
      <div className="container faq-layout">
        <div className="faq-categories" aria-label="Question categories">
          {categories.map((c) => (
            <button
              key={c}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={category === c ? 'selected' : ''}
            >
              {c}
              <span>↗</span>
            </button>
          ))}
        </div>
        <FAQList
          items={category === 'All questions' ? faqs : faqs.filter((f) => f.category === category)}
        />
      </div>
    </section>
  );
}
