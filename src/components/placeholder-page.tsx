import { SectionWrapper } from '@/components/section-wrapper';

type PlaceholderPageProps = {
  id: string;
  title: string;
};

export function PlaceholderPage({ id, title }: PlaceholderPageProps) {
  return (
    <SectionWrapper
      id={id}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          {title}
        </h2>
        <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
          Still under upgrading and learning.
        </p>
      </div>
    </SectionWrapper>
  );
}
