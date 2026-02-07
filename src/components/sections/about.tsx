'use client';

import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 uppercase">
          Let Me Introduce Myself
        </h2>
      </div>
      <div className="max-w-4xl mx-auto text-left space-y-8">
        <div className="text-center mb-8">
          <p className="text-lg text-foreground/80">
            India | abhiy9164@gmail.com
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Career Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 leading-relaxed">
              Dedicated third-year Computer Science student at SR University (2023–2027) with strong
              interest in Data Structures, Algorithms, and Software Development. Currently
              strengthening programming fundamentals and full-stack development skills. Seeking an
              internship opportunity to apply analytical thinking and grow through real-world experience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-lg font-bold">Bachelor of Technology in Computer Science</p>
              <p className="text-foreground/80">SR University, India</p>
              <p className="text-sm text-muted-foreground">2023 – 2027</p>
              <p className="mt-2 text-foreground/90">
                <span className="font-semibold">Relevant Coursework:</span> Data Structures, Algorithms, DBMS, Operating Systems, Computer
                Networks
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>
                <strong>Programming Languages:</strong> Java, JavaScript, Python
              </li>
              <li>
                <strong>Core Concepts:</strong> Data Structures (Basics), Algorithms (Basics), OOP
              </li>
              <li>
                <strong>Web Development (Learning):</strong> HTML, CSS, React, Node.js
              </li>
              <li>
                <strong>Tools:</strong> Git (Basics), VS Code, AWS
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Activities & Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Actively practicing problem-solving and Data Structures & Algorithms</li>
              <li>Building foundational knowledge in full-stack development</li>
              <li>Exploring AI-assisted coding tools to enhance productivity</li>
              <li>Consistently improving programming fundamentals</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
