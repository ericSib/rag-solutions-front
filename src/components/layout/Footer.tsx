'use client'

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">RAG Solutions</h3>
            <p className="text-gray-600 text-sm">
              Solutions d'intelligence documentaire basées sur le RAG pour les entreprises.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/solutions/starter" className="text-gray-600 hover:text-primary">Pack STARTER</Link></li>
              <li><Link href="/solutions/business" className="text-gray-600 hover:text-primary">Pack BUSINESS</Link></li>
              <li><Link href="/solutions/enterprise" className="text-gray-600 hover:text-primary">Pack ENTERPRISE</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><Link href="https://blog.ragsolutions.tech" className="text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link href="/resources/roi-calculator" className="text-gray-600 hover:text-primary">Calculateur ROI</Link></li>
              <li><Link href="/resources/how-it-works" className="text-gray-600 hover:text-primary">Comment ça marche</Link></li>
              <li><Link href="/community" className="text-gray-600 hover:text-primary">Community Hub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:contact@ragsolutions.tech" className="text-gray-600 hover:text-primary">contact@ragsolutions.tech</a></li>
              <li className="text-gray-600">+33 (0)1 23 45 67 89</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            {new Date().getFullYear()} RAG Solutions. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-primary">
              Conditions d'utilisation
            </Link>
            <Link href="/cookies" className="text-sm text-gray-600 hover:text-primary">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
