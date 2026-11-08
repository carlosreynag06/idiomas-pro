import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Check, MapPin, Plus } from 'lucide-react';
import { BookButton } from './site-shell';
import { Eyebrow } from './shared';
import './about-carlos.css';

const chapters = [
  {
    number: '01',
    tag: 'THE UNITED STATES · 8 YEARS',
    title: 'First, I was the one finding the words.',
    text: 'Living in the United States taught me how much a language can change your everyday life. The quick conversations. The little misunderstandings. The moment you finally feel part of things. I remember all of it when we sit down together.',
  },
  {
    number: '02',
    tag: 'THE DOMINICAN REPUBLIC · HOSPITALITY',
    title: 'Then, words became part of the job.',
    text: 'As a Front Desk Supervisor and Night Manager, I used English and Spanish to welcome people, solve problems, and make myself understood when it mattered. That experience made my teaching practical: we work on language you can actually use.',
  },
  {
    number: '03',
    tag: 'HUNDREDS OF STUDENTS · DR & US',
    title: 'Now, I help other people find theirs.',
    text: 'I’ve taught both languages to hundreds of students in the Dominican Republic and the US. Different starting points, different reasons to learn. What stays the same is the personal attention: I listen, we practice, and we find a way forward that feels like yours.',
  },
];

const promises = [
  {
    title: 'I’ll meet you where you are.',
    text: 'Starting from zero? Picking it back up? We begin with your goals and build at a pace that lets you learn with confidence.',
  },
  {
    title: 'We’ll make room for mistakes.',
    text: 'You can pause, ask again, and try another way. Patient explanations and useful feedback are part of every lesson.',
  },
  {
    title: 'We’ll use it in your real life.',
    text: 'Your next interview, a work conversation, or getting to know your neighbors. Your everyday world gives us plenty to talk about.',
  },
];

