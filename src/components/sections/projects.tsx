'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Loader2 } from 'lucide-react';
import { projects as projectData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Textarea } from '../ui/textarea';
import { handleSuggestImprovements } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import * as Diff from 'diff';

type Project = (typeof projectData)[0] & { currentDescription: string };

function DescriptionDiff({ oldDesc, newDesc }: { oldDesc: string, newDesc: string }) {
  const changes = Diff.diffChars(oldDesc, newDesc);

  return (
    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
      {changes.map((part, index) => {
        const color = part.added ? 'bg-green-200/50 text-green-800' :
          part.removed ? 'bg-red-200/50 text-red-800 line-through' : '';
        return <span key={index} className={color}>{part.value}</span>;
      })}
    </p>
  );
}


export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(
    projectData.map((p) => ({ ...p, currentDescription: p.description }))
  );

  const [isDialogOpen, setIsDialogOpen] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [improvedDescription, setImprovedDescription] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerateClick = async (projectDescription: string) => {
    setIsGenerating(true);
    setImprovedDescription(null);
    const result = await handleSuggestImprovements({ projectDescription });
    setIsGenerating(false);

    if ('improvedDescription' in result) {
      setImprovedDescription(result.improvedDescription);
    } else {
      toast({
        variant: 'destructive',
        title: 'AI suggestion failed',
        description: result.error,
      });
    }
  };

  const handleUseSuggestion = (projectId: string) => {
    if (improvedDescription) {
      setProjects((prevProjects) =>
        prevProjects.map((p) =>
          p.id === projectId
            ? { ...p, currentDescription: improvedDescription }
            : p
        )
      );
      setIsDialogOpen(null);
      setImprovedDescription(null);
      toast({
        title: 'Success!',
        description: 'Project description updated.',
      });
    }
  };


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
        {projects.map((project) => {
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
                <p className="text-foreground/80">{project.currentDescription}</p>
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

                  <Dialog open={isDialogOpen === project.id} onOpenChange={(open) => {
                    if (!open) {
                      setIsDialogOpen(null);
                      setImprovedDescription(null);
                    }
                  }}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" onClick={() => setIsDialogOpen(project.id)}>
                        <Sparkles className="mr-2 h-4 w-4" /> AI Improve
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Improve Description with AI</DialogTitle>
                        <DialogDescription>
                          Let AI suggest a more engaging and professional description for your project.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div>
                          <h3 className="font-semibold mb-2">Current Description</h3>
                          <Textarea value={project.currentDescription} readOnly rows={5} />
                        </div>
                        <Button
                          onClick={() => handleGenerateClick(project.currentDescription)}
                          disabled={isGenerating}
                          className="w-full"
                        >
                          {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Generate Suggestion
                        </Button>
                        {improvedDescription && (
                           <div className="space-y-4 rounded-lg border p-4">
                            <h3 className="font-semibold">AI Suggestion</h3>
                            <DescriptionDiff oldDesc={project.currentDescription} newDesc={improvedDescription} />
                            <div className="flex justify-end">
                                <Button onClick={() => handleUseSuggestion(project.id)}>Use this suggestion</Button>
                            </div>
                           </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
