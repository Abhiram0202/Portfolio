import { SectionWrapper } from '@/components/section-wrapper';

export function BlogsSection() {
  return (
    <SectionWrapper id="blogs">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Blogs
        </h2>
        <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl mb-8">
          I will be sharing my thoughts on technology, programming and more. Stay tuned!
        </p>
      </div>
    </SectionWrapper>
  );
}
