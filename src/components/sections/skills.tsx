'use client';
import { skills } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Skills & Expertise
        </h2>
        <p className="mt-4 max-w-[700px] text-foreground/80 md:text-xl">
          A collection of technologies and methodologies I use to bring ideas to
          life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex-row items-center gap-4">
              <skillCategory.icon className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                {skillCategory.list.map((skill) => (
                  <li key={skill.name}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="space-y-2">
                            <div className="flex justify-between items-baseline">
                                <p className="font-medium">{skill.name}</p>
                                <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
