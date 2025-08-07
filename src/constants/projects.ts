export interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  link: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Blue Bottle Coffee (USA)",
    description: "Modern coffee chain redesign for the US market.",
    problem: "Existing site had slow page loads and inconsistent branding across devices.",
    solution: "Optimized images, consistent design, and improved mobile experience.",
    link: "https://bluebottlecoffee.com",
    image: "/images/blue-cafe.jpg",
    tags: ["USA", "Coffee"]
  },
  {
    title: "Tartine Bakery (USA)",
    description: "A delicious and minimal layout for a famous bakery.",
    problem: "Low online orders due to cluttered layout and confusing navigation.",
    solution: "Streamlined menu, clear ordering buttons, and smooth animations.",
    link: "https://tartinebakery.com",
    image: "/images/tartine.jpg",
    tags: ["USA", "Bakery"]
  },
  {
    title: "Sara Dietschy (USA)",
    description: "A creative personal website for a content creator.",
    problem: "Outdated layout and difficulty showcasing multimedia content.",
    solution: "Dynamic portfolio with video and image galleries.",
    link: "https://saradietschy.com",
    image: "/images/sara.jpg",
    tags: ["USA", "Portfolio"]
  },
  {
    title: "Honest Burgers (UK)",
    description: "Local burger chain with rustic vibes.",
    problem: "Mobile menu was hard to access and bookings were dropping.",
    solution: "Responsive design, easy booking access, and faster load time.",
    link: "https://www.honestburgers.co.uk",
    image: "/images/honest.jpg",
    tags: ["UK", "Food"]
  },
  {
    title: "The Fold London (UK)",
    description: "Elegant clothing brand with bold aesthetics.",
    problem: "E-commerce conversions were low due to slow checkout flow.",
    solution: "Simplified checkout and seamless browsing experience.",
    link: "https://thefoldlondon.com",
    image: "/images/fold.jpg",
    tags: ["UK", "Fashion"]
  },
  {
    title: "Bloom & Wild (UK)",
    description: "Fresh and lively design for a flower startup.",
    problem: "Users found it hard to customize bouquets on mobile.",
    solution: "Mobile-friendly customization and real-time preview.",
    link: "https://www.bloomandwild.com",
    image: "/images/bloom.jpg",
    tags: ["UK", "Flowers"]
  },
  {
    title: "Third Wave Coffee (India)",
    description: "Bold UI for India’s growing café chain.",
    problem: "Inconsistent menu details across locations led to confusion.",
    solution: "Centralized menu and easy location filtering.",
    link: "https://www.thirdwavecoffee.in",
    image: "/images/thirdwave.jpg",
    tags: ["India", "Coffee"]
  },
  {
    title: "Chumbak (India)",
    description: "Vibrant and colorful lifestyle brand website.",
    problem: "Site performance lagged due to heavy animations.",
    solution: "Smoother transitions and faster loading experience.",
    link: "https://www.chumbak.com",
    image: "/images/chumbak.jpg",
    tags: ["India", "Lifestyle"]
  },
  {
    title: "Zivame (India)",
    description: "Modern lingerie store focused on accessibility.",
    problem: "Many users dropped off during product filtering.",
    solution: "Fast filtering, clear categories, and easy navigation.",
    link: "https://www.zivame.com",
    image: "/images/zivame.jpg",
    tags: ["India", "Fashion"]
  },
  {
    title: "Pilot Roasters (Canada)",
    description: "Cool, calm branding for Canadian coffee roastery.",
    problem: "Online store lacked user trust due to missing product details.",
    solution: "Detailed product pages with reviews and galleries.",
    link: "https://www.pilotcoffeeroasters.com",
    image: "/images/pilot.jpg",
    tags: ["Canada", "Coffee"]
  },
  {
    title: "Peace Collective (Canada)",
    description: "Purpose-driven fashion brand for millennials.",
    problem: "Website didn’t communicate brand mission clearly.",
    solution: "Storytelling section to highlight purpose and values.",
    link: "https://www.peace-collective.com",
    image: "/images/peace.jpg",
    tags: ["Canada", "Fashion"]
  },
  {
    title: "St. Ali Coffee (Australia)",
    description: "Melbourne café redesign with urban aesthetics.",
    problem: "High bounce rate on the homepage due to no clear CTA.",
    solution: "Clear booking and menu buttons right on homepage.",
    link: "https://stali.com.au",
    image: "/images/stali.jpg",
    tags: ["Australia", "Coffee"]
  },
  {
    title: "Bellroy (Australia)",
    description: "Stylish wallet and accessories eCommerce site.",
    problem: "Complex navigation made product discovery difficult.",
    solution: "Simplified navigation and helpful search suggestions.",
    link: "https://bellroy.com",
    image: "/images/bellroy.jpg",
    tags: ["Australia", "Accessories"]
  },
  {
    title: "Bergfreunde (Germany)",
    description: "Modern redesign for a German outdoor startup.",
    problem: "Site had outdated UI and poor mobile layout.",
    solution: "Clean layout and mobile-friendly browsing.",
    link: "https://www.bergfreunde.eu",
    image: "/images/bergfreunde.jpg",
    tags: ["Germany", "Outdoor"]
  },
  {
    title: "Bonanza Coffee (Germany)",
    description: "Berlin roastery with a minimalist site design.",
    problem: "User engagement was low due to static content.",
    solution: "Added dynamic blog and coffee recipe section.",
    link: "https://bonanzacoffee.de",
    image: "/images/bonanza.jpg",
    tags: ["Germany", "Coffee"]
  },
  {
    title: "Merci Store (France)",
    description: "Paris concept store with refined UI/UX.",
    problem: "Store pages were cluttered and slow to load.",
    solution: "Faster pages and organized product layout.",
    link: "https://www.merci-merci.com",
    image: "/images/merci.jpg",
    tags: ["France", "Store"]
  },
  {
    title: "Typofonderie (France)",
    description: "Boutique typography studio in Paris.",
    problem: "Portfolio pieces were hard to browse and categorize.",
    solution: "Filterable gallery and type previews.",
    link: "https://www.typofonderie.com",
    image: "/images/typo.jpg",
    tags: ["France", "Typography"]
  },
  {
    title: "Blue Bottle Japan (Japan)",
    description: "Local Japanese version of a café site.",
    problem: "Language switcher was unclear and site lacked localization.",
    solution: "Clear language toggle and translated content.",
    link: "https://bluebottlecoffee.jp",
    image: "/images/blue-japan.jpg",
    tags: ["Japan", "Cafe"]
  },
  {
    title: "BEAMS (Japan)",
    description: "Trendy fashion brand with bold layout.",
    problem: "Customers struggled to find new arrivals and sales items.",
    solution: "'New' and 'Sale' badges with filter options.",
    link: "https://www.beams.co.jp",
    image: "/images/beams.jpg",
    tags: ["Japan", "Fashion"]
  }
];
