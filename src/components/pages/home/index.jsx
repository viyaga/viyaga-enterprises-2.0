  import HeroSection from './hero';
import Services from './services-2';
  import ServicesSection from './services';
  import TechStackSection from './tech-stack';
  import PortfolioSection from './portfolio';
  import TestimonialsSection from './testimonials';
  import ContactSection from './contact';

  export default function HomePage() {
    return (
      <div className="flex flex-col">
        <HeroSection />
        <Services />
        <ServicesSection />
        <TechStackSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    );
  }
  
