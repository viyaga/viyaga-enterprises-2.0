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
    solution: "Optimized images, implemented Tailwind CSS for consistent theming, and added PWA support for faster mobile experiences.",
    link: "https://bluebottlecoffee.com",
    image: "/images/blue-cafe.jpg",
    tags: ["USA", "Coffee", "Tailwind"]
  },
  {
    title: "Tartine Bakery (USA)",
    description: "A delicious and minimal layout for a famous bakery.",
    problem: "Low online orders due to cluttered layout and confusing navigation.",
    solution: "Streamlined menu design, clear CTAs for ordering, and smooth hover animations using Framer Motion.",
    link: "https://tartinebakery.com",
    image: "/images/tartine.jpg",
    tags: ["USA", "Bakery", "Framer Motion"]
  },
  {
    title: "Sara Dietschy (USA)",
    description: "A creative personal website for a content creator.",
    problem: "Outdated layout and difficulty showcasing multimedia content.",
    solution: "Built a dynamic Next.js portfolio with embedded videos and interactive galleries.",
    link: "https://saradietschy.com",
    image: "/images/sara.jpg",
    tags: ["USA", "Portfolio", "Next.js"]
  },
  {
    title: "Honest Burgers (UK)",
    description: "Local burger chain with rustic vibes.",
    problem: "Mobile menu was hard to access and bookings were dropping.",
    solution: "Redesigned responsive navbar, added sticky CTA for reservations, and improved load times.",
    link: "https://www.honestburgers.co.uk",
    image: "/images/honest.jpg",
    tags: ["UK", "Food", "Modern"]
  },
  {
    title: "The Fold London (UK)",
    description: "Elegant clothing brand with bold aesthetics.",
    problem: "E-commerce conversions were low due to slow checkout flow.",
    solution: "Optimized checkout steps, integrated seamless animations, and simplified form fields.",
    link: "https://thefoldlondon.com",
    image: "/images/fold.jpg",
    tags: ["UK", "Fashion", "Minimal"]
  },
  {
    title: "Bloom & Wild (UK)",
    description: "Fresh and lively design for a flower startup.",
    problem: "Users found it hard to customize bouquets on mobile.",
    solution: "Implemented a touch-friendly slider and real-time preview using React state.",
    link: "https://www.bloomandwild.com",
    image: "/images/bloom.jpg",
    tags: ["UK", "eCommerce", "Floral"]
  },
  {
    title: "Third Wave Coffee (India)",
    description: "Bold UI for India’s growing café chain.",
    problem: "Inconsistent menu details across locations led to confusion.",
    solution: "Centralized menu data with CMS integration and clear location-based filtering.",
    link: "https://www.thirdwavecoffee.in",
    image: "/images/thirdwave.jpg",
    tags: ["India", "Coffee", "Bold"]
  },
  {
    title: "Chumbak (India)",
    description: "Vibrant and colorful lifestyle brand website.",
    problem: "Site performance lagged due to heavy animations.",
    solution: "Replaced heavy JS animations with CSS transitions and optimized bundle size.",
    link: "https://www.chumbak.com",
    image: "/images/chumbak.jpg",
    tags: ["India", "Lifestyle", "Colorful"]
  },
  {
    title: "Zivame (India)",
    description: "Modern lingerie store focused on accessibility.",
    problem: "Many users dropped off during product filtering.",
    solution: "Added real-time filtering with debounced search and clear filter badges.",
    link: "https://www.zivame.com",
    image: "/images/zivame.jpg",
    tags: ["India", "Fashion", "Responsive"]
  },
  {
    title: "Pilot Roasters (Canada)",
    description: "Cool, calm branding for Canadian coffee roastery.",
    problem: "Online store lacked user trust due to missing product details.",
    solution: "Enhanced product pages with detailed descriptions, customer reviews, and image galleries.",
    link: "https://www.pilotcoffeeroasters.com",
    image: "/images/pilot.jpg",
    tags: ["Canada", "Coffee", "Clean"]
  },
  {
    title: "Peace Collective (Canada)",
    description: "Purpose-driven fashion brand for millennials.",
    problem: "Website didn’t communicate brand mission clearly.",
    solution: "Added a dedicated mission section with engaging storytelling and visuals.",
    link: "https://www.peace-collective.com",
    image: "/images/peace.jpg",
    tags: ["Canada", "Fashion", "Purpose"]
  },
  {
    title: "St. Ali Coffee (Australia)",
    description: "Melbourne café redesign with urban aesthetics.",
    problem: "High bounce rate on the homepage due to no clear CTA.",
    solution: "Introduced prominent booking and menu buttons above the fold with smooth scroll.",
    link: "https://stali.com.au",
    image: "/images/stali.jpg",
    tags: ["Australia", "Coffee", "Urban"]
  },
  {
    title: "Bellroy (Australia)",
    description: "Stylish wallet and accessories eCommerce site.",
    problem: "Complex navigation made product discovery difficult.",
    solution: "Simplified navigation hierarchy and added predictive search suggestions.",
    link: "https://bellroy.com",
    image: "/images/bellroy.jpg",
    tags: ["Australia", "Wallets", "eCommerce"]
  },
  {
    title: "Bergfreunde (Germany)",
    description: "Modern redesign for a German outdoor startup.",
    problem: "Site had outdated UI and poor mobile layout.",
    solution: "Rebuilt with responsive grid, applied modern color palette, and improved legibility.",
    link: "https://www.bergfreunde.eu",
    image: "/images/bergfreunde.jpg",
    tags: ["Germany", "Outdoor", "UI"]
  },
  {
    title: "Bonanza Coffee (Germany)",
    description: "Berlin roastery with a minimalist site design.",
    problem: "User engagement was low due to static content.",
    solution: "Integrated blog and recipe section with dynamic content loading.",
    link: "https://bonanzacoffee.de",
    image: "/images/bonanza.jpg",
    tags: ["Germany", "Coffee", "Minimal"]
  },
  {
    title: "Merci Store (France)",
    description: "Paris concept store with refined UI/UX.",
    problem: "Store pages were cluttered and slow to load.",
    solution: "Optimized page weight, reorganized product layout, and lazy-loaded images.",
    link: "https://www.merci-merci.com",
    image: "/images/merci.jpg",
    tags: ["France", "Store", "Design"]
  },
  {
    title: "Typofonderie (France)",
    description: "Boutique typography studio in Paris.",
    problem: "Portfolio pieces were hard to browse and categorize.",
    solution: "Added filterable gallery and hover previews for each typeface.",
    link: "https://www.typofonderie.com",
    image: "/images/typo.jpg",
    tags: ["France", "Typography", "Boutique"]
  },
  {
    title: "Blue Bottle Japan (Japan)",
    description: "Local Japanese version of a café site.",
    problem: "Language switcher was unclear and site lacked localization.",
    solution: "Implemented clear language toggle, localized content, and RTL adjustments.",
    link: "https://bluebottlecoffee.jp",
    image: "/images/blue-japan.jpg",
    tags: ["Japan", "Cafe", "Localized"]
  },
  {
    title: "BEAMS (Japan)",
    description: "Trendy fashion brand with bold layout.",
    problem: "Customers struggled to find new arrivals and sales items.",
    solution: "Introduced 'New' and 'Sale' badges with a dedicated filter tab for easy discovery.",
    link: "https://www.beams.co.jp",
    image: "/images/beams.jpg",
    tags: ["Japan", "Fashion", "Trendy", "AI"]
  },
];