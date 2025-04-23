import HeroSection from './hero';
import Services from './services-2';
// import ServicesSection from './services';
import TechStackSection from './tech-stack';
import PortfolioSection from './portfolio';
import TestimonialsSection from './testimonials';
import ContactSection from './contact';
import TrustedBy from './trusted-by';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Services />
      <PortfolioSection />
      {/* <ServicesSection /> */}
      <TechStackSection />
      <TestimonialsSection />
      <TrustedBy />
      <ContactSection />
    </div>
  );
}

