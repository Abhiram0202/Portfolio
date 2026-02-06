import { Code2 } from 'lucide-react';
import { personalData } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code2 className="h-6 w-6 text-primary hidden md:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} {personalData.name}. All rights
            reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {personalData.contact.social.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
