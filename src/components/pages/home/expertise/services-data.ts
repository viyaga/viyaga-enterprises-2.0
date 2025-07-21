// services-data.ts
import {
  Code,
  Smartphone,
  Cloud,
  Link as LinkIcon,
  Database,
  Layout,
  Rocket,
  Cpu,
  PenTool,
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  desc: string;
  features: string[];
  image: string;
  badge: string;
  color: string;
  gradient: string;
  ctaText?: string;
  link?: string;
  icon: React.ComponentType<any>;
}

export const services: Service[] = [
  {
    slug: 'full-stack',
    title: 'Full Stack Web Development',
    desc: 'End‑to‑end web applications that scale with your business.',
    features: [
      'Responsive UIs with Next.js & Tailwind',
      'Server‑side rendering & static export',
      'Secure auth & role‑based access',
    ],
    image: '/images/services/fullstack.png',
    badge: 'Web',
    color: '#38bdf8',
    gradient: 'from-blue-400 to-blue-600',
    ctaText: 'Start Your Project',
    link: '/contact',
    icon: Code,
  },
  {
    slug: 'mobile-app',
    title: 'Mobile App Development',
    desc: 'Cross‑platform apps delivering native‑grade performance.',
    features: [
      'Single codebase with Flutter or React Native',
      'Push notifications & offline support',
      'App Store & Play Store submission',
    ],
    image: '/images/services/mobile.png',
    badge: 'Mobile',
    color: '#f472b6',
    gradient: 'from-pink-400 to-pink-600',
    ctaText: 'Get a Quote',
    link: '/contact',
    icon: Smartphone,
  },
  {
    slug: 'devops-cloud',
    title: 'DevOps & Cloud Engineering',
    desc: 'Automated pipelines & resilient infrastructure in the cloud.',
    features: [
      'Docker & Kubernetes orchestration',
      'CI/CD with GitHub Actions & Jenkins',
      'Cost‑optimized AWS/GCP architectures',
    ],
    image: '/images/services/cloud.png',
    badge: 'Cloud',
    color: '#34d399',
    gradient: 'from-green-400 to-green-600',
    ctaText: 'Discuss Your Setup',
    link: '/contact',
    icon: Cloud,
  },
  {
    slug: 'api-integration',
    title: 'API Development & Integration',
    desc: 'Robust back‑ends and seamless third‑party integrations.',
    features: [
      'REST & GraphQL endpoints',
      'OAuth2 / JWT authentication',
      'Payment, SMS, email gateways',
    ],
    image: '/images/services/api.png',
    badge: 'API',
    color: '#facc15',
    gradient: 'from-yellow-400 to-yellow-600',
    ctaText: 'Learn More',
    link: '/services/api-integration',
    icon: LinkIcon,
  },
  {
    slug: 'crm-erp',
    title: 'Custom CRM & ERP Solutions',
    desc: 'Streamline your operations with tailored business platforms.',
    features: [
      'Lead & pipeline management',
      'Automated billing & invoicing',
      'Role‑based dashboards & reporting',
    ],
    image: '/images/services/crm.png',
    badge: 'Enterprise',
    color: '#a78bfa',
    gradient: 'from-purple-400 to-purple-600',
    ctaText: 'Request Demo',
    link: '/contact',
    icon: Database,
  },
  {
    slug: 'cms-headless',
    title: 'CMS Development & Headless Setup',
    desc: 'Flexible content workflows with modern headless CMS.',
    features: [
      'Payload CMS / Strapi / Sanity',
      'GraphQL & REST APIs',
      'Preview & staging environments',
    ],
    image: '/images/services/cms.png',
    badge: 'CMS',
    color: '#f472b6',
    gradient: 'from-pink-400 to-pink-600',
    ctaText: 'Explore CMS',
    link: '/services/cms',
    icon: Layout,
  },
  {
    slug: 'mvp-startup',
    title: 'MVP Development for Startups',
    desc: 'Validate ideas fast with lean, user‑driven prototypes.',
    features: [
      'Rapid wireframing & prototyping',
      'User feedback loops',
      'Iterative feature rollouts',
    ],
    image: '/images/services/mvp.png',
    badge: 'Startup',
    color: '#4ade80',
    gradient: 'from-green-300 to-green-500',
    ctaText: 'Build Your MVP',
    link: '/services/mvp',
    icon: Rocket,
  },
  {
    slug: 'architecture-consulting',
    title: 'System Architecture & Consulting',
    desc: 'Future‑proof designs and expert guidance for complex systems.',
    features: [
      'Microservices & event‑driven patterns',
      'Scalability & high‑availability',
      'Cost vs. performance tradeoffs',
    ],
    image: '/images/services/system.png',
    badge: 'Consulting',
    color: '#60a5fa',
    gradient: 'from-blue-300 to-blue-500',
    ctaText: 'Get Consultancy',
    link: '/contact',
    icon: Cpu,
  },
  {
    slug: 'uiux-design',
    title: 'UI/UX Design & Frontend Engineering',
    desc: 'Delight users with pixel‑perfect, accessible interfaces.',
    features: [
      'Design systems with Figma & Tailwind',
      'Framer Motion interactions',
      'WCAG AA accessibility compliance',
    ],
    image: '/images/services/uiux.png',
    badge: 'Design',
    color: '#f87171',
    gradient: 'from-red-300 to-red-500',
    ctaText: 'See Portfolio',
    link: '/portfolio',
    icon: PenTool,
  },
];