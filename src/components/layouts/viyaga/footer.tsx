import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Support", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer7 = ({
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "Company Logo",
    title: "Shadcnblocks.com",
  },
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Shadcnblocks.com. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="bg-gradient-to-b from-[#deecf5] to-[#deecf5] dark:from-[#0e172d] dark:to-[#0e172d] py-12">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Top Section */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Branding + Social */}
          <div className="flex flex-col gap-6 lg:max-w-sm">
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-8"
                loading="lazy"
              />
              <span className="text-xl font-semibold">{logo.title}</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
            <ul className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="hover:text-primary transition-colors"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link Sections */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="mb-4 text-sm font-semibold tracking-wide uppercase">
                  {section.title}
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-6 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{copyright}</p>
          <ul className="flex flex-wrap gap-4">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer7;