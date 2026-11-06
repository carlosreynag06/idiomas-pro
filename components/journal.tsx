'use client';
import { useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { articles } from '@/lib/content';
import { ArticleCard } from './shared';

export function Journal() {
  const [category, setCategory] = useState('All stories');
  const [search, setSearch] = useState('');
  const categories = [
    'All stories',
    'English at work',
    'Life in Puerto Plata',
    'Spanish, out loud',
    'The learning notes',
  ];
  const filtered = articles.filter(
    (a) =>
      (category === 'All stories' || a.category === category.toUpperCase()) &&
      `${a.title} ${a.excerpt} ${a.category}`.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <section className="journal-list section">
      <div className="container">
        <div className="journal-toolbar">
          <div className="journal-filters" aria-label="Filter articles">
            {categories.map((c) => (
              <button
                key={c}
                className={category === c ? 'selected' : ''}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="journal-search">
            <Search size={17} />
            <input
              aria-label="Search journal articles"
              placeholder="Find a few words…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button onClick={() => setSearch('')} aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </label>
        </div>
        <p className="results-count" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'story' : 'stories'} to get you thinking
        </p>
        {filtered.length ? (
          <div className="article-grid journal-full-grid">
            {filtered.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No words just yet.</h2>
            <p>Try a different search or explore all the stories.</p>
            <button
              className="text-link"
              onClick={() => {
                setSearch('');
                setCategory('All stories');
              }}
            >
              Show all stories <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
