import { personalData } from '@/lib/data';

export function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 px-6 sm:flex-row md:px-10">
        <p className="text-sm text-foreground">
          Designed and Developed by {personalData.name}
        </p>
        <p className="text-sm text-foreground">
          Copyright © 2026 AY
        </p>
        <div className="flex items-center gap-4">
          {personalData.contact.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-foreground transition-colors hover:text-primary"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
