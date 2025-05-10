'use client';

import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  showCTA?: boolean;
  className?: string;
}

export function PageLayout({
  children,
  title,
  description,
  showCTA = true,
  className = '',
}: PageLayoutProps) {
  return (
    <main className={`min-h-screen ${className}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {title}
              </h1>
              {description && (
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Page Content */}
      {children}

      {/* CTA Section */}
      {showCTA && (
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
                <p className="text-xl opacity-90 mb-8">
                  Transformez dès aujourd'hui votre gestion documentaire avec notre solution RAG
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Link href="/demo" className="flex items-center">
                      Demander une démo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                    <Link href="/contact" className="flex items-center">
                      Nous contacter
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </main>
  );
}
