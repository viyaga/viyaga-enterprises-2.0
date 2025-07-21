// services-data.ts
export interface Service {
  id: number;
  title: string;
  desc: string;
  features: string[];
  image: string;
  badge: string;
  color: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    desc: "End‑to‑end web applications that scale with your business.",
    features: [
      "Responsive UIs with Next.js & Tailwind",
      "Server‑side rendering & static export",
      "Secure auth & role‑based access",
    ],
    image: "/images/services/fullstack.png",
    badge: "Web",
    color: "#38bdf8",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Cross‑platform apps delivering native‑grade performance.",
    features: [
      "Single codebase with Flutter or React Native",
      "Push notifications & offline support",
      "App Store & Play Store submission",
    ],
    image: "/images/services/mobile.png",
    badge: "Mobile",
    color: "#f472b6",
  },
  {
    id: 3,
    title: "DevOps & Cloud Engineering",
    desc: "Automated pipelines & resilient infrastructure in the cloud.",
    features: [
      "Docker & Kubernetes orchestration",
      "CI/CD with GitHub Actions & Jenkins",
      "Cost‑optimized AWS/GCP architectures",
    ],
    image: "/images/services/cloud.png",
    badge: "Cloud",
    color: "#34d399",
  },
  {
    id: 4,
    title: "API Development & Integration",
    desc: "Robust back‑ends and seamless third‑party integrations.",
    features: [
      "REST & GraphQL endpoints",
      "OAuth2 / JWT authentication",
      "Payment, SMS, email gateways",
    ],
    image: "/images/services/api.png",
    badge: "API",
    color: "#facc15",
  },
  {
    id: 5,
    title: "Custom CRM & ERP Solutions",
    desc: "Streamline your operations with tailored business platforms.",
    features: [
      "Lead & pipeline management",
      "Automated billing & invoicing",
      "Role‑based dashboards & reporting",
    ],
    image: "/images/services/crm.png",
    badge: "Enterprise",
    color: "#a78bfa",
  },
  {
    id: 6,
    title: "CMS Development & Headless Setup",
    desc: "Flexible content workflows with modern headless CMS.",
    features: [
      "Payload CMS / Strapi / Sanity",
      "GraphQL & REST APIs",
      "Preview & staging environments",
    ],
    image: "/images/services/cms.png",
    badge: "CMS",
    color: "#f472b6",
  },
  {
    id: 7,
    title: "MVP Development for Startups",
    desc: "Validate ideas fast with lean, user‑driven prototypes.",
    features: [
      "Rapid wireframing & prototyping",
      "User feedback loops",
      "Iterative feature rollouts",
    ],
    image: "/images/services/mvp.png",
    badge: "Startup",
    color: "#4ade80",
  },
  {
    id: 8,
    title: "System Architecture & Consulting",
    desc: "Future‑proof designs and expert guidance for complex systems.",
    features: [
      "Microservices & event‑driven patterns",
      "Scalability & high‑availability",
      "Cost vs. performance tradeoffs",
    ],
    image: "/images/services/system.png",
    badge: "Consulting",
    color: "#60a5fa",
  },
  {
    id: 9,
    title: "UI/UX Design & Frontend Engineering",
    desc: "Delight users with pixel‑perfect, accessible interfaces.",
    features: [
      "Design systems with Figma & Tailwind",
      "Framer Motion interactions",
      "WCAG AA accessibility compliance",
    ],
    image: "/images/services/uiux.png",
    badge: "Design",
    color: "#f87171",
  },
];
