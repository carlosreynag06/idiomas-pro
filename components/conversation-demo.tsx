'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, RotateCcw, Volume2 } from 'lucide-react';

const conversations = [
  {
    situation: 'YOUR FIRST REAL CONVERSATION',
    prompt: '“So, tell me a little about yourself.”',
    reply: '“I’m learning English because I want to…”',
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
    prompt: '“Tell me a little about yourself.”',
    reply: '“I enjoy helping people feel at home.”',
    translation: 'Your experience. Now with the words to share it.',
  },
];
export function ConversationDemo() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [playing, setPlaying] = useState(false);
  const current = conversations[index];
  useEffect(() => {
    if (!playing) return;
    let char = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setTyped(current.reply);
      setPlaying(false);
      return;
    }
    const timer = window.setInterval(() => {
      char++;
      setTyped(current.reply.slice(0, char));
      if (char >= current.reply.length) {
        clearInterval(timer);
        setPlaying(false);
      }
    }, 28);
    return () => clearInterval(timer);
  }, [playing, current.reply]);
  function next() {
    setIndex((i) => (i + 1) % conversations.length);
    setTyped('');
    setPlaying(false);
  }
  return (
    <div className="conversation-demo">
      <div className="demo-top">
        <span>
          <span className="status-dot" /> REAL LIFE, REHEARSED
        </span>
        <span>0{index + 1} / 03</span>
      </div>
      <div className="demo-situation">{current.situation}</div>
      <div className="demo-bubble teacher">
        <Volume2 size={19} />
        <p>{current.prompt}</p>
        <span>CARLOS</span>
      </div>
      <div className={`demo-bubble student ${typed ? 'has-reply' : ''}`}>
        <p aria-live="polite">
          {typed || 'Your turn…'}
          {playing && <span className="typing-cursor" />}
        </p>
        <span>YOU, WITH A LITTLE PRACTICE</span>
      </div>
      <div className="demo-bottom">
        <span>{current.translation}</span>
        {!typed ? (
          <button onClick={() => setPlaying(true)} disabled={playing}>
            Find the words <ArrowRight size={17} />
          </button>
        ) : (
          <button onClick={next}>
            Another conversation <RotateCcw size={15} />
          </button>
        )}
      </div>
    </div>
  );
}
