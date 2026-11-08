import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { BookButton } from '@/components/site-shell';
import { SpanishFAQBrowser } from './faq-browser';
import '@/components/spanish-pages.css';
import './page.css';

export const metadata: Metadata = {
  title: { absolute: 'Preguntas frecuentes | Idiomas Pro · Puerto Plata' },
  description:
    'Respuestas sobre clases privadas de inglés y español en Puerto Plata: niveles, profesor, horarios, precios y reservas con Carlos Reyna.',
  alternates: { canonical: '/preguntas-frecuentes/' },
  openGraph: {
    locale: 'es_DO',
    title: 'Tus preguntas, con respuestas claras.',
    description: 'Todo sobre tus clases presenciales con Carlos Reyna en Puerto Plata.',
    images: ['/images/es-faq-v2.webp'],
  },
};
export default function PreguntasFrecuentesPage() {
  return (
    <main id="main" className="spanish-page spanish-faq-page" lang="es">
      <section className="ef-hero">
        <div className="container ef-hero-grid">
          <div>
            <span className="es-kicker hero-animate">PREGUNTAR TAMBIÉN ES EMPEZAR.</span>
            <h1 className="hero-animate">
              Tus preguntas.
              <br />
              <em>Sin vueltas.</em>
            </h1>
            <p className="hero-animate">
              Sobre tus clases, tus primeros pasos y los detalles que quieres tener claros antes de
              comenzar.
            </p>
            <a className="button ef-citron hero-animate" href="#respuestas">
              Encuentra tu respuesta <ArrowDown size={18} />
            </a>
            <span className="ef-local hero-animate">
              <MapPin size={14} /> Clases privadas y presenciales en Puerto Plata.
            </span>
          </div>
          <figure className="ef-hero-art hero-animate">
            <Image
              src="/images/es-faq-v2.webp"
              width={1024}
              height={1024}
              alt="Signo de interrogación de cerámica marfil con un lápiz verde y una tarjeta de estudio"
              sizes="(max-width:900px) 90vw,45vw"
              preload
            />
            <figcaption>UNA BUENA PREGUNTA ABRE LA CONVERSACIÓN.</figcaption>
          </figure>
        </div>
      </section>
      <SpanishFAQBrowser />
      <section className="ef-contact">
        <div className="container ef-contact-grid">
          <div>
            <span className="es-kicker">CADA HISTORIA TIENE SUS PREGUNTAS.</span>
            <h2>
              ¿La tuya no está aquí?
              <br />
              <em>Te escucho.</em>
            </h2>
          </div>
          <div>
            <p>
              Cuéntame qué tienes en mente. Podemos empezar por ahí, sin que tengas todo resuelto.
            </p>
            <BookButton>Hablemos de tus clases</BookButton>
            <div className="ef-contact-links">
              <Link href="/terminos/">
                Términos del servicio <ArrowUpRight size={15} />
              </Link>
              <Link href="/privacidad/">
                Tu privacidad <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
