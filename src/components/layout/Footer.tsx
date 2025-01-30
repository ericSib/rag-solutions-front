'use client';

import Link from "next/link";
import { SiLinkedin } from "react-icons/si";

const footerLinks = [
  {
    title: "À propos",
    links: [
      { label: "Qui sommes-nous", href: "/about" },
      { label: "Engagement RSE", href: "/about/rse" },
      { label: "Contact", href: "/demo" },
    ],
  },
  {
    title: "Nos solutions",
    links: [
      { label: "Pack Starter", href: "/solutions/starter" },
      { label: "Pack Business", href: "/solutions/business" },
      { label: "Pack Enterprise", href: "/solutions/enterprise" },
    ],
  },
  {
    title: "Nos secteurs",
    links: [
      { label: "Industrie et manufacturing", href: "/use-cases/industry" },
      { label: "Gestion immobilière", href: "/use-cases/real-estate" },
      { label: "Services professionnels", href: "/use-cases/professional-services" },
      { label: "Industrie musicale", href: "/use-cases/music-industry" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Conditions d'utilisation", href: "/terms-of-service" },
      { label: "Politique de confidentialité", href: "/privacy-policy" },
    ],
  },
];

export function Footer() {
  return (
    <div className="w-full bg-[#132338]">
      <footer className="text-white">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
              <p className="text-sm text-gray-400">
                {new Date().getFullYear()} RAG Solutions. Tous droits réservés.
              </p>
              <Link
                href="https://linkedin.com/company/rag-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
