'use client';

import Image from 'next/image';
import { personalData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';
import React from 'react';

export function HomeAboutSection() {
  const [transform, setTransform] = React.useState({ x: 0, y: 0, scale: 1 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    const maxRotate = 25;

    setTransform({
      x: yPct * maxRotate * -1,
      y: xPct * maxRotate,
      scale: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0, scale: 1 });
  };

  return (
    <SectionWrapper id="home-about" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl uppercase">
            LET ME <span className="text-primary">INTRODUCE</span> MYSELF
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {personalData.bio}
          </p>
        </div>

        {/* Right Profile Image */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex justify-center items-center"
          style={{ perspective: '800px' }}
        >
          <div
            style={{
              transform: `rotateX(${transform.x}deg) rotateY(${transform.y}deg) scale(${transform.scale})`,
            }}
            className="relative w-[230px] aspect-square rounded-full overflow-hidden transition-transform duration-100 ease-out"
          >
            <Image
              src="/myphoto.png"
              alt="My Profile Photo"
              fill
              className="object-cover scale-125"
              priority
            />
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}