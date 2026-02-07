'use client';

import { personalData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const profileImage = PlaceHolderImages.find(
    (img) => img.id === 'profile-avatar'
  );
  const imageUrl = profileImage?.imageUrl;

  return (
    <SectionWrapper id="home" className="bg-card">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="flex flex-col justify-center gap-6 lg:col-span-2">
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
        <div className="flex justify-center items-center lg:col-span-1">
            <div className="w-full max-w-[350px] lg:max-w-[400px]">
                {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Abhiram Yadav"
                    className="rounded-full object-cover w-full aspect-square border-4 border-primary/20"
                />
                )}
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
