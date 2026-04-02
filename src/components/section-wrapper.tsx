import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionWrapperProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full py-8 md:py-12 bg-transparent border-none outline-none overflow-hidden',
        className
      )}
    >
      <div className="container max-w-screen-xl px-4 md:px-8 mx-auto bg-transparent">
        {children}
      </div>
    </section>
  );
}