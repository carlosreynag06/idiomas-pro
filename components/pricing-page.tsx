import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  Plus,
  UserRoundCheck,
} from 'lucide-react';
import { BookButton } from './site-shell';
import { Eyebrow } from './shared';
import { PricingPlans } from './pricing-plans';
import './pricing-page.css';

const questions = [
  [
    'Are these prices for English or Spanish?',
    'Both. The sample lesson rates are the same for English and Spanish. Every plan is private, in person, and taught by Carlos Reyna. Choose the language you want to work on when you inquire.',
  ],
  [
    'Do I have to choose a package right away?',
    'No. You can begin by discussing a single lesson or ask Carlos to help you choose. Your goals, starting point, and available time are a better guide than picking a package before you have spoken.',
  ],
  [
    'How do scheduling and payment work?',
    'You and Carlos agree on the schedule, meeting location in Puerto Plata, payment method, and timing directly. Sending an inquiry does not charge you or automatically reserve a lesson.',
  ],
  [
    'How quickly do I need to use a lesson package?',
    'Package timing and availability are agreed directly with Carlos before booking. Mention your usual availability and the pace you have in mind so you can choose a realistic schedule together.',
  ],
  [
    'What if I need to change a lesson?',
    'Contact Carlos as early as possible. Rescheduling arrangements and lesson terms are explained and agreed before you begin, so you know what to expect.',
  ],
];

export function PricingPage() {
  return (
    <>
      <section className="pp-hero">
        <div className="container pp-hero-grid">
          <div className="pp-hero-copy">
            <div className="hero-animate">
              <Eyebrow>PRIVATE LESSONS. A PERSONAL INVESTMENT.</Eyebrow>
            </div>
            <h1 className="hero-animate">
              Your time.
              <br />
              <em>Well spent.</em>
            </h1>
            <p className="hero-animate">
              English or Spanish. One teacher. Your goals. Make a little room for the things you
              want to say.
            </p>
            <div className="pp-hero-action hero-animate">
              <a href="#lesson-plans" className="button pp-button-citron">
                Find your rhythm <ArrowDown size={18} />
              </a>
              <span>
                FROM <strong>RD$1,200</strong>
                <br />
                PER PRIVATE LESSON
              </span>
            </div>
            <span className="pp-hero-location hero-animate">
              <MapPin size={14} /> In person, in Puerto Plata.
            </span>
          </div>
          <figure className="pp-hero-art hero-animate">
            <Image
              className="hero-photo"
              src="/images/pricing-momentum.webp"
              width={1200}
              height={975}
              alt="Original three-dimensional stacks of one, four and eight notebooks representing the lesson plans"
              sizes="(max-width: 900px) 90vw, 48vw"
              preload
            />
            <figcaption>
              <span>START WHERE YOU ARE.</span>
              <em>Build from there.</em>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="lesson-plans" className="pp-plans">
        <div className="container">
          <div className="pp-section-heading" data-reveal>
            <div>
              <Eyebrow>A LITTLE SPACE FOR WHAT’S NEXT</Eyebrow>
              <h2>
                Choose your
                <br />
                <em>kind of momentum.</em>
              </h2>
            </div>
            <p>
              A first conversation. A steady habit.
              <br />A little more time for your next goal.
              <br />
              There’s a good place to start.
            </p>
          </div>
          <PricingPlans />
        </div>
      </section>

      <section className="pp-included" aria-label="Included in every lesson">
        <div className="container">
          <span className="pp-included-label">WHICHEVER PLAN YOU CHOOSE</span>
          <div className="pp-included-grid">
            {[
              { icon: Clock3, title: '60 minutes', text: 'Time set aside for your learning.' },
              {
                icon: UserRoundCheck,
                title: 'One-to-one',
                text: 'Personal attention from Carlos.',
              },
              {
                icon: MessageCircle,
                title: 'Real practice',
                text: 'Language for the life you live.',
              },
            ].map((item) => (
              <div key={item.title}>
                <item.icon size={30} strokeWidth={1.4} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-attention">
        <div className="container pp-attention-grid">
          <figure data-reveal>
            <Image
              src="/images/pricing-personal-attention.webp"
              width={1536}
              height={1024}
              alt="Illustrative private lesson with a learner and tutor giving their full attention to a shared notebook"
              sizes="(max-width: 900px) 90vw, 48vw"
            />
            <figcaption>YOUR HOUR. YOUR GOALS. MY FULL ATTENTION.</figcaption>
          </figure>
          <div className="pp-attention-copy" data-reveal>
            <Eyebrow>THE VALUE IS IN THE PERSONAL PART</Eyebrow>
            <h2>
              An hour with
              <br />
              <em>your name on it.</em>
            </h2>
            <p>
              When we sit down together, the lesson is about you: the words you need, the things you
              find tricky, and the confidence you want to build.
            </p>
            <ul>
              {[
                ['A plan that listens.', 'We start with your goals and adapt as you go.'],
                ['Space to get it right.', 'Ask again, try another way, and get useful feedback.'],
                [
                  'Practice that goes with you.',
                  'Take what you learn into your next real conversation.',
                ],
              ].map(([title, text]) => (
                <li key={title}>
                  <Check size={17} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/idiomas/" className="pp-inline-link">
              See what we can work on <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pp-before">
        <div className="container">
          <div className="pp-section-heading" data-reveal>
            <div>
              <Eyebrow>BEFORE YOUR FIRST LESSON</Eyebrow>
              <h2>
                A few details.
                <br />
                <em>All agreed together.</em>
              </h2>
            </div>
            <p>
              Your inquiry starts a conversation.
              <br />
              We make the arrangements personally.
            </p>
          </div>
          <div className="pp-before-grid">
            {[
              [
                '01',
                'Your starting point.',
                'Tell me which language, what you’d like to do with it, and what you already know.',
              ],
              [
                '02',
                'Your time and place.',
                'We discuss a practical schedule and an in-person meeting arrangement in Puerto Plata.',
              ],
              [
                '03',
                'Your next step.',
                'We confirm your plan, price, and lesson terms directly. Then we put a little practice on the calendar.',
              ],
            ].map(([number, title, text]) => (
              <article key={number} data-reveal>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-faq">
        <div className="container pp-faq-grid">
          <div data-reveal>
            <Eyebrow>GOOD TO KNOW</Eyebrow>
            <h2>
              A clear plan.
              <br />
              <em>A comfortable start.</em>
            </h2>
            <p>
              A few answers before we work out
              <br />
              the details together.
            </p>
            <Link href="/preguntas-frecuentes/" className="pp-inline-link">
              More questions? Start here <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="pp-questions" data-reveal>
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <Plus size={20} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-next">
        <div className="container" data-reveal>
          <span className="pp-next-eyebrow">YOU DON’T HAVE TO FIGURE IT OUT ALONE.</span>
          <h2>
            Still choosing?
            <br />
            <em>Start with a hello.</em>
          </h2>
          <p>
            Tell me what you have in mind.
            <br />
            We’ll find a sensible starting point together.
          </p>
          <BookButton>Help me choose a plan</BookButton>
          <span className="pp-next-note">
            A friendly conversation. A plan that feels like yours.
          </span>
        </div>
      </section>
    </>
  );
}
