'use client';

import { useEffect, useRef } from 'react';
import { Globe2, MessageCircle, UserRoundCheck } from 'lucide-react';

export function TrustBand() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const strip = ref.current;
    const pricingBand = document.querySelector<HTMLElement>('.pricing-banner');
    if (!strip || !pricingBand) return;

    const matchHeight = () => {
      strip.style.minHeight = `${Math.ceil(pricingBand.getBoundingClientRect().height)}px`;
    };
    matchHeight();
    const observer = new ResizeObserver(matchHeight);
    observer.observe(pricingBand);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="proof-strip" aria-label="Our approach">
      <div className="container proof-inner">
        <div>
          <UserRoundCheck size={30} strokeWidth={1.6} />
          <p>
            <strong>One teacher. All you.</strong>
            <span>Private lessons with Carlos Reyna</span>
          </p>
        </div>
        <div>
          <Globe2 size={29} strokeWidth={1.3} />
          <p>
            <strong>Two languages. Real life.</strong>
            <span>English & Spanish, your way</span>
          </p>
        </div>
        <div>
          <MessageCircle size={29} strokeWidth={1.3} />
          <p>
            <strong>Hundreds of students taught.</strong>
            <span>Across the Dominican Republic & US</span>
          </p>
        </div>
      </div>
    </section>
  );
}
