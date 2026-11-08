import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Check } from 'lucide-react';
import { site } from '@/lib/site';
import '@/components/spanish-pages.css';
import './page.css';

export const metadata: Metadata = {
  title: { absolute: 'Términos del servicio | Idiomas Pro' },
  description:
    'Condiciones para usar Idiomas Pro y acordar clases privadas de inglés o español en Puerto Plata con Carlos Reyna.',
  alternates: { canonical: '/terminos/' },
  openGraph: {
    locale: 'es_DO',
    title: 'Términos del servicio · Idiomas Pro',
    description: 'Los detalles de tus clases, con claridad.',
    images: ['/images/es-terms.webp'],
  },
};
const sections = [
  {
    id: 'servicio',
    title: 'Quién presta el servicio',
    paragraphs: [
      'Idiomas Pro es el nombre utilizado por Carlos Reyna para ofrecer clases privadas de inglés y español en Puerto Plata, República Dominicana. Carlos imparte las clases personalmente y todas son presenciales.',
      'El lugar de encuentro, las metas y la disponibilidad se acuerdan directamente antes de comenzar. El sitio no anuncia una dirección de aula para visitas sin cita ni ofrece clases por videollamada.',
    ],
  },
  {
    id: 'consultas',
    title: 'Una consulta no es una reserva',
    paragraphs: [
      'El formulario del sitio prepara una consulta con tu nombre, correo electrónico, idioma, metas, disponibilidad opcional y, si lo seleccionaste, el paquete que deseas conversar.',
      'El formulario no envía mensajes automáticamente, no confirma una clase ni realiza cobros. Puedes revisar la consulta y abrir tu aplicación de correo para enviarla, o copiar el texto y enviarlo por tu cuenta. La reserva se confirma únicamente después de acordar los detalles con Carlos.',
    ],
  },
  {
    id: 'precios',
    title: 'Precios, paquetes y pagos',
    paragraphs: [
      'Los precios publicados en esta edición son ejemplos de lanzamiento expresados en pesos dominicanos (RD$). Los paquetes de ejemplo contemplan una, cuatro u ocho clases de 60 minutos.',
      'Antes de contratar se deben confirmar la tarifa definitiva, el número y la duración de las clases, las condiciones del paquete, su plazo de uso, la forma de pago y cualquier cargo aplicable. El sitio web no procesa pagos ni solicita datos de tarjetas.',
    ],
  },
  {
    id: 'horarios',
    title: 'Horarios y lugar de las clases',
    paragraphs: [
      'El horario, la frecuencia y el lugar en Puerto Plata se eligen de común acuerdo, según disponibilidad. Comunica con claridad la zona y los horarios que te resultan prácticos.',
      'La duración de 60 minutos corresponde a los planes de ejemplo. Cualquier alternativa se conversa y confirma antes de reservar.',
    ],
  },
  {
    id: 'cambios',
    title: 'Cambios, cancelaciones y devoluciones',
    paragraphs: [
      'Si necesitas cambiar una clase, comunícate con Carlos lo antes posible. Las condiciones de aviso, reprogramación, cancelación, uso de paquetes y devolución deben quedar acordadas antes de contratar.',
      'Esta versión no establece un plazo definitivo de cancelación ni una política final de devoluciones. Cualquier condición que se acuerde deberá respetar los derechos que correspondan según la normativa aplicable.',
    ],
  },
  {
    id: 'aprendizaje',
    title: 'Tu proceso de aprendizaje',
    paragraphs: [
      'Las clases se preparan a partir de tu nivel y tus metas. La práctica, la participación, la constancia y las oportunidades de usar el idioma influyen en tu progreso.',
      'No se garantiza fluidez, un resultado de examen, un empleo ni una meta específica dentro de un número fijo de clases. Los objetivos se trabajan de forma práctica y se ajustan según avances.',
    ],
  },
  {
    id: 'contenido',
    title: 'Contenido del sitio',
    paragraphs: [
      'Los artículos y materiales publicados ofrecen orientación general sobre el aprendizaje de idiomas. Parte del contenido, como precios y testimonios de ejemplo, está preparado para la revisión del diseño y debe sustituirse o confirmarse antes del lanzamiento público.',
      'Las imágenes generadas con inteligencia artificial ilustran situaciones de aprendizaje; no son fotografías documentales de Carlos ni de estudiantes reales. Los recursos tridimensionales forman parte de la identidad visual del sitio.',
    ],
  },
  {
    id: 'uso',
    title: 'Uso responsable',
    paragraphs: [
      'Utiliza el sitio de forma lícita y respetuosa. Comparte información veraz en tus consultas y evita enviar documentos de identidad, información bancaria u otros datos sensibles que no sean necesarios para hablar de las clases.',
      'No intentes alterar el funcionamiento del sitio, acceder sin autorización a sus sistemas ni utilizar su contenido de forma que vulnere derechos de terceros.',
    ],
  },
  {
    id: 'derechos',
    title: 'Tus derechos y cómo contactarnos',
    paragraphs: [
      'Estas condiciones no excluyen los derechos que te reconoce la legislación dominicana aplicable. Si surge una duda sobre el servicio, comunícate con Carlos para aclarar los hechos y buscar una solución.',
      'La Ley núm. 358-05 establece el marco de protección de las personas consumidoras y usuarias. Puedes consultar información oficial de Pro Consumidor en la referencia incluida al final de este documento.',
    ],
  },
  {
    id: 'version',
    title: 'Versión y actualizaciones',
    paragraphs: [
      'Documento actualizado el 8 de noviembre de 2026. Esta es una versión de trabajo del sitio: las condiciones comerciales pendientes y los datos definitivos del servicio deben completarse y revisarse antes del lanzamiento público.',
      'Los cambios futuros se reflejarán en esta página con su fecha de actualización. Las condiciones de las clases que contrates deben confirmarse contigo antes de comenzar.',
    ],
  },
];
export default function TerminosPage() {
  return (
    <main id="main" className="spanish-page spanish-legal-page terms-page" lang="es">
      <header className="es-legal-hero">
        <div className="container es-legal-hero-grid">
          <div>
            <span className="es-kicker hero-animate">TÉRMINOS DEL SERVICIO</span>
            <h1 className="hero-animate">
              Todo claro.
              <br />
              <em>Desde el principio.</em>
            </h1>
            <p className="hero-animate">
              Lo que necesitas saber para usar este sitio y acordar tus clases con confianza.
            </p>
            <a href="#contenido" className="es-read-link hero-animate">
              Lee las condiciones <ArrowDown size={17} />
            </a>
            <span className="es-version hero-animate">
              Actualizado el 8 de noviembre de 2026 · Versión para revisión
            </span>
          </div>
          <Image
            className="hero-animate"
            src="/images/es-terms.webp"
            width={1100}
            height={943}
            alt="Documento de cerámica marfil con líneas verdes y un detalle circular color lima"
            sizes="(max-width:900px) 90vw,42vw"
            preload
          />
        </div>
      </header>
      <section className="es-summary" aria-label="En pocas palabras">
        <div className="container">
          {[
            'Clases privadas y presenciales.',
            'Una consulta no confirma una reserva.',
            'Todo se acuerda antes de comenzar.',
          ].map((text) => (
            <p key={text}>
              <Check size={18} />
              {text}
            </p>
          ))}
        </div>
      </section>
      <section id="contenido" className="es-document">
        <div className="container es-document-grid">
          <aside>
            <span className="es-kicker">EN ESTE DOCUMENTO</span>
            <nav aria-label="Contenido de los términos">
              {sections.map((section, index) => (
                <a href={`#${section.id}`} key={section.id}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {section.title}
                </a>
              ))}
            </nav>
            <Link href="/privacidad/" className="es-read-link">
              Política de privacidad <ArrowUpRight size={16} />
            </Link>
          </aside>
          <div className="es-document-body">
            <p className="es-draft-note">
              Esta versión recoge el funcionamiento actual del sitio. Las tarifas y condiciones
              finales se confirman personalmente antes de reservar.
            </p>
            {sections.map((section, index) => (
              <section id={section.id} key={section.id}>
                <span className="es-section-number">{String(index + 1).padStart(2, '0')}</span>
                <h2>{section.title}</h2>
                {section.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </section>
            ))}
            <div className="es-reference">
              <span className="es-kicker">REFERENCIA OFICIAL</span>
              <a
                href="https://www.proconsumidor.gob.do/files/Los_derechos_del_consumidor.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Derechos del consumidor · Pro Consumidor <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="es-legal-contact">
        <div className="container">
          <div>
            <span className="es-kicker">CONVERSEMOS CON CLARIDAD.</span>
            <h2>
              ¿Hay algo que quieras
              <br />
              <em>consultar primero?</em>
            </h2>
          </div>
          <div>
            <p>Escríbele a Carlos sobre tus clases o estas condiciones.</p>
            <a className="button" href={`mailto:${site.email}`}>
              Escríbele a Carlos <ArrowUpRight size={18} />
            </a>
            <Link className="es-read-link" href="/preguntas-frecuentes/">
              Ver preguntas frecuentes <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
