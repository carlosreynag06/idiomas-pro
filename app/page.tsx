import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Globe2,
  MessageCircle,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { BookButton } from '@/components/site-shell';
import { CTA, Eyebrow, FAQList, JournalPreview, Steps, StoryCards } from '@/components/shared';
import { ConversationDemo } from '@/components/conversation-demo';

export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-animate">
              <Eyebrow>ENGLISH & SPANISH. IN REAL LIFE.</Eyebrow>
            </div>
            <h1 className="hero-animate">
              Your world,
              <br />
              in other
              <br />
              <em>words.</em>
              <span className="heading-spark" aria-hidden="true">
                ✳
              </span>
            </h1>
            <p className="hero-description hero-animate">
              New opportunities. Deeper connections.
              <br />
              Private language lessons that take you places.
              <br />
              <strong>In person. In Puerto Plata. With Carlos.</strong>
            </p>
            <div className="hero-buttons hero-animate">
              <BookButton>Find your first words</BookButton>
              <a href="#languages" className="hero-explore">
                A little more about us <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-note hero-animate">
              <span className="handdrawn-arrow" aria-hidden="true">
                ↳
              </span>
              <span>
                No screens between us.
                <br />
                <strong>Just a good conversation.</strong>
              </span>
            </div>
          </div>
          <div className="hero-visual hero-animate">
            <div className="hero-image-wrap">
              <Image
                className="hero-photo"
                src="/images/confident-learner.webp"
                alt="A learner finding her voice during a private, in-person language lesson"
                width={1000}
                height={1200}
                priority
                fetchPriority="high"
              />
              <div className="photo-coordinate">
                ONE TO ONE. <span>YOUR VOICE. YOUR PROGRESS.</span>
              </div>
            </div>
            <div className="hello-sticker" aria-label="Hello, hola">
              <span>Hello.</span>
              <span>Hola.</span>
              <span className="sticker-star" aria-hidden="true">
                ✳
              </span>
            </div>
            <div className="photo-caption">
              <span className="caption-line" />
              <span>
                A little practice.
                <br />
                <strong>A lot more you.</strong>
              </span>
              <MapPin size={23} />
            </div>
            <span className="photo-side-note">SMALL STEPS. REAL CONVERSATIONS.</span>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>GOOD WORDS. REAL CONNECTIONS.</span>
          <a href="#languages">
            SCROLL TO FIND YOURS <ArrowDown size={14} />
          </a>
          <span className="hero-bottom-right">LOCAL ROOTS. OPEN DOORS. ↗</span>
        </div>
      </section>
      <section className="proof-strip" aria-label="Our approach">
        <div className="container proof-inner">
          <div>
            <span className="proof-mark">01 /</span>
            <p>
              <strong>One teacher. All you.</strong>
              <span>Private lessons with Carlos Reyna</span>
            </p>
          </div>
          <div>
            <Globe2 size={29} strokeWidth={1.3} />
            <p>
              <strong>Two languages. Real life.</strong>
              <span>English & Spanish, your way</span>
            </p>
          </div>
          <div>
            <MessageCircle size={29} strokeWidth={1.3} />
            <p>
              <strong>Hundreds of students taught.</strong>
              <span>Across the Dominican Republic & US</span>
            </p>
          </div>
        </div>
      </section>
      <section className="section language-section" id="languages">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <Eyebrow>TWO LANGUAGES. YOUR NEXT CHAPTER.</Eyebrow>
              <h2>
                Where do you
                <br />
                want your words <em>to take you?</em>
              </h2>
            </div>
            <p>
              For the things you want to say.
              <br />
              For the confidence to say them.
              <br />
              There’s a conversation waiting for you.
            </p>
          </div>
          <div className="language-grid">
            <article className="language-card english-card" data-reveal>
              <div className="language-card-top">
                <span className="pill-label">FOR SPANISH SPEAKERS</span>
                <span className="language-num">01 / EN</span>
              </div>
              <div className="language-big-word">
                Hello<span>↗</span>
              </div>
              <h3>English that opens doors.</h3>
              <p>
                From finding the right words to keeping a conversation going. Learn English for your
                life, your work, and the confidence to speak up.
              </p>
              <div className="language-tags">
                <span>Everyday confidence</span>
                <span>Work & interviews</span>
                <span>Your next opportunity</span>
              </div>
              <BookButton language="English" className="language-link">
                Let’s talk English
              </BookButton>
            </article>
            <article className="language-card spanish-card" data-reveal>
              <div className="language-card-top">
                <span className="pill-label">FOR OUR INTERNATIONAL NEIGHBORS</span>
                <span className="language-num">02 / ES</span>
              </div>
              <div className="language-big-word">
                Hola<span>✳</span>
              </div>
              <h3>Spanish that feels like home.</h3>
              <p>
                Go beyond the menu. Get to know your neighbors, find your way around, and feel a
                little more local in the place you love.
              </p>
              <div className="language-tags">
                <span>Life in Puerto Plata</span>
                <span>Natural conversations</span>
                <span>Start from zero</span>
              </div>
              <BookButton language="Spanish" className="language-link">
                Let’s talk Spanish
              </BookButton>
            </article>
          </div>
          <div className="language-bottom">
            <span>
              <MapPin size={15} /> Every lesson is private and in person in Puerto Plata.
            </span>
            <Link href="/languages/">
              Find your language <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="method-section">
        <div className="container method-grid">
          <div className="method-copy" data-reveal>
            <Eyebrow light>LESS TEXTBOOK. MORE LIFE.</Eyebrow>
            <h2>
              Language is
              <br />a people <em>thing.</em>
            </h2>
            <p>
              So we keep it that way. A real person across the table. A lesson shaped around your
              life. Space to make mistakes, ask again, and find your voice.
            </p>
            <p className="method-last">
              The goal isn’t to sound perfect.
              <br />
              <strong>It’s to sound like you. In another language.</strong>
            </p>
            <Link href="/languages/" className="text-link light-link">
              This is how we learn <ArrowUpRight size={19} />
            </Link>
          </div>
          <div data-reveal>
            <ConversationDemo />
          </div>
        </div>
        <div className="method-bottom container">
          <span>REAL SITUATIONS</span>
          <span aria-hidden="true">✳</span>
          <span>YOUR PACE</span>
          <span aria-hidden="true">✳</span>
          <span>LOTS OF TALKING</span>
          <span aria-hidden="true">✳</span>
          <span>A LITTLE BRAVERY</span>
        </div>
      </section>
      <section className="section about-preview">
        <div className="container about-grid">
          <div className="about-visual" data-reveal>
            <div className="about-image">
              <Image
                src="/images/personal-lesson.webp"
                alt="A focused one-to-one language lesson with notebooks and personal feedback"
                width={900}
                height={1000}
              />
            </div>
            <div className="experience-stamp">
              <span>8</span>
              <p>
                YEARS LIVING
                <br />
                IN THE USA
              </p>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="about-image-caption">Your goals. Your pace. A teacher who listens.</div>
          </div>
          <div className="about-copy" data-reveal>
            <Eyebrow>YOUR TEACHER. YOUR NEIGHBOR.</Eyebrow>
            <h2>
              Hi, I’m Carlos.
              <br />
              <em>I’ve been there.</em>
            </h2>
            <p>
              I know what it feels like to have something to say and not quite have the words. Eight
              years in the United States taught me more than English. They taught me what it takes
              to find your feet in another language.
            </p>
            <p>
              After teaching hundreds of students and years working in Dominican hospitality, here’s
              what I believe: the best learning happens when you feel comfortable enough to try.
            </p>
            <p className="carlos-signature">
              Carlos Reyna <span>YOUR PERSON ACROSS THE TABLE</span>
            </p>
            <Link href="/about/" className="text-link">
              A little more of my story <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section steps-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <Eyebrow>SMALL STEPS. NEW POSSIBILITIES.</Eyebrow>
              <h2>
                Nothing complicated.
                <br />
                <em>Just a good start.</em>
              </h2>
            </div>
            <BookButton className="text-link">Make the first move</BookButton>
          </div>
          <Steps />
        </div>
      </section>
      <section className="section stories-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <Eyebrow>WHAT CONFIDENCE CAN SOUND LIKE</Eyebrow>
              <h2>
                More than words.
                <br />
                <em>Little turning points.</em>
              </h2>
            </div>
            <Link href="/testimonials/" className="text-link">
              Meet the possibilities <ArrowUpRight size={19} />
            </Link>
          </div>
          <StoryCards />
          <p className="sample-note">
            Illustrative student stories. Sample names and quotes are included for design review.
          </p>
        </div>
      </section>
      <section className="pricing-banner">
        <div className="container pricing-banner-inner" data-reveal>
          <div>
            <span className="eyebrow">A LITTLE INVESTMENT IN YOUR NEXT CHAPTER</span>
            <h2>
              Your pace. <em>Your plan.</em>
            </h2>
            <p>One lesson to get going, or a little momentum every week.</p>
          </div>
          <Link href="/pricing/" className="button button-outline">
            Explore lesson plans <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
      <JournalPreview />
      <section className="section home-faq">
        <div className="container faq-layout">
          <div data-reveal>
            <Eyebrow>A FEW THINGS YOU MIGHT WONDER</Eyebrow>
            <h2>
              Good
              <br />
              <em>questions.</em>
            </h2>
            <Link href="/faq/" className="text-link">
              A few more answers <ArrowUpRight size={18} />
            </Link>
          </div>
          <FAQList limit={4} />
        </div>
      </section>
      <CTA />
    </main>
  );
}
