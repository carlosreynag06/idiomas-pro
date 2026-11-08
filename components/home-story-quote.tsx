'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

type Story = { name: string; role: string; quote: string; language: string };
const topics = ['Career goals', 'Everyday Spanish', 'New confidence'];

export function HomeStoryQuote({ stories }: { stories: Story[] }) {
  const [active, setActive] = useState(0);
  const content = useRef<HTMLDivElement>(null);
  const story = stories[active];
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const animation = gsap.fromTo(
      content.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', clearProps: 'all' },
    );
    return () => {
      animation.revert();
    };
  }, [active]);
  return (
    <>
      <div className="home-voice-meta">
        <span>SAMPLE LEARNING STORIES</span>
        <span>0{active + 1} / 03</span>
      </div>
      <div ref={content} className="home-voice-content" aria-live="polite" aria-atomic="true">
        <span className="home-voice-mark" aria-hidden="true">
          “
        </span>
        <blockquote>{story.quote}</blockquote>
        <div className="home-voice-author">
          <div>
            <strong>{story.name}</strong>
            <span>{story.role}</span>
          </div>
          <span className="home-voice-language">Learning {story.language}</span>
        </div>
      </div>
      <div className="home-voice-choices" role="group" aria-label="Choose a learning story">
        {stories.map((item, index) => (
          <button
            type="button"
            key={item.name}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            {topics[index]}
          </button>
        ))}
      </div>
    </>
  );
}
