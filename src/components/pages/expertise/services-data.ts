export type Service = {
  id: number;
  title: string;
  desc: string;
  image: string;
  badge: string;
  color: string; // Accent color only
};

export const services: Service[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    desc: "We build scalable, performant apps using React, Next.js, Node.js, and modern frameworks.",
    image: "/icons/web.svg",
    badge: "Web",
    color: "#38bdf8", // sky-400
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with Flutter and React Native for seamless user experiences.",
    image: "/icons/mobile.svg",
    badge: "Mobile",
    color: "#f472b6", // pink-400
  },
  {
    id: 3,
    title: "DevOps & Cloud Engineering",
    desc: "CI/CD, Docker, Kubernetes, and scalable infrastructure on AWS, GCP, and Vercel.",
    image: "/icons/cloud.svg",
    badge: "Cloud",
    color: "#34d399", // green-400
  },
  {
    id: 4,
    title: "API Development & Integration",
    desc: "Robust REST & GraphQL APIs using Express.js, NestJS, and third-party services integration.",
    image: "/icons/api.svg",
    badge: "API",
    color: "#facc15", // yellow-400
  },
  {
    id: 5,
    title: "Custom CRM & ERP Solutions",
    desc: "Tailored internal tools and platforms for operations, customer management, and automation.",
    image: "/icons/crm.svg",
    badge: "Enterprise",
    color: "#a78bfa", // violet-400
  },
  {
    id: 6,
    title: "CMS Development & Headless Setup",
    desc: "Flexible content systems using Payload CMS, Strapi, or custom-built headless CMS solutions.",
    image: "/icons/cms.svg",
    badge: "CMS",
    color: "#f472b6", // pink-400
  },
  {
    id: 7,
    title: "MVP Development for Startups",
    desc: "Rapid prototyping and lean MVPs to validate your business idea with real users.",
    image: "/icons/startup.svg",
    badge: "Startup",
    color: "#4ade80", // emerald-400
  },
  {
    id: 8,
    title: "System Architecture & Consulting",
    desc: "Strategic planning, architecture design, and technical leadership for complex systems.",
    image: "/icons/architecture.svg",
    badge: "Consulting",
    color: "#60a5fa", // blue-400
  },
  {
    id: 9,
    title: "UI/UX Design & Frontend Engineering",
    desc: "Pixel-perfect interfaces using Tailwind CSS, Framer Motion, and accessible design systems.",
    image: "/icons/uiux.svg",
    badge: "Design",
    color: "#f87171", // red-400
  },
];