import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <span className="eyebrow">404 / A LITTLE LOST IN TRANSLATION</span>
      <h1>
        Let’s find
        <br />
        <em>our way back.</em>
      </h1>
      <p>That page isn’t here. A good conversation still is.</p>
      <Link href="/" className="button">
        Back to familiar words <ArrowUpRight size={18} />
      </Link>
    </main>
  );
}
