'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type FormEvent,
} from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  X,
  Menu,
  Check,
  MapPin,
  Mail,
  MessageCircle,
  ChevronLeft,
} from 'lucide-react';
import { site } from '@/lib/site';

type Language = 'English' | 'Spanish';
const BookingContext = createContext<(language?: Language, plan?: string) => void>(() => {});
export function BookButton({
  children = 'Find your first words',
  className = 'button',
  language,
  plan,
}: {
  children?: ReactNode;
  className?: string;
  language?: Language;
  plan?: string;
}) {
  const open = useContext(BookingContext);
  return (
    <button className={className} onClick={() => open(language, plan)}>
      {children}
      <ArrowUpRight size={19} strokeWidth={1.7} />
    </button>
  );
}
export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${footer ? 'brand-footer' : ''}`}
      aria-label="Idiomas Pro home"
    >
      <span className="brand-symbol" aria-hidden="true">
        <span />
        <span />
      </span>
      <span>
        idiomas
        <span className="brand-pro">
          pro<span className="brand-period">.</span>
        </span>
      </span>
    </Link>
  );
}
function Header() {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  const nav = [
    ['About Carlos', '/about/'],
    ['Languages', '/languages/'],
    ['Pricing', '/pricing/'],
    ['The journal', '/blog/'],
  ];
  useEffect(() => {
    setMenu(false);
  }, [path]);
  useEffect(() => {
    if (!menu) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menu]);
  return (
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link href={href} key={href} className={path === href ? 'active' : ''}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <BookButton className="button button-small">Let’s talk</BookButton>
          <button
            className="menu-toggle"
            aria-label={menu ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menu}
            aria-controls="mobile-navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {menu && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {nav.map(([label, href], i) => (
            <Link key={href} href={href}>
              <small>0{i + 1}</small>
              {label}
              <ArrowUpRight />
            </Link>
          ))}
          <Link href="/faq/">
            <small>05</small>Questions?
            <ArrowUpRight />
          </Link>
          <BookButton>Let’s talk</BookButton>
        </nav>
      )}
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand footer />
            <p>
              Two languages.
              <br />A world of real connections.
            </p>
            <a className="footer-email" href={`mailto:${site.email}`}>
              Say hello <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="footer-links">
            <span className="eyebrow">TAKE A LOOK AROUND</span>
            <Link href="/about/">About Carlos</Link>
            <Link href="/languages/">English & Spanish</Link>
            <Link href="/pricing/">Lesson plans</Link>
            <Link href="/testimonials/">Student stories</Link>
          </div>
          <div className="footer-links">
            <span className="eyebrow">A LITTLE MORE</span>
            <Link href="/blog/">The journal</Link>
            <Link href="/faq/">Your questions</Link>
            <Link href="/terms/">Terms of service</Link>
            <Link href="/privacy/">Privacy policy</Link>
          </div>
          <div className="footer-local">
            <span className="location-icon">
              <MapPin size={25} />
            </span>
            <p>
              Made for life
              <br />
              <strong>in Puerto Plata.</strong>
            </p>
            <span>
              Dominican Republic
              <br />
              19.7934° N, 70.6884° W
            </span>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          let’s talk<span>→</span>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Idiomas Pro. All good words reserved.</span>
          <span>English. Español. In real life.</span>
          <a href="#top">Back to the top ↑</a>
        </div>
      </div>
    </footer>
  );
}
function BookingDialog({
  dialogRef,
  initialLanguage,
  initialPlan,
}: {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  initialLanguage: Language;
  initialPlan: string;
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState('');
  const [schedule, setSchedule] = useState('');
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setLanguage(initialLanguage);
    setStep(1);
    setCopied(false);
  }, [initialLanguage]);
  const body = `Hi Carlos,\n\nMy name is ${name}. I am interested in private, in-person ${language} lessons in Puerto Plata.\n${initialPlan ? `\nInterested in: ${initialPlan}\n` : ''}\nMy goal: ${goal}\nMy preferred schedule: ${schedule || 'Flexible / to discuss'}\nMy email: ${email}\n\nPlease let me know about availability, pricing, and meeting arrangements.\n\nThank you!`;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`${language} lessons inquiry — ${name}`)}&body=${encodeURIComponent(body)}`;
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep(3);
  }
  return (
    <dialog
      ref={dialogRef}
      className="booking-dialog"
      aria-label="Lesson inquiry"
      onClick={(e) => {
        if (e.target === e.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className="booking-inner">
        <button
          className="dialog-close icon-button"
          aria-label="Close lesson inquiry"
          onClick={() => dialogRef.current?.close()}
        >
          <X />
        </button>
        <span className="eyebrow">YOUR NEXT CONVERSATION STARTS HERE</span>
        <div className="step-dots" aria-label={`Step ${step} of 3`}>
          {[1, 2, 3].map((n) => (
            <span key={n} className={step >= n ? 'on' : ''} />
          ))}
        </div>
        {step === 1 ? (
          <>
            <h2>
              Let’s find
              <br />
              your <em>words.</em>
            </h2>
            <p>What would you like to feel more confident speaking?</p>
            {initialPlan ? (
              <p className="selected-plan-note">
                Your starting point: <strong>{initialPlan}</strong>
              </p>
            ) : null}
            <div className="language-options">
              {(['English', 'Spanish'] as const).map((l) => (
                <button
                  onClick={() => setLanguage(l)}
                  key={l}
                  className={language === l ? 'selected' : ''}
                >
                  <span>{l === 'English' ? 'Hello.' : 'Hola.'}</span>
                  <small>
                    {l === 'English'
                      ? 'English for real opportunities'
                      : 'Spanish for a more local life'}
                  </small>
                  {language === l && <Check size={20} />}
                </button>
              ))}
            </div>
            <div className="in-person-note">
              <MapPin size={17} /> Private lessons. In person. Puerto Plata.
            </div>
            <button className="button full-width" onClick={() => setStep(2)}>
              That’s my language <ArrowRight size={18} />
            </button>
          </>
        ) : step === 2 ? (
          <>
            <button className="back-link" onClick={() => setStep(1)}>
              <ChevronLeft size={15} /> Back
            </button>
            <h2>
              A little
              <br />
              about <em>you.</em>
            </h2>
            <form onSubmit={submit}>
              <div className="field-row">
                <label>
                  Your name
                  <input
                    required
                    autoComplete="name"
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First and last name"
                  />
                </label>
                <label>
                  Email address
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    maxLength={180}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label>
                What would you like to work on?
                <textarea
                  required
                  maxLength={1500}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="A new job, everyday conversations, starting from zero…"
                  rows={3}
                />
              </label>
              <label>
                Your preferred schedule <span>(optional)</span>
                <input
                  maxLength={200}
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  placeholder="For example, weekday afternoons"
                />
              </label>
              <p className="form-note">
                This information stays in your browser until you choose to email it. See our{' '}
                <Link href="/privacy/" onClick={() => dialogRef.current?.close()}>
                  privacy policy
                </Link>
                .
              </p>
              <button className="button full-width" type="submit">
                Review my inquiry <ArrowRight size={18} />
              </button>
            </form>
          </>
        ) : (
          <>
            <span className="success-mark">
              <Mail size={28} />
            </span>
            <h2>
              Good things
              <br />
              start with <em>hello.</em>
            </h2>
            <p>
              Your inquiry is ready, {name.split(' ')[0]}. Open your email app to review and send it
              to Carlos.
            </p>
            <div className="inquiry-summary">
              {initialPlan ? (
                <p>
                  <strong>Plan to discuss:</strong> {initialPlan}
                </p>
              ) : null}
              <span>{language} · In person · Puerto Plata</span>
              <p>{goal}</p>
              {schedule && <small>{schedule}</small>}
            </div>
            <a className="button full-width" href={mailto}>
              Open email & send inquiry <ArrowUpRight size={18} />
            </a>
            <button
              className="copy-email"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(`${site.email}\n\n${body}`);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
            >
              {copied
                ? 'Copied — paste it into your email app'
                : 'Or copy the inquiry and email address'}
            </button>
            <p className="form-note">
              Nothing has been sent or booked yet. Carlos will confirm your lesson details by email.
              You can also email <a href={`mailto:${site.email}`}>{site.email}</a> directly.
            </p>
          </>
        )}
      </div>
    </dialog>
  );
}
export function SiteShell({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [language, setLanguage] = useState<Language>('English');
  const [plan, setPlan] = useState('');
  const [dialogKey, setDialogKey] = useState(0);
  const path = usePathname();
  function open(l: Language = 'English', selectedPlan?: string) {
    setLanguage(l);
    setPlan(selectedPlan ?? '');
    setDialogKey((k) => k + 1);
  }
  useEffect(() => {
    if (dialogKey > 0) dialog.current?.showModal();
  }, [dialogKey]);
  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    import('gsap').then(({ gsap }) => {
      if (cancelled) return;
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.hero-animate',
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.09,
            duration: 0.85,
            ease: 'power3.out',
            clearProps: 'all',
          },
        );
        gsap.fromTo(
          '.hero-photo',
          { scale: 1.06 },
          { scale: 1, duration: 1.6, ease: 'power2.out', clearProps: 'transform' },
        );
      });
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                entry.target,
                { y: 25, opacity: 0.4 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', clearProps: 'all' },
              );
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
      cleanup = () => {
        ctx.revert();
        observer.disconnect();
      };
    });
    return () => {
      cancelled = true;
      cleanup();
    };
  }, [path]);
  return (
    <BookingContext.Provider value={open}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div id="top" />
      <Header />
      {children}
      <Footer />
      <BookingDialog
        key={dialogKey}
        dialogRef={dialog}
        initialLanguage={language}
        initialPlan={plan}
      />
    </BookingContext.Provider>
  );
}
