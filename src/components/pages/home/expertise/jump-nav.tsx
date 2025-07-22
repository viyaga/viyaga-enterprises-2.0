"use client";
import { useEffect, useState } from "react";
import { services } from "./services-data";

const JumpNav: React.FC = () => {
  const [active, setActive] = useState<string>(services[0].slug);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-50% 0px -50% 0px', threshold: 0.1 }
    );
    sections.forEach(sec => obs.observe(sec));
    return () => sections.forEach(sec => obs.unobserve(sec));
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 py-2 z-10 sticky top-0">
      <ul className="flex justify-center gap-4 flex-wrap">
        {services.map(svc => (
          <li key={svc.slug}>
            <a
              href={`#${svc.slug}`}
              onClick={e => {
                e.preventDefault();
                document.getElementById(svc.slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`px-4 py-1 rounded-full text-sm transition-colors ${active === svc.slug ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}`}
            >
              {svc.badge}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default JumpNav;