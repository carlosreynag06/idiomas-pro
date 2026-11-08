'use client';

import { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Check, MessageCircle, Sprout } from 'lucide-react';
import { BookButton } from './site-shell';

type Language = 'English' | 'Spanish';
const goals = [
  { id: 'everyday', title: 'Everyday life', icon: MessageCircle },
  { id: 'work', title: 'Work & opportunities', icon: BriefcaseBusiness },
  { id: 'beginning', title: 'Starting from zero', icon: Sprout },
] as const;
type Goal = (typeof goals)[number]['id'];
const samples: Record<
  Language,
  Record<Goal, { title: string; prompt: string; reply: string; takeaway: string; skills: string[] }>
> = {
  English: {
    everyday: {
      title: 'Getting to know someone',
      prompt: 'What do you like to do after work?',
      reply: 'I like spending time with my family. What about you?',
      takeaway: 'A simple answer becomes a conversation.',
      skills: ['Talking about your life', 'Asking a follow-up question', 'Natural pronunciation'],
    },
    work: {
      title: 'Your next interview',
      prompt: 'What would you bring to this role?',
      reply: 'I enjoy working with people, and I’m good at finding solutions.',
      takeaway: 'Your experience, expressed in your own words.',
      skills: ['Useful work vocabulary', 'Clear, confident answers', 'Practice with feedback'],
    },
    beginning: {
      title: 'Your very first introduction',
      prompt: 'Hi! What’s your name?',
      reply: 'My name is Ana. It’s nice to meet you.',
      takeaway: 'A small first step you can use right away.',
      skills: [
        'Essential first phrases',
        'Building a simple sentence',
        'Getting comfortable speaking',
      ],
    },
  },
  Spanish: {
    everyday: {
      title: 'Making plans with a neighbor',
      prompt: '¿Quieres tomar un café mañana?',
      reply: '¡Claro! ¿A qué hora te viene bien?',
      takeaway: 'From understanding an invitation to making a connection.',
      skills: [
        'Everyday local expressions',
        'Listening for the details',
        'Keeping the conversation going',
      ],
    },
    work: {
      title: 'A conversation at work',
      prompt: '¿Podemos hablar del proyecto esta tarde?',
      reply: 'Sí, estoy disponible después de las dos.',
      takeaway: 'Useful Spanish for the things you need to get done.',
      skills: ['Workplace vocabulary', 'Making plans clearly', 'Listening and responding'],
    },
    beginning: {
      title: 'Your first few words',
      prompt: '¡Hola! ¿Cómo te llamas?',
      reply: 'Me llamo Alex. Mucho gusto.',
      takeaway: 'A little Spanish. A real beginning.',
      skills: ['Useful introductions', 'Sounds and pronunciation', 'The confidence to try'],
    },
  },
};

export function LessonPreview() {
  const [language, setLanguage] = useState<Language>('English');
  const [goal, setGoal] = useState<Goal>('everyday');
  const sample = samples[language][goal];
  return (
    <div className="lp-lesson-preview" data-reveal>
      <div className="lp-preview-controls">
        <span className="lp-preview-label">MAKE IT FEEL LIKE YOU</span>
        <div
          className="lp-preview-languages"
          role="group"
          aria-label="Choose a sample lesson language"
        >
          {(['English', 'Spanish'] as const).map((value) => (
            <button
              type="button"
              key={value}
              aria-pressed={language === value}
              onClick={() => setLanguage(value)}
            >
              {value}
              <span>{value === 'English' ? 'EN' : 'ES'}</span>
            </button>
          ))}
        </div>
        <p>What would you like to work on?</p>
        <div className="lp-preview-goals" role="group" aria-label="Choose a sample lesson goal">
          {goals.map((item) => (
            <button
              type="button"
              key={item.id}
              aria-pressed={goal === item.id}
              onClick={() => setGoal(item.id)}
            >
              <item.icon size={20} strokeWidth={1.6} />
              <span>{item.title}</span>
              <ArrowUpRight size={17} />
            </button>
          ))}
        </div>
        <span className="lp-preview-footnote">
          A small example, not a fixed syllabus.
          <br />
          Your lessons are shaped around you.
        </span>
      </div>
      <div className="lp-preview-result" aria-live="polite" aria-atomic="true">
        <div key={`${language}-${goal}`} className="lp-preview-scene">
          <div className="lp-preview-scene-top">
            <span>SAMPLE CONVERSATION</span>
            <span>
              {language === 'English' ? 'EN' : 'ES'} /{' '}
              {String(goals.findIndex((item) => item.id === goal) + 1).padStart(2, '0')}
            </span>
          </div>
          <h3>{sample.title}</h3>
          <div className="lp-sample-message lp-sample-carlos">
            <span>CARLOS</span>
            <p lang={language === 'Spanish' ? 'es' : 'en'}>“{sample.prompt}”</p>
          </div>
          <div className="lp-sample-message lp-sample-you">
            <span>YOU, WITH A LITTLE PRACTICE</span>
            <p lang={language === 'Spanish' ? 'es' : 'en'}>“{sample.reply}”</p>
          </div>
          <p className="lp-sample-takeaway">{sample.takeaway}</p>
          <ul className="lp-preview-skills">
            {sample.skills.map((skill) => (
              <li key={skill}>
                <Check size={14} />
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="lp-preview-book">
          <span>Let’s practice your next conversation.</span>
          <BookButton language={language} className="button button-small">
            Start my {language}
          </BookButton>
        </div>
      </div>
    </div>
  );
}
