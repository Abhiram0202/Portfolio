'use client';

import { personalData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 uppercase">
          Let Me Introduce Myself
        </h2>
        <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">{personalData.bio}</p>
      </div>
    </SectionWrapper>
  );
}
