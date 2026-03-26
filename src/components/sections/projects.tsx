'use client';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { projects as projectData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="mt-4 max-w-[700px] text-foreground/80 md:text-xl">
          A selection of my work. Each project showcases my ability to solve
          problems and deliver quality results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => {
          const projectImage = PlaceHolderImages.find(
            (img) => img.id === project.imageKey
          );
          return (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                {projectImage && (
                  <div className="aspect-video overflow-hidden rounded-lg border">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={projectImage.imageHint}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <CardTitle className="font-headline text-2xl pt-4">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-foreground/80">{project.description}</p>
              </CardContent>
              <CardFooter className="flex-col items-start gap-4">
                 <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className='flex justify-between w-full items-center'>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-sm font-semibold text-primary hover:underline flex items-center gap-1'>
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
