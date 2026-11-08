import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Plus,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react';
import { BookButton } from './site-shell';
import { Eyebrow } from './shared';
import { LessonPreview } from './lesson-preview';
import './languages-page.css';

const englishFocus = [
  ['Everyday English', 'Introduce yourself, share your ideas, and keep a conversation going.'],
  ['English for work', 'Interviews, customer conversations, and speaking up with confidence.'],
  [
    'A foundation that makes sense',
    'Build useful vocabulary, pronunciation, and grammar you can put into practice.',
  ],
];
const spanishFocus = [
  ['Your everyday life', 'Get things done, make plans, and get to know the people around you.'],
  [
    'Listening that keeps up',
    'Understand the reply, ask a follow-up question, and feel part of the conversation.',
  ],
  ['A comfortable beginning', 'Start from your first words or connect what you already know.'],
];
const questions = [
  [
    'Can I start as a complete beginner?',
    'Absolutely. We start with what you know, even if that is just a word or two. Carlos explains things patiently and gives you useful language to practice from the beginning.',
  ],
  [
    'Are the classes private and in person?',
    'Yes. Every lesson is one-to-one with Carlos in Puerto Plata. We agree on a suitable meeting place and schedule directly before you begin. Lessons are face to face; there are no video classes.',
  ],
  [
    'Can we focus on a specific work or personal goal?',
    'Yes. Tell Carlos what you want to be able to do: prepare for an interview, speak more naturally at work, understand local conversations, or feel more comfortable in everyday life. Your goal helps shape your lessons.',
  ],
  [
    'How do I choose a level or a plan?',
    'You do not need to figure that out on your own. Start with an inquiry about your goals and current experience. Carlos will help you choose a sensible starting point, pace, and lesson plan.',
  ],
];

