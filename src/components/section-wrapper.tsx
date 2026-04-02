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
        'w-full py-12 md:py-24 lg:py-32 bg-transparent border-none outline-none overflow-hidden',
        className
      )}
    >
      <div className="container max-w-screen-2xl px-16 md:px-24 mx-auto bg-transparent">
        {children}
      </div>
    </section>
  );
}
