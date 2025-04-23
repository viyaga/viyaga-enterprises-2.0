import HeroSection from './hero';
import Services from './services-2';
import PortfolioSection from './portfolio';
import TestimonialsSection from './testimonials';
import ContactSection from './contact';
import TrustedBy from './trusted-by';
import { WhyChooseUsSection } from './why-choose-us';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustedBy />
      <Services />
      <PortfolioSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <ContactSection />
    </div>
  );
}

