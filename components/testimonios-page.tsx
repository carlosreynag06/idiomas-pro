import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { BookButton } from './site-shell';
import { TestimonialSequence } from './testimonial-sequence';
import './testimonios-page.css';

export function TestimoniosPage() {
  return (
    <>
      <section className="tp-hero">
        <div className="container tp-hero-grid">
          <div className="tp-hero-copy">
            <span className="tp-eyebrow hero-animate">TESTIMONIOS · INGLÉS Y ESPAÑOL</span>
            <h1>
              <span className="tp-title-window">
                <span>La confianza</span>
              </span>
              <span className="tp-title-window">
                <span>
                  tiene <em>voz.</em>
                </span>
              </span>
            </h1>
            <p className="hero-animate">
              Responder sin ensayar. Hacer una pregunta. Seguir la conversación. A veces, aprender
              un idioma se nota justo ahí.
            </p>
            <a href="#historias" className="button hero-animate">
              Conoce las historias <ArrowDown size={18} />
            </a>
            <div className="tp-hero-location hero-animate">
              <MapPin size={16} /> Clases privadas y presenciales en Puerto Plata.
            </div>
          </div>
          <figure className="tp-hero-figure">
            <div className="tp-hero-photo">
              <Image
                src="/images/testimonios-first-words.webp"
                alt="Escena ilustrativa de una alumna compartiendo una idea durante una clase presencial"
                width={1122}
                height={1402}
                sizes="(max-width: 900px) 90vw, 43vw"
                preload
              />
              <span className="tp-image-mark" aria-hidden="true">
                ↗
              </span>
            </div>
            <figcaption>
              <span>EL MOMENTO EN QUE TE ANIMAS.</span>
              <span>Imagen ilustrativa</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="tp-stats" aria-labelledby="tp-stats-title">
        <div className="container">
          <div className="tp-stats-heading" data-reveal>
            <h2 id="tp-stats-title">
              La experiencia <em>también cuenta.</em>
            </h2>
            <span>EL PUNTO DE PARTIDA DE TUS CLASES.</span>
          </div>
          <dl className="tp-stats-grid">
            <div data-reveal>
              <dt>
                <span className="tp-stat-value">8</span>
                <span className="tp-stat-unit">años</span>
              </dt>
              <dd>Viviendo y aprendiendo en Estados Unidos.</dd>
            </div>
            <div data-reveal>
              <dt>
                <span className="tp-stat-value tp-stat-word">Cientos</span>
              </dt>
              <dd>De alumnos de inglés y español en RD y EE. UU.</dd>
            </div>
            <div data-reveal>
              <dt>
                <span className="tp-stat-value">2</span>
                <span className="tp-stat-unit">idiomas</span>
              </dt>
              <dd>Inglés y español. Un mismo profesor: Carlos.</dd>
            </div>
            <div data-reveal>
              <dt>
                <span className="tp-stat-value">1:1</span>
              </dt>
              <dd>Clases privadas, con toda la atención para ti.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="historias" className="tp-featured">
        <div className="container">
          <div className="tp-featured-heading" data-reveal>
            <div>
              <span className="tp-eyebrow">DE TENER ALGO QUE DECIR, A DECIRLO.</span>
              <h2>
                Una frase.
                <br />
                <em>Un cambio enorme.</em>
              </h2>
            </div>
            <p className="tp-example-note">
              <span>UNA NOTA SOBRE ESTAS HISTORIAS</span>
              Testimonios de ejemplo para esta versión del sitio. Los nombres y las experiencias se
              sustituirán por historias verificadas antes del lanzamiento.
            </p>
          </div>
          <TestimonialSequence />
        </div>
      </section>

      <section className="tp-more">
        <div className="container">
          <div className="tp-more-heading" data-reveal>
            <div>
              <span className="tp-eyebrow">CADA META TIENE SU PROPIA HISTORIA.</span>
              <h2>
                El avance también
                <br />
                <em>está en lo cotidiano.</em>
              </h2>
            </div>
            <Link href="/idiomas/" className="tp-inline-link">
              Explora los idiomas <ArrowUpRight size={18} />
            </Link>
          </div>
          <article className="tp-story-row" data-reveal>
            <span className="tp-story-number" aria-hidden="true">
              05
            </span>
            <div>
              <span className="tp-story-tag">INGLÉS · CONVERSACIÓN</span>
              <blockquote>
                «Antes esperaba a que alguien hablara por mí. Ahora, la pregunta la hago yo.»
              </blockquote>
            </div>
            <div className="tp-story-person">
              <strong>Luis A.</strong>
              <span>Aprende inglés en Puerto Plata</span>
              <small>Historia de ejemplo</small>
            </div>
          </article>
          <article className="tp-story-row" data-reveal>
            <span className="tp-story-number" aria-hidden="true">
              06
            </span>
            <div>
              <span className="tp-story-tag">ESPAÑOL · VIDA COTIDIANA</span>
              <blockquote lang="en">
                “The best part wasn’t knowing more words. It was finally joining in.”
              </blockquote>
            </div>
            <div className="tp-story-person">
              <strong>Rebecca S.</strong>
              <span>Residente extranjera · Aprende español</span>
              <small>Historia de ejemplo</small>
            </div>
          </article>
        </div>
      </section>

      <section className="tp-approach">
        <div className="container tp-approach-grid">
          <figure className="tp-practice-figure" data-reveal>
            <Image
              src="/images/testimonios-spanish-practice.webp"
              alt="Escena ilustrativa de un residente extranjero practicando español con un profesor, frente a frente"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 90vw, 47vw"
            />
            <figcaption>
              Una conversación. Toda la atención.<span>Imagen ilustrativa</span>
            </figcaption>
          </figure>
          <div className="tp-approach-copy" data-reveal>
            <span className="tp-eyebrow">LO QUE HAY DETRÁS DE CADA AVANCE.</span>
            <h2>
              Tu meta.
              <br />
              <em>Mi atención.</em>
            </h2>
            <p>
              Con Carlos Reyna, las clases empiezan por lo que quieres poder hacer con el idioma.
            </p>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h3>Una conversación que necesitas.</h3>
                  <p>
                    Tu próxima entrevista, una charla con tus vecinos o las preguntas que haces
                    todos los días.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Espacio para intentarlo.</h3>
                  <p>
                    Hablar, equivocarte, preguntar otra vez. Sin competir por el turno de nadie.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Algo que te llevas contigo.</h3>
                  <p>
                    Una frase, una forma de responder, un poco más de soltura para la próxima vez.
                  </p>
                </div>
              </li>
            </ol>
            <Link href="/sobre-carlos/" className="button">
              Conoce a Carlos <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="tp-next">
        <div className="container tp-next-grid">
          <div className="tp-next-copy" data-reveal>
            <span className="tp-eyebrow">NO NECESITAS TENER TODAS LAS PALABRAS.</span>
            <h2>
              Ahora,
              <br />
              <em>dilo tú.</em>
            </h2>
            <p>
              ¿Para qué quieres usar el inglés o el español? Cuéntaselo a Carlos y encuentra por
              dónde empezar.
            </p>
            <BookButton>Quiero hablar con Carlos</BookButton>
            <Link href="/precios/" className="tp-inline-link">
              Ver los planes de clases <ArrowUpRight size={17} />
            </Link>
          </div>
          <figure className="tp-si-art" data-reveal>
            <div className="tp-si-object">
              <Image
                src="/images/testimonios-si.webp"
                width={1100}
                height={880}
                sizes="(max-width: 900px) 90vw, 48vw"
                alt="Escultura tipográfica original de la palabra sí en cerámica verde, marfil y lima"
              />
            </div>
            <figcaption>UNA PALABRA PUEDE SER UN BUEN COMIENZO.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
