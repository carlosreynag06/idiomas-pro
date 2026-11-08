'use client';
import { useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Search, X } from 'lucide-react';
import type { Article } from '@/lib/content';

export type JournalStory = Omit<Article, 'sections'>;
const categories = [
  { label: 'All stories', value: 'all' },
  { label: 'English at work', value: 'ENGLISH AT WORK' },
  { label: 'Life in Puerto Plata', value: 'LIFE IN PUERTO PLATA' },
  { label: 'Spanish, out loud', value: 'SPANISH, OUT LOUD' },
  { label: 'Learning notes', value: 'THE LEARNING NOTES' },
];
function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function Journal({ stories }: { stories: JournalStory[] }) {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const searchId = useId();
  const query = normalize(search.trim());
  const filtered = stories.filter(
    (story) =>
      (category === 'all' || story.category === category) &&
      normalize(`${story.title} ${story.excerpt} ${story.category}`).includes(query),
  );
  function reset() {
    setCategory('all');
    setSearch('');
  }
  return (
    <section id="journal-stories" className="jw-stories" aria-labelledby="jw-stories-title">
      <div className="container">
        <div className="jw-stories-heading" data-reveal>
          <div>
            <span className="jw-eyebrow">THE READING ROOM</span>
            <h2 id="jw-stories-title">
              A few good
              <br />
              <em>places to start.</em>
            </h2>
          </div>
          <div className="jw-search-wrap">
            <label htmlFor={searchId}>LOOKING FOR SOMETHING?</label>
            <div className="jw-search">
              <Search size={18} aria-hidden="true" />
              <input
                id={searchId}
                type="search"
                autoComplete="off"
                placeholder="Try “interview” or “Spanish”"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              {search ? (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear journal search"
                >
                  <X size={17} />
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="jw-filters" role="group" aria-label="Filter journal stories by topic">
          {categories.map((item) => (
            <button
              key={item.value}
              type="button"
              aria-pressed={category === item.value}
              onClick={() => setCategory(item.value)}
            >
              {item.label}
              <span>
                {item.value === 'all'
                  ? stories.length
                  : stories.filter((story) => story.category === item.value).length}
              </span>
            </button>
          ))}
        </div>
        <div className="jw-results">
          <span role="status" aria-live="polite" aria-atomic="true">
            {String(filtered.length).padStart(2, '0')} {filtered.length === 1 ? 'STORY' : 'STORIES'}
            {query ? ' FOUND' : ' TO TAKE WITH YOU'}
          </span>
          {category !== 'all' || search ? (
            <button type="button" onClick={reset}>
              Reset filters <X size={13} />
            </button>
          ) : (
            <span>WORDS BY CARLOS REYNA · PUERTO PLATA</span>
          )}
        </div>
        {filtered.length ? (
          <div className="jw-story-grid">
            {filtered.map((story) => (
              <Link key={story.slug} href={`/blog/${story.slug}/`} className="jw-story">
                <div className="jw-story-image">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    width={720}
                    height={480}
                    sizes="(max-width: 600px) 92vw, (max-width: 1000px) 45vw, 30vw"
                    style={{ objectPosition: story.imagePosition }}
                  />
                  <span className="jw-story-open">
                    <ArrowUpRight size={22} />
                  </span>
                </div>
                <div className="jw-story-meta">
                  <span>{story.category}</span>
                  <span>{story.readTime}</span>
                </div>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <span className="jw-story-read">
                  Read the story <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="jw-empty">
            <span aria-hidden="true">?</span>
            <h3>No stories for that combination.</h3>
            <p>Try a different word, choose another topic, or start fresh with all six stories.</p>
            <button type="button" className="button" onClick={reset}>
              Explore all stories <ArrowUpRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
