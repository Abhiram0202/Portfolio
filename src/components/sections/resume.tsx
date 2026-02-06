import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';

export function ResumeSection() {
  return (
    <SectionWrapper id="resume" className="bg-card">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Resume
        </h2>
        <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl mb-8">
          Download my resume to know more about my work and experiences.
        </p>
        <Button asChild>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
