'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight, Check, MessageCircle, Pause, Play } from 'lucide-react';
import { gsap } from 'gsap';
import './conversation-demo.css';

const conversations = [
  {
    situation: 'YOUR FIRST REAL CONVERSATION',
    prompt: '“So, tell me a little about yourself.”',
    reply: '“I’m learning English to open new doors.”',
    translation: 'Your ideas. Your words. A little more confidence.',
  },
  {
    situation: 'AT YOUR NEIGHBORHOOD CAFÉ',
    prompt: '“¡Buenas! ¿Qué te gustaría tomar?”',
    reply: '“Un café, por favor. ¿Cómo va tu día?”',
    translation: 'A little Spanish. A new connection.',
  },
  {
    situation: 'IN YOUR NEXT INTERVIEW',
    prompt: '“Why would you like to work with us?”',
    reply: '“I love helping people feel welcome.”',
    translation: 'Your experience. Now with the words to share it.',
  },
];
const CYCLE_DURATION = 9;

export function ConversationDemo() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const teacherRef = useRef<HTMLDivElement>(null);
  const studentRef = useRef<HTMLDivElement>(null);
  const replyRef = useRef<HTMLSpanElement>(null);
  const dotsRef = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const takeawayRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const activeRef = useRef(false);
  const active = inView && pageVisible && !paused && reducedMotion === false;
  const current = conversations[index];

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updatePreference();
    updateVisibility();
    preference.addEventListener('change', updatePreference);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.3),
      { threshold: [0, 0.3] },
    );
    if (rootRef.current) observer.observe(rootRef.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', updatePreference);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    activeRef.current = active;
    timelineRef.current?.paused(!active);
  }, [active]);

  useLayoutEffect(() => {
    if (reducedMotion !== false) return;
    const root = rootRef.current;
    const scene = sceneRef.current;
    const teacher = teacherRef.current;
    const student = studentRef.current;
    const reply = replyRef.current;
    const dots = dotsRef.current;
    const caret = caretRef.current;
    const success = successRef.current;
    const takeaway = takeawayRef.current;
    const progress = progressRef.current;
    if (
      !root ||
      !scene ||
      !teacher ||
      !student ||
      !reply ||
      !dots ||
      !caret ||
      !success ||
      !takeaway ||
      !progress
    )
      return;
    const conversation = conversations[index];
    const typingDuration = Math.min(1.85, Math.max(1.15, conversation.reply.length * 0.034));
    const completeAt = 3.1 + typingDuration;
    root.classList.add('is-animated');
    const context = gsap.context(() => {
      reply.textContent = '';
      gsap.set(scene, { autoAlpha: 1, x: 0, y: 0, rotation: 0 });
      gsap.set(teacher, { autoAlpha: 0, x: -26, y: 12, scale: 0.96, rotation: -2 });
      gsap.set(student, { autoAlpha: 0, x: 26, y: 14, scale: 0.94, rotation: 2 });
      gsap.set([dots, caret, success, takeaway], { autoAlpha: 0 });
      gsap.set(success, { scale: 0.25, rotation: -45 });
      gsap.set(progress, { scaleX: 0, transformOrigin: 'left center' });
      const characters = { count: 0 };
      const timeline = gsap.timeline({
        paused: true,
        onComplete: () => setIndex((value) => (value + 1) % conversations.length),
      });
      timelineRef.current = timeline;
      timeline
        .fromTo(
          '.demo-situation',
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: 0.32 },
          0,
        )
        .to(
          teacher,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.62,
            ease: 'back.out(1.35)',
          },
          0.16,
        )
        .to(
          student,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.58,
            ease: 'back.out(1.35)',
          },
          1.5,
        )
        .set(dots, { autoAlpha: 1 }, 1.6)
        .to(dots, { autoAlpha: 0, duration: 0.18 }, 2.9)
        .set(caret, { autoAlpha: 1 }, 3.1)
        .to(
          characters,
          {
            count: conversation.reply.length,
            duration: typingDuration,
            ease: 'none',
            snap: 'count',
            onUpdate: () => {
              reply.textContent = conversation.reply.slice(0, characters.count);
            },
          },
          3.1,
        )
        .set(caret, { autoAlpha: 0 }, completeAt + 0.1)
        .to(
          student,
          { scale: 1.025, duration: 0.18, repeat: 1, yoyo: true, ease: 'power1.inOut' },
          completeAt,
        )
        .to(
          success,
          { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(2.5)' },
          completeAt + 0.1,
        )
        .fromTo(takeaway, { y: 8 }, { autoAlpha: 1, y: 0, duration: 0.4 }, completeAt + 0.2)
        .to(
          scene,
          { autoAlpha: 0, x: -16, y: -6, rotation: -0.5, duration: 0.38, ease: 'power2.in' },
          CYCLE_DURATION - 0.38,
        )
        .to(takeaway, { autoAlpha: 0, duration: 0.2 }, CYCLE_DURATION - 0.2)
        .to(progress, { scaleX: 1, duration: CYCLE_DURATION, ease: 'none' }, 0);
      if (activeRef.current) timeline.play();
    }, root);
    return () => {
      timelineRef.current = null;
      context.revert();
      root.classList.remove('is-animated');
      reply.textContent = conversation.reply;
    };
  }, [index, reducedMotion]);

  return (
    <div
      ref={rootRef}
      className="conversation-demo"
      role="group"
      aria-label="Automatic conversation practice preview"
      data-playing={active}
    >
      <div className="demo-top">
        <span>
          <span className="demo-live-wave" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>{' '}
          REAL LIFE, REHEARSED
        </span>
        <span>0{index + 1} / 03</span>
      </div>
      <div ref={sceneRef} className="demo-scene">
        <div className="demo-situation">{current.situation}</div>
        <div ref={teacherRef} className="demo-bubble teacher">
          <MessageCircle size={19} aria-hidden="true" />
          <p>{current.prompt}</p>
          <span>CARLOS</span>
        </div>
        <div ref={studentRef} className="demo-bubble student has-reply">
          <p className="demo-reply-stage">
            <span className="demo-reply-spacer" aria-hidden="true">
              {current.reply}
            </span>
            <span className="demo-reply-visible" aria-hidden="true">
              <span ref={replyRef}>{current.reply}</span>
              <span ref={caretRef} className="demo-caret" />
            </span>
            <span className="demo-accessible-reply">{current.reply}</span>
            <span ref={dotsRef} className="demo-typing-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </p>
          <span>YOU, WITH A LITTLE PRACTICE</span>
          <div ref={successRef} className="demo-success" aria-hidden="true">
            <Check size={15} strokeWidth={2.5} />
          </div>
        </div>
      </div>
      <div className="demo-progress" aria-hidden="true">
        {conversations.map((conversation, step) => (
          <span
            key={conversation.situation}
            className={`demo-progress-track ${step < index ? 'is-complete' : ''} ${step === index ? 'is-current' : ''}`}
          >
            <i ref={step === index ? progressRef : undefined} />
          </span>
        ))}
      </div>
      <div className="demo-bottom">
        <span ref={takeawayRef}>{current.translation}</span>
        <button
          className="demo-playback"
          type="button"
          aria-label={
            reducedMotion
              ? 'Next conversation'
              : paused
                ? 'Play conversation animation'
                : 'Pause conversation animation'
          }
          aria-pressed={reducedMotion ? undefined : paused}
          onClick={() =>
            reducedMotion
              ? setIndex((value) => (value + 1) % conversations.length)
              : setPaused((value) => !value)
          }
        >
          {reducedMotion ? (
            <>
              Next <ArrowRight size={16} />
            </>
          ) : paused ? (
            <>
              Play <Play size={15} />
            </>
          ) : (
            <>
              Pause <Pause size={15} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
