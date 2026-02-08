'use client';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { personalData } from '@/lib/data';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Find Me On
        </h2>
        <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl mb-8">
          Feel free to <span className="text-primary">connect</span> with me.
        </p>
        <div className="flex items-center justify-center gap-6">
          <TooltipProvider>
            {personalData.contact.social.map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-14 w-14 bg-card-foreground text-primary hover:bg-card-foreground/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="h-7 w-7" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </SectionWrapper>
  );
}
