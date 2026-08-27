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
            India |{' '}
            <a
              href="mailto:abhiy9164@gmail.com"
              className="text-primary hover:underline"
            >
              abhiy9164@gmail.com
            </a>
          </p>
        </div>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Career Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 leading-relaxed">
            Software Engineer with a strong foundation in Java, backend development, and AI. Passionate about building scalable, efficient, and real-world software solutions while continuously improving technical and problem-solving skills. Seeking opportunities to contribute to innovative projects, apply AI-driven solutions, and grow into a highly skilled software professional.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-lg font-bold">Bachelor of Technology in Computer Science</p>
              <p className="text-foreground/80">SR University, India</p>
              <p className="text-sm text-muted-foreground">2023 – 2027</p>
              <p className="mt-2 text-foreground/90">
                <span className="font-semibold">Relevant Coursework:</span> Object-Oriented Programming (Java), Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Backend Development, Artificial Intelligence & Machine Learning, Cloud Computing.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>
                <strong>Programming Languages:</strong> Java, JavaScript, HTML/CSS, SQL
              </li>
              <li>
                <strong>rameworks & Technologies:</strong> Spring Boot, REST APIs, React, Node.js
              </li>
              <li>
                <strong>Database:</strong> MySQL, MongoDB
              </li>
              <li>
                <strong>Core Concepts:</strong> Data Structures & Algorithms, OOP, DBMS
              </li>
              <li>
                <strong>AI:</strong> Artificial Intelligence, Generative AI
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub, Postman, VS Code
              </li>
              <li>
                <strong>Cloud:</strong> AWS
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Activities & Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Actively practicing Data Structures & Algorithms and problem-solving</li>
              <li>Building projects using Java, Spring Boot, REST APIs, and databases</li>
              <li>Exploring Artificial Intelligence and Generative AI technologies</li>
              <li>Strengthening OOP, backend development, and software engineering fundamentals</li>
              <li>Continuously improving skills through hands-on projects and coding practice</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}