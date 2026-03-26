import { ContactSection } from '@/components/sections/contact';
import { HomeAboutSection } from '@/components/sections/home-about';
import { HeroSection } from '@/components/sections/hero';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeAboutSection />
      <ContactSection />
    </>
  );
}
