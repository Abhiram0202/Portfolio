'use client';

import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';

export default function ResumePage() {
  return (
    <SectionWrapper id="resume" className="min-h-screen">
      <div className="flex flex-col items-center gap-10 max-w-4xl mx-auto py-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl uppercase">My Resume</h1>
          <p className="text-muted-foreground text-lg">You can preview or download my latest professional CV below.</p>
        </div>

        {/* Top Download Button */}
        <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
          <a href="/ResumeAB.pdf" download="Abhiram_Yadav_Resume.pdf">
            <Download className="h-5 w-5" />
            Download CV
          </a>
        </Button>

        {/* Resume Preview */}
        <div className="w-full glass rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
          <div className="relative aspect-[1/1.414] w-full">
            <Image
              src="/resume-preview.png"
              alt="Resume Preview"
              fill
              className="object-contain p-2 md:p-6"
              priority
            />
          </div>
        </div>

        {/* Bottom Download Button */}
        <Button asChild size="lg" variant="outline" className="gap-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all">
          <a href="/ResumeAB.pdf" download="Abhiram_Yadav_Resume.pdf">
            <Download className="h-5 w-5" />
            Download CV
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
