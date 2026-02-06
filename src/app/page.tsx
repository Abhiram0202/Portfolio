import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';
import { ProjectsSection } from '@/components/sections/projects';
import { ResumeSection } from '@/components/sections/resume';
import { BlogsSection } from '@/components/sections/blogs';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <BlogsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
