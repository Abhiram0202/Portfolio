'use client';

import { personalData } from '@/lib/data';

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] items-center"
    >
      <div className="container px-10 md:px-16">
        <div className="flex flex-col items-start justify-center text-left">
          <div className="space-y-2">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-foreground">
              Hi There!{' '}
              <span className="inline-block origin-[70%_70%] animate-wave">
                👋
              </span>
            </h1>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-foreground">
              I&apos;M{' '}
              <span className="text-primary">
                {personalData.name.toUpperCase()}
              </span>
            </h1>
            <h2 className="text-xl font-medium text-primary uppercase tracking-widest">
              {personalData.title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