function FocusList({ items }: { items: string[][] }) {
  return (
    <div className="lp-focus-list">
      {items.map(([title, text], index) => (
        <div key={title}>
          <span>0{index + 1}</span>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function LanguagesPage() {
  return (
    <>
      <section className="lp-hero">
        <div className="container lp-hero-grid">
          <div className="lp-hero-copy">
            <div className="hero-animate">
              <Eyebrow>ENGLISH & SPANISH · IN PERSON · WITH CARLOS</Eyebrow>
            </div>
            <h1 className="hero-animate">
              Find the words.
              <br />
              <em>Make them yours.</em>
            </h1>
            <p className="hero-animate">
              For the things you want to say.
              <br />
              And the life you want to say them in.
            </p>
            <div className="lp-language-choices hero-animate">
              <a href="#english" className="button">
                Explore English <ArrowDown size={18} />
              </a>
              <a href="#spanish" className="button lp-button-outline">
                Explore Spanish <ArrowDown size={18} />
              </a>
            </div>
            <span className="lp-hero-location hero-animate">
              <MapPin size={15} /> Private lessons in Puerto Plata, Dominican Republic.
            </span>
          </div>
          <figure className="lp-hero-art hero-animate">
            <div className="lp-art-orbit" aria-hidden="true" />
            <Image
              className="hero-photo"
              src="/images/languages-alphabet.webp"
              width={1200}
              height={975}
              alt="Original ceramic alphabet sculpture: a forest-green a and a citron ñ representing English and Spanish"
              sizes="(max-width: 900px) 90vw, 47vw"
              preload
            />
            <figcaption>
              <span>DIFFERENT WORDS.</span>
              <em>Same you.</em>
              <span>EN / ES</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="english" className="lp-course lp-english" aria-labelledby="english-title">
        <div className="container lp-course-grid">
          <figure className="lp-course-visual" data-reveal>
            <div className="lp-course-photo">
              <Image
                src="/images/languages-english.webp"
                width={1122}
                height={1402}
                alt="Illustrative Dominican adult learner practicing an English conversation across a learning table"
                sizes="(max-width: 900px) 90vw, 43vw"
              />
              <span className="lp-image-code">
                EN<span>01</span>
              </span>
            </div>
            <figcaption>
              <span>MORE CONFIDENCE IN WHAT COMES NEXT.</span>
              <ArrowUpRight size={17} />
            </figcaption>
          </figure>
          <div className="lp-course-copy" data-reveal>
            <Eyebrow>ENGLISH FOR SPANISH SPEAKERS</Eyebrow>
            <h2 id="english-title">
              English for
              <br />
              <em>your next move.</em>
            </h2>
            <p>
              New opportunities start with being able to express yourself. Learn English with a
              teacher who understands the journey, and lessons built around the conversations you
              want to have.
            </p>
            <div className="lp-levels">
              <span>First words</span>
              <span>Fresh starts</span>
              <span>Better conversations</span>
            </div>
            <FocusList items={englishFocus} />
            <div className="lp-course-actions">
              <BookButton language="English">Let’s work on my English</BookButton>
              <Link href="/pricing/" className="lp-inline-link">
                View pricing <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-personal-band" aria-label="How the lessons work">
        <div className="container lp-personal-grid">
          {[
            {
              icon: UserRoundCheck,
              title: 'One-to-one. All about you.',
              copy: 'Your level, your goals, your own pace.',
            },
            {
              icon: UsersRound,
              title: 'Face to face. Every time.',
              copy: 'Private lessons, right here in Puerto Plata.',
            },
            {
              icon: MessageCircle,
              title: 'Always with Carlos.',
              copy: 'A teacher who gets to know how you learn.',
            },
          ].map((item) => (
            <div key={item.title}>
              <item.icon size={31} strokeWidth={1.4} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="spanish" className="lp-course lp-spanish" aria-labelledby="spanish-title">
        <div className="container lp-course-grid">
          <div className="lp-course-copy" data-reveal>
            <Eyebrow>SPANISH FOR FOREIGNERS</Eyebrow>
            <h2 id="spanish-title">
              Spanish for
              <br />
              <em>feeling at home.</em>
            </h2>
            <p>
              There’s a different kind of freedom in understanding the people around you. Build your
              Spanish around everyday life in Puerto Plata, with space to ask, listen, and try
              again.
            </p>
            <div className="lp-levels">
              <span>New to Spanish</span>
              <span>Picking it back up</span>
              <span>Ready to talk more</span>
            </div>
            <FocusList items={spanishFocus} />
            <div className="lp-course-actions">
              <BookButton language="Spanish">Let’s work on my Spanish</BookButton>
              <Link href="/pricing/" className="lp-inline-link">
                View pricing <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <figure className="lp-course-visual" data-reveal>
            <div className="lp-course-photo">
              <Image
                src="/images/languages-spanish.webp"
                width={1122}
                height={1402}
                alt="Illustrative adult Spanish learner listening and taking notes during a private in-person lesson"
                sizes="(max-width: 900px) 90vw, 43vw"
              />
              <span className="lp-image-code">
                ES<span>02</span>
              </span>
            </div>
            <figcaption>
              <span>A LITTLE MORE LOCAL. A LITTLE MORE YOU.</span>
              <ArrowUpRight size={17} />
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="lp-practice">
        <div className="container">
          <div className="lp-section-heading" data-reveal>
            <div>
              <Eyebrow>A PEEK INSIDE A LESSON</Eyebrow>
              <h2>
                Small conversations.
                <br />
                <em>Real possibilities.</em>
              </h2>
            </div>
            <p>
              Choose a language and a situation. Here’s a little of what we could practice together.
            </p>
          </div>
          <LessonPreview />
        </div>
      </section>

      <section className="lp-start">
        <div className="container">
          <div className="lp-section-heading" data-reveal>
            <div>
              <Eyebrow>PERSONAL FROM THE FIRST HELLO</Eyebrow>
              <h2>
                A starting point.
                <br />
                <em>With your name on it.</em>
              </h2>
            </div>
            <Link href="/about/" className="lp-inline-link">
              Get to know Carlos <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="lp-start-steps">
            {[
              [
                'Tell me what brings you here.',
                'Your goals, what you already know, and what you would love to feel more comfortable saying.',
              ],
              [
                'We find your rhythm.',
                'Together, we choose a starting point, a schedule, and an in-person meeting arrangement that fit your life.',
              ],
              [
                'You start making it yours.',
                'A little speaking, useful feedback, and steady practice. Each lesson builds on the one before.',
              ],
            ].map(([title, text], index) => (
              <article key={title} data-reveal>
                <div>
                  <span>0{index + 1}</span>
                  <ArrowUpRight size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-faq">
        <div className="container lp-faq-grid">
          <div data-reveal>
            <Eyebrow>A FEW GOOD QUESTIONS</Eyebrow>
            <h2>
              Before your
              <br />
              <em>first words.</em>
            </h2>
            <p>
              No need to have it all figured out.
              <br />
              That’s what the first conversation is for.
            </p>
            <Link href="/faq/" className="lp-inline-link">
              Explore all FAQs <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="lp-questions" data-reveal>
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

      <section className="lp-next">
        <div className="container" data-reveal>
          <span className="lp-next-eyebrow">YOUR WORDS ARE WAITING.</span>
          <h2>
            Pick a language.
            <br />
            <em>Bring a reason.</em>
          </h2>
          <p>You bring the goal. I’ll help you find the words.</p>
          <div className="lp-next-actions">
            <BookButton language="English">I’m here for English</BookButton>
            <BookButton language="Spanish" className="button lp-button-outline">
              I’m here for Spanish
            </BookButton>
          </div>
          <span className="lp-next-note">Private. In person. With Carlos Reyna.</span>
        </div>
      </section>
    </>
  );
}
