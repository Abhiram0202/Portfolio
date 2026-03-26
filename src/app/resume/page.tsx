'use client';

import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import Image from 'next/image';

export default function ResumePage() {
  return (
    <SectionWrapper id="resume" className="min-h-screen">
      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Resume</h1>
          <p className="text-muted-foreground text-lg">Download my latest resume or preview it below.</p>
        </div>

        {/* Top Download Button */}
        <Button asChild size="lg" className="gap-2">
          <a href="/ResumeAB.pdf" download="Abhiram_Yadav_Resume.pdf">
            <Download className="h-5 w-5" />
            Download CV
          </a>
        </Button>

        {/* Resume Preview */}
        <div className="w-full glass rounded-xl overflow-hidden border border-primary/20 shadow-2xl">
          <div className="relative aspect-[1/1.4] w-full">
            <Image
              src="/resume-preview.png"
              alt="Resume Preview"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>

        {/* Bottom Download Button */}
        <div className="flex flex-col items-center gap-4 py-8">
          <Button asChild size="lg" variant="outline" className="gap-2 border-primary/50 hover:border-primary">
            <a href="/ResumeAB.pdf" download="Abhiram_Yadav_Resume.pdf">
              <Download className="h-5 w-5" />
              Download CV
            </a>
          </Button>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <FileText className="h-4 w-4" />
            ResumeAB.pdf
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}