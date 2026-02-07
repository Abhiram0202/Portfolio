'use client';

import { personalData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';

export function HeroSection() {
  return (
    <SectionWrapper id="home" className="bg-card border-b-0 flex-grow">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div className="flex flex-col justify-center gap-6">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hi There!{' '}
              <span className="inline-block origin-[70%_70%] animate-wave">
                👋
              </span>{' '}
              I'M{' '}
              <span className="text-primary">
                {personalData.name.toUpperCase()}
              </span>
            </h1>
            <h2 className="text-2xl font-medium text-foreground/80 uppercase tracking-widest">
              {personalData.title}
            </h2>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
