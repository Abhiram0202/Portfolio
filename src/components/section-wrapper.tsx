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
        'w-full py-12 md:py-24 lg:py-32 bg-transparent border-none outline-none',
        className
      )}
    >
      <div className="container px-6 md:px-12 lg:px-24 mx-auto">{children}</div>
    </section>
  );
}