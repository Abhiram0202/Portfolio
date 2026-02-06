'use client';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { personalData } from '@/lib/data';

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Find Me On
        </h2>
        <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl mb-8">
          Feel free to connect with me.
        </p>
        <div className="flex items-center justify-center gap-4">
          {personalData.contact.social.map((social) => (
            <Button key={social.name} variant="outline" size="icon" asChild>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6 text-foreground" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
