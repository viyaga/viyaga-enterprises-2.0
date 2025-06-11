import HeroSection from './hero';
import Services from './services-2';
import PortfolioSection from './portfolio';
import TestimonialsSection from './testimonials';
import TrustedBy from './trusted-by';
import { WhyChooseUsSection } from './why-choose-us';
import Contact2 from './contact2/contact2';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustedBy />
      <Services />
      <PortfolioSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      {/* <ContactSection /> */}
      <Contact2 />
    </div>
  );
}

