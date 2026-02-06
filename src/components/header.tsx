'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Home,
  User,
  Presentation,
  FileText,
  PenSquare,
  GitFork,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: Presentation },
  { href: '#resume', label: 'Resume', icon: FileText },
  { href: '#blogs', label: 'Blogs', icon: PenSquare },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-primary"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-bold text-2xl tracking-wider">AR.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-foreground/60 transition-colors hover:text-foreground"
            >
              <link.icon className="h-4 w-4" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitFork className="h-4 w-4" />
              <Star className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div
          className={cn(
            'md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t',
            'animate-in fade-in-20 slide-in-from-top-5'
          )}
        >
          <nav className="grid items-start gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-lg font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            ))}
            <Button asChild size="lg" className="mt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <GitFork className="h-5 w-5" />
                <Star className="h-5 w-5" />
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
