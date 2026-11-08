'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { gsap } from 'gsap';

const stories = [
  {
    name: 'Mariel P.',
    role: 'Aprende inglés · Una meta profesional',
    language: 'INGLÉS',
    moment: 'UNA ENTREVISTA',
    quote:
      'La entrevista dejó de ser un guion memorizado. Empecé a responder con mis propias palabras.',
    lang: 'es',
    initial: 'M',
  },
  {
    name: 'James R.',
    role: 'Residente extranjero · Aprende español',
    language: 'ESPAÑOL',
    moment: 'UNA CONVERSACIÓN',
    quote: 'I stopped translating every word in my head. I could finally stay in the conversation.',
    lang: 'en',
    initial: 'J',
  },
  {
    name: 'Andrea M.',
    role: 'Aprende inglés · Atención al cliente',
    language: 'INGLÉS',
    moment: 'UN DÍA EN EL TRABAJO',
    quote: 'Mi primer check-in completo en inglés se sintió pequeño. Para mí, fue enorme.',
    lang: 'es',
    initial: 'A',
  },
  {
    name: 'Olivia B.',
    role: 'Residente extranjera · Aprende español',
    language: 'ESPAÑOL',
    moment: 'UNA CHARLA CON VECINOS',
    quote:
      'Spanish stopped being something I studied. It became something I used with my neighbors.',
    lang: 'en',
    initial: 'O',
  },
];
const duration = 9000;

export function TestimonialSequence() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const stage = useRef<HTMLDivElement>(null);
  const quote = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLSpanElement>(null);
  const elapsed = useRef(0);
  const running = visible && !paused && !hovered && !focused && !hidden && !reducedMotion;
  const story = stories[active];

  function select(index: number) {
    elapsed.current = 0;
    if (progress.current) progress.current.style.transform = 'scaleX(0)';
    setActive((index + stories.length) % stories.length);
  }

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener('change', update);
    const visibility = () => setHidden(document.hidden);
    visibility();
    document.addEventListener('visibilitychange', visibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.25,
    });
    if (stage.current) observer.observe(stage.current);
    return () => {
      preference.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', visibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const animation = gsap.fromTo(
      quote.current,
      { opacity: 0, y: 22, filter: 'blur(4px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.65,
        ease: 'power3.out',
        clearProps: 'all',
      },
    );
    return () => {
      animation.revert();
    };
  }, [active, reducedMotion]);

  useEffect(() => {
    if (!running) return;
    let frame = 0;
    let previous = performance.now();
    function tick(now: number) {
      elapsed.current += now - previous;
      previous = now;
      if (progress.current)
        progress.current.style.transform = `scaleX(${Math.min(elapsed.current / duration, 1)})`;
      if (elapsed.current >= duration) {
        elapsed.current = 0;
        setActive((current) => (current + 1) % stories.length);
      } else frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, running]);

  return (
    <div
      ref={stage}
      className="tp-sequence"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Historias de aprendizaje de ejemplo"
      onMouseEnter={() => {
        if (window.matchMedia('(hover: hover)').matches) setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => setFocused(event.target.matches(':focus-visible'))}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="tp-sequence-top">
        <span>{story.moment}</span>
        <span>
          {String(active + 1).padStart(2, '0')} <span>/ 04</span>
        </span>
      </div>
      <div
        ref={quote}
        className="tp-quote-content"
        aria-live={paused || focused ? 'polite' : 'off'}
        aria-atomic="true"
      >
        <blockquote lang={story.lang}>
          <span aria-hidden="true">“</span>
          {story.quote}
          <span aria-hidden="true">”</span>
        </blockquote>
        <div className="tp-attribution">
          <span className="tp-person-initial" aria-hidden="true">
            {story.initial}
          </span>
          <div>
            <strong>{story.name}</strong>
            <span>{story.role}</span>
          </div>
          <span className="tp-language-stamp">{story.language}</span>
        </div>
      </div>
      <div className="tp-sequence-controls">
        <div className="tp-story-progress" role="group" aria-label="Elegir una historia">
          {stories.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Ver historia ${index + 1}: ${item.name}`}
              aria-pressed={index === active}
              onClick={() => select(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span className="tp-progress-track">
                <span
                  ref={index === active ? progress : null}
                  style={{ transform: `scaleX(${index < active ? 1 : 0})` }}
                />
              </span>
            </button>
          ))}
        </div>
        <div className="tp-sequence-buttons">
          <button type="button" onClick={() => select(active - 1)} aria-label="Historia anterior">
            <ArrowLeft size={19} />
          </button>
          <button
            type="button"
            onClick={() => {
              if (paused) setFocused(false);
              setPaused((current) => !current);
            }}
            aria-pressed={paused}
            disabled={reducedMotion}
            aria-label={
              reducedMotion
                ? 'Reproducción automática desactivada por tu preferencia de movimiento reducido'
                : paused
                  ? 'Reanudar historias automáticas'
                  : 'Pausar historias automáticas'
            }
          >
            {paused || reducedMotion ? <Play size={15} /> : <Pause size={15} />}
          </button>
          <button type="button" onClick={() => select(active + 1)} aria-label="Siguiente historia">
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
      <div className="tp-sequence-caption">
        <span>CLASES PRIVADAS. CONVERSACIONES PERSONALES.</span>
        <span>
          {reducedMotion
            ? 'Usa las flechas para cambiar de historia.'
            : 'Historias en secuencia · Puedes pausarlas.'}
        </span>
      </div>
    </div>
  );
}
