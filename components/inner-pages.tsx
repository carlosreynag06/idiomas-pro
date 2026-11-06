import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  MapPin,
  Check,
  Globe2,
  Coffee,
  MessageCircle,
  BriefcaseBusiness,
  BookOpen,
  HeartHandshake,
} from 'lucide-react';
import { BookButton } from './site-shell';
import { CTA, Eyebrow, PageIntro, PriceCards, Steps, StoryCards } from './shared';
import { ConversationDemo } from './conversation-demo';
import { Journal } from './journal';
import { FAQBrowser } from './faq-browser';
import { site, type PageName } from '@/lib/site';

function About() {
  return (
    <>
      <PageIntro
        eyebrow="THE PERSON ACROSS THE TABLE"
        title="A teacher. A neighbor."
        italic="A fellow language learner."
        description="I’m Carlos Reyna. I help people find their feet — and their voice — in English and Spanish, right here in Puerto Plata."
      />
      <section className="about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-image" data-reveal>
            <Image
              src="/images/personal-lesson.webp"
              alt="An engaged student practicing a new language with a personal tutor"
              width={1000}
              height={1200}
              priority
            />
            <span className="image-label">MORE SPEAKING. MORE CONFIDENCE.</span>
          </div>
          <div className="about-story-copy" data-reveal>
            <Eyebrow>IT STARTS WITH UNDERSTANDING</Eyebrow>
            <h2>
              I know what it’s like
              <br />
              <em>to find the words.</em>
            </h2>
            <p>
              Living in another country changes the way you hear the world. I spent eight years in
              the United States, learning the small things that make a conversation feel natural —
              and the courage it takes to join one.
            </p>
            <p>
              Back in the Dominican Republic, I spent years in tourism, working as a Front Desk
              Supervisor and Night Manager. In hospitality, language is never just an exercise. It’s
              helping someone feel welcome, solving a problem, and getting the details right when
              they matter.
            </p>
            <p>
              I’ve since taught hundreds of English and Spanish students in the Dominican Republic
              and the US. Different lives, different goals, the same moment I love: when someone
              realizes they can say more than they thought.
            </p>
            <p className="carlos-signature">
              Carlos Reyna <span>FOUNDER & YOUR TEACHER</span>
            </p>
          </div>
        </div>
      </section>
      <section className="experience-band">
        <div className="container">
          <div>
            <strong>8</strong>
            <span>
              years living
              <br />
              in the United States
            </span>
          </div>
          <div>
            <strong>100s</strong>
            <span>
              of students taught
              <br />
              in the DR & the US
            </span>
          </div>
          <div>
            <strong>2</strong>
            <span>
              languages.
              <br />
              One personal approach.
            </span>
          </div>
          <div>
            <MapPin size={38} strokeWidth={1.2} />
            <span>
              Rooted right here
              <br />
              in Puerto Plata.
            </span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>WHAT YOU CAN EXPECT FROM ME</Eyebrow>
              <h2>
                Room to learn.
                <br />
                <em>Permission to be you.</em>
              </h2>
            </div>
            <p>
              You don’t have to arrive with confidence.
              <br />
              That’s something we build together.
            </p>
          </div>
          <div className="values-grid">
            {[
              {
                icon: HeartHandshake,
                title: 'Patience comes first.',
                text: 'Questions are welcome. So are mistakes. We keep trying until something clicks, without the pressure of keeping up with a room.',
              },
              {
                icon: BriefcaseBusiness,
                title: 'Experience beyond a classroom.',
                text: 'Real hospitality work and life abroad shape the way I teach. We practice the conversations you are actually going to have.',
              },
              {
                icon: Coffee,
                title: 'A very human kind of learning.',
                text: 'A real person, a shared table, and a plan that changes as you do. Every lesson is private, local, and in person.',
              },
            ].map((v) => (
              <article key={v.title} data-reveal>
                <v.icon size={33} strokeWidth={1.3} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="local-story">
        <div className="container local-story-grid">
          <div>
            <Eyebrow>YOUR GOALS. YOUR WAY FORWARD.</Eyebrow>
            <h2>
              More confidence.
              <br />
              <em>One conversation at a time.</em>
            </h2>
            <p>
              Maybe you want to speak up at work. Maybe you want to stop rehearsing every sentence
              in your head. Maybe you’re starting from your very first word. Your reason is where we
              begin.
            </p>
            <p>
              We build lessons around the things you want to do, with patient explanations, useful
              practice, and time to try again. You bring your goal. I’ll meet you where you are.
            </p>
            <BookButton>Tell me your story</BookButton>
          </div>
          <Image
            src="/images/confident-learner.webp"
            alt="An adult language learner smiling while expressing an idea with confidence"
            width={900}
            height={800}
          />
        </div>
      </section>
      <CTA />
    </>
  );
}

function Languages() {
  return (
    <>
      <PageIntro
        eyebrow="ENGLISH & SPANISH · PRIVATE · IN PERSON"
        title="Not just another language."
        italic="Another way into the world."
        description="Two languages. One very personal approach. Choose the conversations you want to have, and we’ll work toward them together."
      />
      <section className="language-detail-section" id="english">
        <div className="container language-detail-grid">
          <div className="language-detail-visual cobalt">
            <span className="eyebrow">01 / ENGLISH FOR SPANISH SPEAKERS</span>
            <div className="detail-big-word">
              Hello<span>↗</span>
            </div>
            <p>For the doors you’re ready to open.</p>
            <span className="detail-small">YOUR EXPERIENCE. A NEW LANGUAGE. MORE POSSIBILITY.</span>
          </div>
          <div className="language-detail-copy">
            <Eyebrow>A LITTLE MORE CONFIDENCE</Eyebrow>
            <h2>
              Your next opportunity
              <br />
              <em>speaks English.</em>
            </h2>
            <p>
              Let’s make sure you feel ready to answer. Private English lessons built around your
              starting point, your pace, and the things you want to do.
            </p>
            <div className="lesson-focus">
              <div>
                <BriefcaseBusiness size={22} />
                <span>
                  <strong>English for hospitality</strong>Guest requests, front-desk conversations,
                  and a warmer welcome.
                </span>
              </div>
              <div>
                <MessageCircle size={22} />
                <span>
                  <strong>Everyday conversation</strong>Real questions, natural answers, and less
                  second-guessing.
                </span>
              </div>
              <div>
                <BookOpen size={22} />
                <span>
                  <strong>A strong beginning</strong>Patient, practical foundations for complete
                  beginners.
                </span>
              </div>
            </div>
            <BookButton language="English">Find my English words</BookButton>
          </div>
        </div>
      </section>
      <section className="language-detail-section spanish-detail" id="spanish">
        <div className="container language-detail-grid">
          <div className="language-detail-visual citron">
            <span className="eyebrow">02 / SPANISH FOR FOREIGNERS</span>
            <div className="detail-big-word">
              Hola<span>✳</span>
            </div>
            <p>For a life that feels a little more local.</p>
            <span className="detail-small">LESS TRANSLATING. MORE CONNECTING.</span>
          </div>
          <div className="language-detail-copy">
            <Eyebrow>MAKE YOURSELF AT HOME</Eyebrow>
            <h2>
              There’s more here
              <br />
              <em>when you speak Spanish.</em>
            </h2>
            <p>
              Connect with neighbors, ask that follow-up question, and enjoy the little
              conversations that make Puerto Plata feel like home.
            </p>
            <div className="lesson-focus">
              <div>
                <Coffee size={22} />
                <span>
                  <strong>The everyday essentials</strong>Cafes, shops, directions, and getting
                  things done.
                </span>
              </div>
              <div>
                <Globe2 size={22} />
                <span>
                  <strong>Local listening</strong>Practice understanding the replies, not just
                  asking the questions.
                </span>
              </div>
              <div>
                <HeartHandshake size={22} />
                <span>
                  <strong>Confidence at your level</strong>From your first “hola” to a conversation
                  that keeps going.
                </span>
              </div>
            </div>
            <BookButton language="Spanish">Find my Spanish words</BookButton>
          </div>
        </div>
      </section>
      <section className="method-section">
        <div className="container method-grid">
          <div className="method-copy">
            <Eyebrow light>REAL LIFE. REHEARSED.</Eyebrow>
            <h2>
              Try it here.
              <br />
              <em>Use it out there.</em>
            </h2>
            <p>
              Your lesson is a comfortable place to practice the moments that matter. Ask again.
              Change the words. Find a way to say it that sounds like you.
            </p>
            <Link href="/pricing/" className="text-link light-link">
              A plan for your pace <ArrowUpRight size={18} />
            </Link>
          </div>
          <ConversationDemo />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>HOW WE GET THERE</Eyebrow>
              <h2>
                Personal from
                <br />
                <em>the very first hello.</em>
              </h2>
            </div>
            <p>
              Every class is one to one, face to face,
              <br />
              and taught personally by Carlos.
            </p>
          </div>
          <Steps />
        </div>
      </section>
      <CTA />
    </>
  );
}

function Pricing() {
  return (
    <>
      <PageIntro
        eyebrow="GOOD WORDS. A PLAN THAT FITS."
        title="Your pace."
        italic="Your next chapter."
        description="Start with a conversation. Build a little momentum. Choose the space you need to work toward the things you want to say."
      />
      <section className="section pricing-page">
        <div className="container">
          <div className="pricing-currency">
            <span>
              <MapPin size={16} /> Private · In person · Puerto Plata
            </span>
            <span>RD$ / DOMINICAN PESOS</span>
          </div>
          <PriceCards />
          <div className="included-strip">
            <span>EVERY PLAN INCLUDES</span>
            <span>
              <Check size={17} /> Carlos as your teacher
            </span>
            <span>
              <Check size={17} /> English or Spanish
            </span>
            <span>
              <Check size={17} /> Your level. Your goals.
            </span>
            <span>
              <Check size={17} /> Real conversation
            </span>
          </div>
        </div>
      </section>
      <section className="section pricing-guidance">
        <div className="container split-heading">
          <div>
            <Eyebrow>NOT SURE WHERE TO START?</Eyebrow>
            <h2>
              You don’t need a plan.
              <br />
              <em>Just a reason to begin.</em>
            </h2>
          </div>
          <div>
            <p>
              Tell Carlos what you’re hoping to do and when you’re usually free. Together, you can
              find a sensible starting point and a schedule you’ll feel good about keeping.
            </p>
            <p>
              There is no payment or automatic booking on this website. All arrangements are
              confirmed personally before you commit.
            </p>
            <BookButton>Let’s figure it out together</BookButton>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function Testimonials() {
  return (
    <>
      <PageIntro
        eyebrow="THE MOMENTS WE WORK TOWARD"
        title="Sometimes, progress"
        italic="sounds like this."
        description="The first confident check-in. A chat with a neighbor. The answer you didn’t have to rehearse. This is what we’re here for."
      />
      <section className="section testimonials-page">
        <div className="container">
          <div className="editorial-note">
            <span className="eyebrow">A NOTE FOR THIS FIRST EDITION</span>
            <p>
              The stories below are illustrative examples for this website’s design. Names, quotes,
              and experiences are sample content, ready to be replaced with verified student
              testimonials before public launch.
            </p>
          </div>
          <StoryCards full />
        </div>
      </section>
      <section className="outcomes-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>PROGRESS HAS A PERSONAL SOUND</Eyebrow>
              <h2>
                What would your
                <br />
                <em>turning point be?</em>
              </h2>
            </div>
            <p>
              No two goals sound the same.
              <br />
              That’s why no two plans are identical.
            </p>
          </div>
          <div className="outcomes-grid">
            <article>
              <span>01</span>
              <h3>
                “I’m ready for
                <br />
                that interview.”
              </h3>
              <p>
                Practice talking about your experience in English, with answers that feel natural
                and honest.
              </p>
              <BookButton className="text-link" language="English">
                That sounds like me
              </BookButton>
            </article>
            <article>
              <span>02</span>
              <h3>
                “I feel more
                <br />
                at home here.”
              </h3>
              <p>
                Learn the Spanish that brings you closer to the people and places around you in
                Puerto Plata.
              </p>
              <BookButton className="text-link" language="Spanish">
                That sounds like me
              </BookButton>
            </article>
            <article>
              <span>03</span>
              <h3>
                “I just kept
                <br />
                the conversation going.”
              </h3>
              <p>
                Build the habits and confidence to keep trying, even when you don’t have every word.
              </p>
              <BookButton className="text-link">That sounds like me</BookButton>
            </article>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function FAQ() {
  return (
    <>
      <PageIntro
        eyebrow="LET’S CLEAR A FEW THINGS UP"
        title="Good questions."
        italic="Straightforward answers."
        description="A little more about your lessons, the practical details, and how we get started. Still wondering about something? Carlos is a hello away."
      />
      <FAQBrowser />
      <section className="question-contact">
        <div className="container">
          <MessageCircle size={42} strokeWidth={1.2} />
          <div>
            <h2>Have a question of your own?</h2>
            <p>We can start there. No need to have it all figured out.</p>
          </div>
          <BookButton>Ask Carlos</BookButton>
        </div>
      </section>
      <CTA />
    </>
  );
}

function Legal({ privacy = false }: { privacy?: boolean }) {
  const sections = privacy
    ? [
        {
          title: 'Who we are',
          text: 'Idiomas Pro is a private language teaching service run by Carlos Reyna in Puerto Plata, Dominican Republic. For privacy questions, contact the email address provided below.',
        },
        {
          title: 'Information you choose to share',
          text: 'The lesson inquiry form asks for your name, email address, learning goal, and optional availability. Form entries remain in your browser’s current session until you choose to open your mail app or copy the inquiry. The form does not submit to a website database.',
        },
        {
          title: 'When you send an email',
          text: 'If you choose to email your inquiry, your email provider and the recipient’s email provider process the message according to their own policies. Carlos uses the information you send to respond, discuss lesson arrangements, and manage the teaching relationship.',
        },
        {
          title: 'Cookies and analytics',
          text: 'This version of the website does not intentionally set advertising cookies or use a third-party analytics platform. Hosting providers may process technical request information, such as IP addresses and basic access logs, to deliver and protect the website.',
        },
        {
          title: 'Sharing your information',
          text: 'We do not sell personal information. Information may be handled by services needed for email or website hosting, or disclosed when required by applicable law. Any additional booking or payment tools introduced later will require an updated policy.',
        },
        {
          title: 'Retention and your choices',
          text: 'You may ask about, correct, or request deletion of information you have shared with Carlos. Retention practices and any applicable legal obligations must be confirmed before public launch. Do not send sensitive personal information through the inquiry form.',
        },
        {
          title: 'Changes to this policy',
          text: 'This is a provisional website policy prepared for design review. It should be reviewed and completed to reflect actual operations and applicable requirements before public launch.',
        },
      ]
    : [
        {
          title: 'About the service',
          text: 'Idiomas Pro offers private English and Spanish lessons taught by Carlos Reyna in Puerto Plata, Dominican Republic. All lessons are in person. Meeting arrangements, lesson goals, and availability are agreed directly before starting.',
        },
        {
          title: 'Inquiries are not bookings',
          text: 'Using this website’s inquiry form prepares an email. It does not send a message automatically, reserve a time, create a confirmed booking, or take a payment. A lesson is arranged only after you and Carlos confirm the details directly.',
        },
        {
          title: 'Pricing and payment',
          text: 'Prices shown on this first edition are illustrative launch pricing in Dominican pesos. Final rates, package terms, payment methods, and any applicable charges must be confirmed directly before a purchase. No payment is collected through this website.',
        },
        {
          title: 'Scheduling, cancellations, and refunds',
          text: 'Your lesson length, schedule, meeting location, cancellation notice, rescheduling options, package validity, and refund conditions must be agreed with Carlos before booking. This draft does not establish a final cancellation or refund policy.',
        },
        {
          title: 'Your learning progress',
          text: 'Lessons are designed around your level and goals. Progress depends on several factors, including practice and participation. We do not guarantee fluency, examination results, employment, or a particular outcome within a fixed period.',
        },
        {
          title: 'Website content',
          text: 'Some content, including sample student stories and illustrative pricing, is provided for design review. Original photographs on the website are AI-generated illustrations of the language-learning experience. They are not documentary photographs of actual students or Carlos.',
        },
        {
          title: 'Use of the website',
          text: 'Please use the website lawfully and respectfully. Do not attempt to interfere with its operation or submit misleading information. Website content may be updated as the service develops.',
        },
        {
          title: 'Provisional document',
          text: 'These terms are a working draft for the website’s first edition. Final business details, policies, and applicable legal requirements should be reviewed before public launch.',
        },
      ];
  return (
    <>
      <PageIntro
        eyebrow="THE PRACTICAL WORDS"
        title={privacy ? 'Your information.' : 'A little clarity.'}
        italic={privacy ? 'Handled with care.' : 'For both of us.'}
        description={
          privacy
            ? 'How this website handles information, and what happens when you get in touch.'
            : 'The provisional terms for using this website and arranging private language lessons.'
        }
      />
      <section className="legal-section">
        <div className="container legal-grid">
          <aside>
            <span className="eyebrow">{privacy ? 'PRIVACY POLICY' : 'TERMS OF SERVICE'}</span>
            <p>
              First edition
              <br />
              Updated November 6, 2026
            </p>
            <span className="draft-tag">Provisional draft</span>
            <nav aria-label="Document contents">
              {sections.map((s, i) => (
                <a key={s.title} href={`#section-${i + 1}`}>
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>
          <div className="legal-body">
            <div className="editorial-note">
              <p>
                This document is part of a website under development and requires review before
                public launch.
              </p>
            </div>
            {sections.map((s, i) => (
              <section id={`section-${i + 1}`} key={s.title}>
                <h2>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                <p>{s.text}</p>
              </section>
            ))}
            <section>
              <h2>Get in touch</h2>
              <p>
                Questions about this document? Contact Carlos at{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export function InnerPage({ page }: { page: PageName }) {
  return (
    <main id="main">
      {page === 'about' ? (
        <About />
      ) : page === 'languages' ? (
        <Languages />
      ) : page === 'pricing' ? (
        <Pricing />
      ) : page === 'testimonials' ? (
        <Testimonials />
      ) : page === 'blog' ? (
        <>
          <PageIntro
            eyebrow="THE LOCAL WORD · A JOURNAL BY IDIOMAS PRO"
            title="A few words"
            italic="worth taking with you."
            description="Notes on language, life, and finding your voice in Puerto Plata. A little practical advice. A little local perspective."
          />
          <Journal />
          <CTA />
        </>
      ) : page === 'faq' ? (
        <FAQ />
      ) : (
        <Legal privacy={page === 'privacy'} />
      )}
    </main>
  );
}
