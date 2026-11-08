'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function BackstoryTimeline({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const nodes = Array.from(element.querySelectorAll<HTMLElement>('[data-chapter-node]'));
    if (nodes.length < 2) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    function update() {
      frame = 0;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const centers = nodes.map((node) => {
        const box = node.getBoundingClientRect();
        return box.top + box.height / 2;
      });
      const height = centers.at(-1)! - centers[0];
      const readingLine = window.innerHeight * 0.66;
      const progress = preference.matches
        ? 1
        : Math.max(0, Math.min(1, (readingLine - centers[0]) / Math.max(height, 1)));
      element.style.setProperty('--track-top', `${centers[0] - rect.top}px`);
      element.style.setProperty('--track-height', `${height}px`);
      element.style.setProperty('--chapter-progress', String(progress));
      nodes.forEach((node, index) => {
        node
          .closest('article')
          ?.setAttribute(
            'data-reached',
            String(preference.matches || centers[index] <= readingLine),
          );
      });
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    const observer = new ResizeObserver(schedule);
    observer.observe(element);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    preference.addEventListener('change', schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      preference.removeEventListener('change', schedule);
    };
  }, []);
  return (
    <div className="carlos-chapters" ref={root}>
      <span className="carlos-timeline-track" aria-hidden="true">
        <span className="carlos-timeline-fill" />
        <span className="carlos-timeline-tip" />
      </span>
      {children}
    </div>
  );
}
