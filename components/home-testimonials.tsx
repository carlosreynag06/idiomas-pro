import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { stories } from '@/lib/content';
import { Eyebrow } from './shared';
import { HomeStoryQuote } from './home-story-quote';
import './home-testimonials.css';

export function HomeTestimonials() {
  const previews = [stories[2], stories[1], stories[0]].map(({ name, role, quote, language }) => ({
    name,
    role,
    quote,
    language,
  }));
  return (
    <section className="home-voices" aria-labelledby="home-voices-title">
      <div className="container">
        <div className="home-voices-heading" data-reveal>
          <div>
            <Eyebrow>WHAT CONFIDENCE CAN SOUND LIKE</Eyebrow>
            <h2 id="home-voices-title">
              More than words.
              <br />
              <em>Little turning points.</em>
            </h2>
          </div>
          <Link href="/testimonios/" className="home-voices-link">
            Read the stories <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="home-voices-grid">
          <figure className="home-voices-photo" data-reveal>
            <Image
              src="/images/home-learning-voices.webp"
              alt="Illustrative learner finding the words during a private, face-to-face language lesson"
              width={1122}
              height={1402}
              sizes="(max-width: 900px) 90vw, 41vw"
            />
            <figcaption>
              <span>ONE CONVERSATION AT A TIME.</span>
              <span>Illustrative lesson image</span>
            </figcaption>
          </figure>
          <div className="home-voices-stories" data-reveal>
            <HomeStoryQuote stories={previews} />
          </div>
        </div>
        <p className="home-voices-note">
          Illustrative student stories. Sample names and quotes are included for design review.
        </p>
      </div>
    </section>
  );
}