export function AboutCarlos() {
  return (
    <>
      <section className="carlos-hero">
        <div className="container carlos-hero-grid">
          <div className="carlos-intro">
            <div className="hero-animate">
              <Eyebrow>CARLOS REYNA · YOUR LANGUAGE TEACHER</Eyebrow>
            </div>
            <h1 className="hero-animate">
              I’ve been
              <br />
              in <em>your shoes.</em>
            </h1>
            <p className="carlos-hero-description hero-animate">
              A new language can feel like a big leap.
              <br className="carlos-desktop-break" /> It helps to have someone who remembers the
              first step.
            </p>
            <div className="carlos-intro-note hero-animate">
              <p>
                I’m Carlos. I teach English and Spanish, in person, here in Puerto Plata. Before I
                became a teacher, I was a language learner finding my own way. That’s still where
                every lesson starts.
              </p>
            </div>
            <div className="carlos-hero-actions hero-animate">
              <BookButton>Let’s find your words</BookButton>
              <a href="#carlos-story" className="carlos-story-link">
                A little about me <ArrowDown size={17} />
              </a>
            </div>
            <div className="carlos-signoff hero-animate">
              <span>Carlos Reyna</span>
              <p>
                FOUNDER. TEACHER.
                <br />
                ALWAYS A LEARNER.
              </p>
            </div>
          </div>
          <figure className="carlos-hero-visual hero-animate">
            <div className="carlos-hero-photo">
              <Image
                className="hero-photo"
                src="/images/about-learning-table.webp"
                alt="Hands sharing ideas and taking notes during an illustrative private language lesson"
                width={1122}
                height={1402}
                sizes="(max-width: 760px) 92vw, 44vw"
                preload
              />
            </div>
            <div className="carlos-paper-note" aria-hidden="true">
              <span>One teacher.</span>
              <em>In your corner.</em>
              <span className="carlos-note-star">✳</span>
            </div>
            <figcaption>
              <span>GOOD CONVERSATIONS START HERE.</span>
              <MapPin size={13} /> PUERTO PLATA, DR
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="carlos-facts" aria-label="Carlos’s experience">
        <div className="container carlos-facts-grid">
          <div>
            <strong>
              8<span> years</span>
            </strong>
            <p>Living & learning in the United States</p>
          </div>
          <div>
            <strong>
              100s<span> of students</span>
            </strong>
            <p>Taught in the Dominican Republic & US</p>
          </div>
          <div>
            <strong>
              2<span> languages</span>
            </strong>
            <p>One teacher who gets to know you</p>
          </div>
        </div>
      </section>

      <section id="carlos-story" className="carlos-story-section">
        <div className="container carlos-story-layout">
          <div className="carlos-story-heading" data-reveal>
            <Eyebrow>A LITTLE BACKSTORY</Eyebrow>
            <h2>
              A few chapters
              <br />
              <em>before yours.</em>
            </h2>
            <p>
              The way I teach comes from the places I’ve lived, the work I’ve done, and the people
              I’ve learned alongside.
            </p>
            <span className="carlos-margin-note">
              Life first.
              <br />
              Language all the way through. <ArrowUpRight size={24} />
            </span>
          </div>
          <div className="carlos-chapters">
            {chapters.map((chapter) => (
              <article key={chapter.number} className="carlos-chapter" data-reveal>
                <span className="carlos-chapter-number">{chapter.number}</span>
                <div>
                  <span className="carlos-chapter-tag">{chapter.tag}</span>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="carlos-approach">
        <div className="container carlos-approach-grid">
          <div className="carlos-book-panel" data-reveal>
            <span className="carlos-panel-label">A SHARED LANGUAGE STARTS WITH UNDERSTANDING.</span>
            <Image
              src="/images/about-open-book.webp"
              width={1000}
              height={857}
              alt="Original three-dimensional open book sculpture with Hello and Hola on its pages and a floating pencil"
              sizes="(max-width: 760px) 92vw, 45vw"
            />
            <p>
              Two languages.
              <br />
              <em>A very human connection.</em>
            </p>
            <span className="carlos-art-index">
              EN / ES <span>↗</span>
            </span>
          </div>
          <div className="carlos-approach-copy" data-reveal>
            <Eyebrow>MY SIDE OF THE TABLE</Eyebrow>
            <h2>
              Serious about learning.
              <br />
              <em>Easy to be yourself.</em>
            </h2>
            <div className="carlos-promises">
              {promises.map((promise) => (
                <div key={promise.title}>
                  <span className="carlos-promise-check">
                    <Check size={17} />
                  </span>
                  <div>
                    <h3>{promise.title}</h3>
                    <p>{promise.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/languages/" className="button">
              Explore the lessons <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      <section className="carlos-moment">
        <div className="carlos-moment-photo">
          <Image
            src="/images/about-finding-your-voice.webp"
            width={1536}
            height={1024}
            alt="Illustrative adult learner confidently sharing an idea in a face-to-face language lesson"
            sizes="(max-width: 760px) 100vw, 57vw"
          />
          <span className="carlos-photo-caption">THE SMALL MOMENTS THAT MAKE IT WORTH IT.</span>
        </div>
        <div className="carlos-moment-copy" data-reveal>
          <span className="carlos-quote-mark" aria-hidden="true">
            “
          </span>
          <h2>
            My favorite part?
            <br />
            <em>
              When you forget
              <br />
              to be nervous.
            </em>
          </h2>
          <p>
            When a sentence comes a little easier. When you ask a question without rehearsing it.
            When you hear yourself and think, “I can do this.” That’s the progress I’m here for.
          </p>
          <span className="carlos-moment-signature">Carlos</span>
          <span className="carlos-quote-credit">A NOTE FROM YOUR TEACHER</span>
        </div>
      </section>

      <section className="carlos-details">
        <div className="container carlos-details-grid">
          <div data-reveal>
            <Eyebrow>BEFORE WE SAY HELLO</Eyebrow>
            <h2>
              A few things
              <br />
              <em>you might wonder.</em>
            </h2>
            <Link href="/faq/" className="carlos-story-link">
              All your questions <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="carlos-questions" data-reveal>
            {[
              [
                'Will you be my teacher for every lesson?',
                'Yes. When you learn with Idiomas Pro, you learn directly with me, Carlos Reyna. I get to know your goals, your progress, and what helps things click for you.',
              ],
              [
                'Do I need to know any English or Spanish already?',
                'No. Complete beginners are welcome, and so are people who want to pick up where they left off. We start with a conversation about you and choose the right place to begin.',
              ],
              [
                'Where do the lessons happen?',
                'All lessons take place in person in Puerto Plata. We agree on the meeting location and schedule directly before your first lesson. Every lesson is private and focused on you.',
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <Plus size={20} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="carlos-next">
        <div className="container" data-reveal>
          <span className="carlos-next-kicker">ENOUGH ABOUT ME.</span>
          <h2>
            What’s <em>your story?</em>
          </h2>
          <p>
            A new job? A new home? A little more confidence?
            <br />
            Tell me what brought you here. We’ll take it from there.
          </p>
          <div className="carlos-next-actions">
            <BookButton>Say hello to Carlos</BookButton>
            <Link href="/pricing/" className="carlos-story-link">
              Take a look at pricing <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="carlos-next-bottom">
            <span>PRIVATE LESSONS. REAL CONNECTION.</span>
            <span>
              <MapPin size={14} /> IN PERSON, IN PUERTO PLATA.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
