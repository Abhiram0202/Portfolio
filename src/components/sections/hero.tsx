'use client';

import { personalData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';

export function HeroSection() {
  return (
    <SectionWrapper
      id="home"
      className="flex-grow flex items-center justify-start"
    >
      <div className="flex flex-col items-start justify-center text-left">
        <div className="space-y-2">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi There!{' '}
            <span className="inline-block origin-[70%_70%] animate-wave">
              👋
            </span>
          </h1>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            I&apos;M{' '}
            <span className="text-primary">
              {personalData.name.toUpperCase()}
            </span>
          </h1>
          <h2 className="text-2xl font-medium text-primary uppercase tracking-widest">
            {personalData.title}
          </h2>
        </div>
      </div>
    </SectionWrapper>
  );
}
