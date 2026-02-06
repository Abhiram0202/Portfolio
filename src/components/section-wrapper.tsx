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
        'w-full py-12 md:py-24 lg:py-32 border-b last:border-b-0',
        className
      )}
    >
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
}
