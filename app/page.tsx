import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ScrollStory from '@/components/ScrollStory';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import Guides from '@/components/Guides';
import ComplianceCalendar from '@/components/ComplianceCalendar';
import Calculator from '@/components/Calculator';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import ThreeAccent from '@/components/ThreeAccent';

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <Marquee />
      <ScrollStory />
      <ComparisonMatrix />
      <Guides />
      <ComplianceCalendar />
      <Calculator />
      <About />
      <FAQ />
      <ThreeAccent />
    </main>
  );
}
