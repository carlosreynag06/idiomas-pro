'use client';
import { useState } from 'react';
import { Check, Clock3 } from 'lucide-react';
import { lessonPlans } from '@/lib/lesson-plans';
import { BookButton } from './site-shell';

export function PricingPlans() {
  const [language, setLanguage] = useState<'English' | 'Spanish'>('English');
  return (
    <>
      <div className="pp-plan-toolbar">
        <div className="pp-language-toggle" role="group" aria-label="Choose your lesson language">
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
        <span>
          Same price. Either language.
          <br />
          <strong>All rates in Dominican pesos (RD$).</strong>
        </span>
      </div>
      <div className="pp-plan-grid">
        {lessonPlans.map((plan) => (
          <article
            key={plan.name}
            className={`pp-plan ${plan.featured ? 'pp-plan-featured' : ''}`}
            data-reveal
          >
            <div className="pp-plan-top">
              <span className="pp-lesson-count">
                {plan.lessons}
                <span>{plan.lessons === 1 ? 'LESSON' : 'LESSONS'}</span>
              </span>
              <span className="pp-plan-tag">
                {plan.featured
                  ? 'A GOOD RHYTHM TO START'
                  : plan.lessons === 1
                    ? 'A LITTLE ROOM TO BEGIN'
                    : 'GIVE YOUR GOAL SOME SPACE'}
              </span>
            </div>
            <h3>{plan.name}</h3>
            <p className="pp-plan-description">{plan.desc}</p>
            <div className="pp-plan-price">
              <span>RD$</span>
              {plan.price}
            </div>
            <span className="pp-plan-frequency">
              {plan.lessons === 1 ? 'One private lesson' : `${plan.lessons} private lessons`}{' '}
              <span>·</span> <Clock3 size={12} /> 60 min each
            </span>
            <div className="pp-plan-value">
              <strong>
                RD${plan.perLesson} <span>/ lesson</span>
              </strong>
              <span>
                {plan.savings
                  ? `Save RD$${plan.savings} vs. single lessons`
                  : 'A simple first step, at your own pace'}
              </span>
            </div>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
            <BookButton
              language={language}
              plan={`${plan.name} — ${plan.lessons} ${plan.lessons === 1 ? 'lesson' : 'lessons'}`}
              className={`button ${plan.featured ? 'pp-button-citron' : ''}`}
            >
              {plan.lessons === 1
                ? 'Start with one lesson'
                : `Choose ${plan.lessons === 4 ? 'four' : 'eight'} lessons`}
            </BookButton>
          </article>
        ))}
      </div>
      <p className="pp-rate-note">
        Illustrative launch pricing. Final rates, availability, payment, and lesson arrangements are
        confirmed personally with Carlos before booking.
      </p>
    </>
  );
}
