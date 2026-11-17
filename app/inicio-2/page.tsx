import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';
import './page.css';

export const metadata: Metadata = {
  title: 'Inicio 2 · Prueba de color',
  description:
    'Una versión alternativa de la página de inicio de Idiomas Pro, con una paleta azul y marino.',
  alternates: { canonical: '/inicio-2/' },
  robots: { index: false, follow: true },
};

export default function InicioDosPage() {
  return (
    <div className="inicio-2">
      <HomePage aboutFirst />
    </div>
  );
}
