'use client';

import Image from 'next/image';
import { personalData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionWrapper } from '@/components/section-wrapper';

export function HomeAboutSection() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'avatar');

  return (
    <SectionWrapper id="home-about" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl uppercase text-primary">
            LET ME INTRODUCE MYSELF
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {personalData.bio}
          </p>
        </div>
        <div className="flex justify-center items-center">
          {avatarImage && (
            <Image
              src={avatarImage.imageUrl}
              alt="Abhiram Yadav Avatar"
              width={350}
              height={350}
              data-ai-hint={avatarImage.imageHint}
              className="rounded-full aspect-square object-cover"
            />
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
