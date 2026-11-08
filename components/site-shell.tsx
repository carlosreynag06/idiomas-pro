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
import { isSpanishPage } from '@/lib/site-language';

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
  const spanish = isSpanishPage(usePathname());
  return (
    <Link
      href="/"
      className={`brand ${footer ? 'brand-footer' : ''}`}
      aria-label={spanish ? 'Inicio de Idiomas Pro' : 'Idiomas Pro home'}
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
  const spanish = isSpanishPage(path);
  const [menu, setMenu] = useState(false);
  const nav = [
    [spanish ? 'Sobre Carlos' : 'About Carlos', '/about/'],
    [spanish ? 'Idiomas' : 'Languages', '/languages/'],
    [spanish ? 'Precios' : 'Pricing', '/pricing/'],
    [spanish ? 'El diario' : 'The journal', '/blog/'],
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
    <header className="header" lang={spanish ? 'es' : undefined}>
      <div className="container header-inner">
        <Brand />
        <nav
          className="desktop-nav"
          aria-label={spanish ? 'Navegación principal' : 'Main navigation'}
        >
          {nav.map(([label, href]) => (
            <Link href={href} key={href} className={path === href ? 'active' : ''}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <BookButton className="button button-small">
            {spanish ? 'Hablemos' : 'Let’s talk'}
          </BookButton>
          <button
            className="menu-toggle"
            aria-label={
              spanish
                ? menu
                  ? 'Cerrar menú'
                  : 'Abrir menú'
                : menu
                  ? 'Close navigation'
                  : 'Open navigation'
            }
            aria-expanded={menu}
            aria-controls="mobile-navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {menu && (
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          aria-label={spanish ? 'Navegación móvil' : 'Mobile navigation'}
        >
          {nav.map(([label, href], i) => (
            <Link key={href} href={href}>
              <small>0{i + 1}</small>
              {label}
              <ArrowUpRight />
            </Link>
          ))}
          <Link href="/preguntas-frecuentes/">
            <small>05</small>
            {spanish ? '¿Tienes preguntas?' : 'Questions?'}
            <ArrowUpRight />
          </Link>
          <BookButton>{spanish ? 'Hablemos' : 'Let’s talk'}</BookButton>
        </nav>
      )}
    </header>
  );
}
function Footer() {
  const spanish = isSpanishPage(usePathname());
  return (
    <footer className="footer" lang={spanish ? 'es' : undefined}>
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand footer />
            <p>
              {spanish ? 'Dos idiomas.' : 'Two languages.'}
              <br />
              {spanish ? 'Un mundo de conexiones reales.' : 'A world of real connections.'}
            </p>
            <a className="footer-email" href={`mailto:${site.email}`}>
              {spanish ? 'Di hola' : 'Say hello'} <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="footer-links">
            <span className="eyebrow">{spanish ? 'EXPLORA UN POCO' : 'TAKE A LOOK AROUND'}</span>
            <Link href="/about/">{spanish ? 'Sobre Carlos' : 'About Carlos'}</Link>
            <Link href="/languages/">{spanish ? 'Inglés y español' : 'English & Spanish'}</Link>
            <Link href="/pricing/">{spanish ? 'Planes de clases' : 'Lesson plans'}</Link>
            <Link href="/testimonials/">
              {spanish ? 'Historias de estudiantes' : 'Student stories'}
            </Link>
          </div>
          <div className="footer-links">
            <span className="eyebrow">{spanish ? 'UN POCO MÁS' : 'A LITTLE MORE'}</span>
            <Link href="/blog/">{spanish ? 'El diario' : 'The journal'}</Link>
            <Link href="/preguntas-frecuentes/">
              {spanish ? 'Preguntas frecuentes' : 'Your questions'}
            </Link>
            <Link href="/terminos/">{spanish ? 'Términos del servicio' : 'Terms of service'}</Link>
            <Link href="/privacidad/">{spanish ? 'Política de privacidad' : 'Privacy policy'}</Link>
          </div>
          <div className="footer-local">
            <span className="location-icon">
              <MapPin size={25} />
            </span>
            <p>
              {spanish ? 'Hecho para la vida' : 'Made for life'}
              <br />
              <strong>{spanish ? 'en Puerto Plata.' : 'in Puerto Plata.'}</strong>
            </p>
            <span>
              {spanish ? 'República Dominicana' : 'Dominican Republic'}
              <br />
              19.7934° N, 70.6884° W
            </span>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          {spanish ? 'hablemos' : 'let’s talk'}
          <span>→</span>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Idiomas Pro.{' '}
            {spanish ? 'Todos los derechos reservados.' : 'All good words reserved.'}
          </span>
          <span>
            {spanish ? 'Inglés. Español. En la vida real.' : 'English. Español. In real life.'}
          </span>
          <a href="#top">{spanish ? 'Volver arriba ↑' : 'Back to the top ↑'}</a>
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
  const spanish = isSpanishPage(usePathname());
  const t = (en: string, es: string) => (spanish ? es : en);
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
  const languageLabel = spanish ? (language === 'English' ? 'Inglés' : 'Español') : language;
  const body = spanish
    ? `Hola, Carlos:\n\nMe llamo ${name}. Me interesan tus clases privadas y presenciales de ${languageLabel.toLowerCase()} en Puerto Plata.\n${initialPlan ? `\nPlan de interés: ${initialPlan}\n` : ''}\nMi meta: ${goal}\nMi disponibilidad: ${schedule || 'Por conversar'}\nMi correo: ${email}\n\nMe gustaría conocer la disponibilidad, los precios y el lugar de las clases.\n\n¡Gracias!`
    : `Hi Carlos,\n\nMy name is ${name}. I am interested in private, in-person ${language} lessons in Puerto Plata.\n${initialPlan ? `\nInterested in: ${initialPlan}\n` : ''}\nMy goal: ${goal}\nMy preferred schedule: ${schedule || 'Flexible / to discuss'}\nMy email: ${email}\n\nPlease let me know about availability, pricing, and meeting arrangements.\n\nThank you!`;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(spanish ? `Consulta de clases de ${languageLabel.toLowerCase()} — ${name}` : `${language} lessons inquiry — ${name}`)}&body=${encodeURIComponent(body)}`;
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep(3);
  }
  return (
    <dialog
      ref={dialogRef}
      className="booking-dialog"
      lang={spanish ? 'es' : 'en'}
      aria-label={t('Lesson inquiry', 'Consulta sobre clases')}
      onClick={(e) => {
        if (e.target === e.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className="booking-inner">
        <button
          className="dialog-close icon-button"
          aria-label={t('Close lesson inquiry', 'Cerrar consulta')}
          onClick={() => dialogRef.current?.close()}
        >
          <X />
        </button>
        <span className="eyebrow">
          {t('YOUR NEXT CONVERSATION STARTS HERE', 'TU PRÓXIMA CONVERSACIÓN EMPIEZA AQUÍ')}
        </span>
        <div className="step-dots" aria-label={spanish ? `Paso ${step} de 3` : `Step ${step} of 3`}>
          {[1, 2, 3].map((n) => (
            <span key={n} className={step >= n ? 'on' : ''} />
          ))}
        </div>
        {step === 1 ? (
          <>
            <h2>
              {spanish ? (
                <>
                  Encuentra
                  <br />
                  tus <em>palabras.</em>
                </>
              ) : (
                <>
                  Let’s find
                  <br />
                  your <em>words.</em>
                </>
              )}
            </h2>
            <p>
              {t(
                'What would you like to feel more confident speaking?',
                '¿Qué idioma te gustaría hablar con más confianza?',
              )}
            </p>
            {initialPlan ? (
              <p className="selected-plan-note">
                {t('Your starting point:', 'Tu punto de partida:')} <strong>{initialPlan}</strong>
              </p>
            ) : null}
            <div className="language-options">
              {(['English', 'Spanish'] as const).map((l) => (
                <button
                  onClick={() => setLanguage(l)}
                  key={l}
                  className={language === l ? 'selected' : ''}
                >
                  <span>
                    {spanish
                      ? l === 'English'
                        ? 'Inglés'
                        : 'Español'
                      : l === 'English'
                        ? 'Hello.'
                        : 'Hola.'}
                  </span>
                  <small>
                    {l === 'English'
                      ? t(
                          'English for real opportunities',
                          'Inglés para tus próximas oportunidades',
                        )
                      : t('Spanish for a more local life', 'Español para sentirte más en casa')}
                  </small>
                  {language === l && <Check size={20} />}
                </button>
              ))}
            </div>
            <div className="in-person-note">
              <MapPin size={17} />{' '}
              {t(
                'Private lessons. In person. Puerto Plata.',
                'Clases privadas. Presenciales. Puerto Plata.',
              )}
            </div>
            <button className="button full-width" onClick={() => setStep(2)}>
              {t('That’s my language', 'Ese es mi idioma')} <ArrowRight size={18} />
            </button>
          </>
        ) : step === 2 ? (
          <>
            <button className="back-link" onClick={() => setStep(1)}>
              <ChevronLeft size={15} /> {t('Back', 'Volver')}
            </button>
            <h2>
              {spanish ? (
                <>
                  Cuéntame
                  <br />
                  sobre <em>ti.</em>
                </>
              ) : (
                <>
                  A little
                  <br />
                  about <em>you.</em>
                </>
              )}
            </h2>
            <form onSubmit={submit}>
              <div className="field-row">
                <label>
                  {t('Your name', 'Tu nombre')}
                  <input
                    required
                    autoComplete="name"
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('First and last name', 'Nombre y apellido')}
                  />
                </label>
                <label>
                  {t('Email address', 'Correo electrónico')}
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    maxLength={180}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('you@example.com', 'tu@ejemplo.com')}
                  />
                </label>
              </div>
              <label>
                {t('What would you like to work on?', '¿Qué te gustaría trabajar?')}
                <textarea
                  required
                  maxLength={1500}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder={t(
                    'A new job, everyday conversations, starting from zero…',
                    'Un nuevo empleo, conversaciones cotidianas, empezar desde cero…',
                  )}
                  rows={3}
                />
              </label>
              <label>
                {t('Your preferred schedule', 'Tu disponibilidad')}{' '}
                <span>{t('(optional)', '(opcional)')}</span>
                <input
                  maxLength={200}
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  placeholder={t(
                    'For example, weekday afternoons',
                    'Por ejemplo, tardes entre semana',
                  )}
                />
              </label>
              <p className="form-note">
                {t(
                  'This information stays in your browser until you choose to email it. See our',
                  'Esta información permanece en tu navegador hasta que decidas enviarla por correo. Consulta nuestra',
                )}{' '}
                <Link href="/privacidad/" onClick={() => dialogRef.current?.close()}>
                  {t('privacy policy', 'política de privacidad')}
                </Link>
                .
              </p>
              <button className="button full-width" type="submit">
                {t('Review my inquiry', 'Revisar mi consulta')} <ArrowRight size={18} />
              </button>
            </form>
          </>
        ) : (
          <>
            <span className="success-mark">
              <Mail size={28} />
            </span>
            <h2>
              {spanish ? (
                <>
                  Todo empieza
                  <br />
                  con un <em>hola.</em>
                </>
              ) : (
                <>
                  Good things
                  <br />
                  start with <em>hello.</em>
                </>
              )}
            </h2>
            <p>
              {spanish
                ? `Tu consulta está lista, ${name.split(' ')[0]}. Abre tu aplicación de correo para revisarla y enviársela a Carlos.`
                : `Your inquiry is ready, ${name.split(' ')[0]}. Open your email app to review and send it to Carlos.`}
            </p>
            <div className="inquiry-summary">
              {initialPlan ? (
                <p>
                  <strong>{t('Plan to discuss:', 'Plan de interés:')}</strong> {initialPlan}
                </p>
              ) : null}
              <span>
                {languageLabel} · {t('In person', 'Presencial')} · Puerto Plata
              </span>
              <p>{goal}</p>
              {schedule && <small>{schedule}</small>}
            </div>
            <a className="button full-width" href={mailto}>
              {t('Open email & send inquiry', 'Abrir correo y enviar consulta')}{' '}
              <ArrowUpRight size={18} />
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
                ? t(
                    'Copied — paste it into your email app',
                    'Copiado: pégalo en tu aplicación de correo',
                  )
                : t(
                    'Or copy the inquiry and email address',
                    'O copia la consulta y el correo de contacto',
                  )}
            </button>
            <p className="form-note">
              {t(
                'Nothing has been sent or booked yet. Carlos will confirm your lesson details by email. You can also email',
                'Todavía no se ha enviado ni reservado nada. Carlos confirmará los detalles de tus clases por correo. También puedes escribir a',
              )}{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>
              {t(' directly.', ' directamente.')}
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
      <a href="#main" className="skip-link" lang={isSpanishPage(path) ? 'es' : undefined}>
        {isSpanishPage(path) ? 'Saltar al contenido' : 'Skip to content'}
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
