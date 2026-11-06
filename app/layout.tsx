import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/dm-sans';
import '@fontsource/instrument-serif/latin-400-italic.css';
import './globals.css';
import { SiteShell } from '@/components/site-shell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Idiomas Pro — English & Spanish, in real life. | Puerto Plata',
    template: '%s | Idiomas Pro · Puerto Plata',
  },
  description:
    'Private, in-person English and Spanish lessons with Carlos Reyna in Puerto Plata, Dominican Republic. Real conversations. Personal attention. A whole new world of words.',
  openGraph: {
    title: 'Idiomas Pro — Your world, in other words.',
    description: 'Private English & Spanish lessons. In person. In Puerto Plata.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Idiomas Pro — English and Spanish in Puerto Plata',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
};
export const viewport: Viewport = { themeColor: '#f7f7ef' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    url: site.url,
    description:
      'Private in-person English and Spanish lessons in Puerto Plata, Dominican Republic.',
    founder: { '@type': 'Person', name: site.teacher },
    areaServed: { '@type': 'City', name: 'Puerto Plata' },
    knowsLanguage: ['English', 'Spanish'],
  };
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
