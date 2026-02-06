'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { personalData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { handleGenerateAboutMe } from '@/app/actions';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

const aboutMeSchema = z.object({
  keywords: z.string().min(3, 'Please provide some keywords.'),
  experience: z.string().min(10, 'Please describe your experience.'),
});

type AboutMeFormValues = z.infer<typeof aboutMeSchema>;

export function AboutSection() {
  const [bio, setBio] = useState(personalData.bio);
  const headshot = PlaceHolderImages.find((img) => img.id === 'headshot');

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const form = useForm<AboutMeFormValues>({
    resolver: zodResolver(aboutMeSchema),
    defaultValues: { keywords: '', experience: '' },
  });

  const onSubmit = async (values: AboutMeFormValues) => {
    setIsGenerating(true);
    const result = await handleGenerateAboutMe(values);
    setIsGenerating(false);

    if ('summary' in result) {
      setBio(result.summary);
      setIsDialogOpen(false);
      toast({
        title: 'Success!',
        description: 'Your new "About Me" summary has been generated.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.error,
      });
    }
  };

  return (
    <SectionWrapper id="about" className="bg-card">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="flex justify-center items-center lg:col-span-1">
          <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
            {headshot && (
              <Image
                src={headshot.imageUrl}
                alt={personalData.name}
                width={400}
                height={400}
                data-ai-hint={headshot.imageHint}
                className="rounded-full object-cover shadow-lg border-4 border-background"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 lg:col-span-2">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              {personalData.name}
            </h1>
            <h2 className="text-2xl font-medium text-primary">
              {personalData.title}
            </h2>
            <p className="text-foreground/80 md:text-xl">{bio}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate with AI
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Generate 'About Me' with AI</DialogTitle>
                  <DialogDescription>
                    Provide some keywords and your experience to generate a
                    compelling summary.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-4 py-4"
                  >
                    <FormField
                      control={form.control}
                      name="keywords"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Keywords</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., React, Next.js, UI/UX"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="e.g., 5 years in web dev, led a team project..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button type="submit" disabled={isGenerating}>
                        {isGenerating && (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Generate
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
