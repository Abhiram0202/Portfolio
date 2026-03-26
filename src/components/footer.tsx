import { personalData } from '@/lib/data';

export function Footer() {
  return (
    <footer className="w-full bg-transparent">
      <div className="container grid grid-cols-1 items-center gap-4 py-8 px-6 md:grid-cols-3 md:px-10">
        <p className="text-sm text-foreground/60 text-center md:text-left">
          Designed and Developed by {personalData.name}
        </p>
        <p className="text-sm text-foreground/40 text-center">
          Copyright © 2026 AY
        </p>
        <div className="flex items-center justify-center gap-4 md:justify-end">
          {personalData.contact.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-foreground/60 transition-colors hover:text-primary"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
