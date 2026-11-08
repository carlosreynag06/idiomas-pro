import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Check } from 'lucide-react';
import { site } from '@/lib/site';
import '@/components/spanish-pages.css';
import './page.css';

export const metadata: Metadata = {
  title: { absolute: 'Política de privacidad | Idiomas Pro' },
  description:
    'Cómo se manejan tus datos al consultar sobre clases de inglés y español con Carlos Reyna en Puerto Plata.',
  alternates: { canonical: '/privacidad/' },
  openGraph: {
    locale: 'es_DO',
    title: 'Política de privacidad · Idiomas Pro',
    description: 'Tu información, explicada con claridad.',
    images: ['/images/es-privacy.webp'],
  },
};
const sections = [
  {
    id: 'responsable',
    title: 'Quién atiende tus datos',
    paragraphs: [
      'Carlos Reyna, responsable del servicio Idiomas Pro en Puerto Plata, República Dominicana, atiende las consultas sobre el tratamiento de la información relacionada con las clases.',
      'Para preguntar por tus datos o por esta política, escribe a la dirección de correo indicada al final de esta página.',
    ],
  },
  {
    id: 'datos',
    title: 'Qué información compartes',
    paragraphs: [
      'El formulario de consulta solicita tu nombre, correo electrónico, idioma de interés y meta de aprendizaje. También puedes indicar tu disponibilidad. Si seleccionas un paquete, se incluye esa preferencia.',
      'No pedimos documentos de identidad, datos de tarjetas ni información bancaria para enviar una consulta. Evita incluir información sensible en el campo de tus metas o en el correo inicial.',
    ],
  },
  {
    id: 'formulario',
    title: 'Qué ocurre dentro del formulario',
    paragraphs: [
      'Los datos del formulario permanecen temporalmente en la memoria de la página mientras completas la consulta. No se envían a una base de datos del sitio ni se guardan en un sistema de reservas.',
      'Al revisar tu consulta puedes abrir tu aplicación de correo, que recibe el texto preparado mediante un enlace de email, o copiar la consulta al portapapeles de tu dispositivo. La página no envía el mensaje por ti.',
    ],
  },
  {
    id: 'correo',
    title: 'Cuando decides enviar un correo',
    paragraphs: [
      'Si abres tu aplicación de correo o envías el texto por tu cuenta, tu proveedor de email y el proveedor del destinatario procesan ese mensaje conforme a sus propias condiciones.',
      'Carlos utiliza la información que recibe para responderte, conversar sobre tus metas, coordinar horarios y lugares, confirmar las condiciones de las clases y atender la relación de enseñanza. No se utiliza esta consulta para suscribirte automáticamente a publicidad.',
    ],
  },
  {
    id: 'tecnicos',
    title: 'Datos técnicos, cookies y medición',
    paragraphs: [
      'Esta versión no incorpora una plataforma de analítica de terceros ni herramientas de publicidad. Las fuentes tipográficas y las imágenes se sirven desde los recursos del propio sitio.',
      'El proveedor de alojamiento puede tratar datos técnicos de las solicitudes, como dirección IP y registros básicos de acceso, para servir y proteger la web. Antes del lanzamiento debe verificarse y completarse la información correspondiente al alojamiento definitivo y a cualquier herramienta nueva que se integre.',
    ],
  },
  {
    id: 'terceros',
    title: 'Con quién puede compartirse información',
    paragraphs: [
      'No vendemos tu información personal. El correo electrónico y el alojamiento web pueden implicar el tratamiento de información por los proveedores necesarios para prestar esos servicios.',
      'También podrá comunicarse información cuando exista una obligación legal aplicable. Si se incorporan herramientas de pago, reservas u otros servicios que cambien el tratamiento de datos, esta política deberá actualizarse para explicarlo.',
    ],
  },
  {
    id: 'conservacion',
    title: 'Cuánto tiempo se conserva',
    paragraphs: [
      'La información recibida por correo se conserva mientras sea necesaria para atender tu consulta, organizar las clases y cumplir las obligaciones aplicables. Los plazos concretos de conservación deben definirse y confirmarse antes del lanzamiento público.',
      'Los campos de una nueva consulta no constituyen una cuenta de usuario ni un historial permanente del sitio. Si copias o envías el texto, ese contenido puede permanecer en tu portapapeles, tu aplicación de email o los sistemas del proveedor que hayas elegido.',
    ],
  },
  {
    id: 'derechos',
    title: 'Tus derechos y tus opciones',
    paragraphs: [
      'Puedes solicitar información sobre los datos que hayas compartido con Carlos, pedir acceso o corrección, y solicitar su cancelación u oponerte al tratamiento cuando corresponda conforme a la normativa aplicable.',
      'Envía tu solicitud al correo de contacto y explica qué necesitas. Se podrá pedir información razonable para verificar que la solicitud corresponde a la persona interesada. No envíes documentos sensibles sin que se haya acordado antes un canal adecuado.',
    ],
  },
  {
    id: 'cuidado',
    title: 'Uso responsable y cuidado de la información',
    paragraphs: [
      'Comparte únicamente lo necesario para hablar de tus clases y revisa la consulta antes de enviarla. No existe una transmisión por internet o un servicio de correo que permita prometer seguridad absoluta.',
      'Si detectas un problema relacionado con la información que nos hayas enviado, comunícalo a Carlos para que pueda revisar la situación y atender tu solicitud.',
    ],
  },
  {
    id: 'actualizaciones',
    title: 'Cambios y versión de esta política',
    paragraphs: [
      'Documento actualizado el 8 de noviembre de 2026. Es una versión de trabajo que debe completarse con las operaciones, los proveedores y los plazos definitivos antes del lanzamiento público.',
      'La Ley núm. 172-13 es una referencia del marco dominicano de protección de datos personales. Puedes consultar la fuente oficial incluida al final. Los cambios de esta política se publicarán aquí con su fecha de actualización.',
    ],
  },
];
export default function PrivacidadPage() {
  return (
    <main id="main" className="spanish-page spanish-legal-page privacy-page" lang="es">
      <header className="es-legal-hero">
        <div className="container es-legal-hero-grid">
          <div>
            <span className="es-kicker hero-animate">POLÍTICA DE PRIVACIDAD</span>
            <h1 className="hero-animate">
              Tu información.
              <br />
              <em>Con claridad.</em>
            </h1>
            <p className="hero-animate">
              Qué compartes, para qué se utiliza y qué puedes hacer cuando quieras consultar sobre
              tus datos.
            </p>
            <a href="#contenido" className="es-read-link hero-animate">
              Conoce los detalles <ArrowDown size={17} />
            </a>
            <span className="es-version hero-animate">
              Actualizado el 8 de noviembre de 2026 · Versión para revisión
            </span>
          </div>
          <Image
            className="hero-animate"
            src="/images/es-privacy.webp"
            width={1100}
            height={943}
            alt="Escudo verde de cerámica con un sobre color lima y un detalle marfil"
            sizes="(max-width:900px) 90vw,42vw"
            preload
          />
        </div>
      </header>
      <section className="es-summary" aria-label="En pocas palabras">
        <div className="container">
          {[
            'Tú decides cuándo enviar tu consulta.',
            'El formulario no cobra ni reserva.',
            'Puedes preguntar por tus datos.',
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
            <nav aria-label="Contenido de la política de privacidad">
              {sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {section.title}
                </a>
              ))}
            </nav>
            <Link href="/terminos/" className="es-read-link">
              Términos del servicio <ArrowUpRight size={16} />
            </Link>
          </aside>
          <div className="es-document-body">
            <p className="es-draft-note">
              Esta política explica el funcionamiento actual del formulario y del contacto por
              correo, para que puedas decidir qué información compartir.
            </p>
            {sections.map((section, index) => (
              <section key={section.id} id={section.id}>
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
                href="https://www.sb.gob.do/regulacion/leyes/ley-no-172-13-proteccion-de-los-datos/"
                target="_blank"
                rel="noreferrer"
              >
                Ley núm. 172-13 · Fuente oficial <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="es-legal-contact">
        <div className="container">
          <div>
            <span className="es-kicker">TUS PREGUNTAS IMPORTAN.</span>
            <h2>
              Hablemos de
              <br />
              <em>tu información.</em>
            </h2>
          </div>
          <div>
            <p>
              Para consultar, corregir o preguntar por los datos que hayas compartido, escribe a
              Carlos.
            </p>
            <a className="button" href={`mailto:${site.email}`}>
              Consultar sobre mis datos <ArrowUpRight size={18} />
            </a>
            <span className="es-contact-email">{site.email}</span>
            <Link className="es-read-link" href="/preguntas-frecuentes/">
              Ver preguntas frecuentes <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
