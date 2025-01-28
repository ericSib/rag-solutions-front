'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, Shield, Zap, Users, Calendar, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SuccessStories from '@/components/sections/SuccessStories';
import FAQ from '@/components/sections/FAQ';
import { AnimatedSection } from '@/components/ui/animated-section';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting] as const;
};

// Animated Metric Component
const AnimatedMetric = ({ value, suffix = "", prefix = "", label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    let timeout;
    if (isIntersecting) {
      timeout = setTimeout(() => {
        let start = 0;
        const end = value;
        const duration = 2000;
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          setCount(Math.floor(progress * end));

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        };

        requestAnimationFrame(updateCount);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [isIntersecting, value, delay]);

  return (
    <div ref={ref} className="text-center transform transition-all duration-500 hover:scale-105">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-4xl font-bold text-blue-600 mb-2">
          {prefix}{count}{suffix}
        </h3>
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  );
};

// Blog Post Card Component
const BlogPostCard = ({ title, excerpt, date, imageUrl, category, readTime, href }: {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  readTime: string;
  href: string;
}) => {
  const [formattedDate, setFormattedDate] = useState(date);

  useEffect(() => {
    // Format the date on the client side only
    const dateObj = new Date(date);
    const formatted = dateObj.toLocaleDateString('fr-FR', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setFormattedDate(formatted);
  }, [date]);

  return (
    <a href={href} className="block group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-[1.02]">
        <div className="relative h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default function Homepage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Transformez vos documents en intelligence actionnable
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Notre solution RAG (Retrieval-Augmented Generation) révolutionne la gestion de vos documents d'entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <Link href="/demo" className="flex items-center">
                    Demander une démo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50">
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

      {/* Animated Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">L'impact RAG Solutions en chiffres</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedMetric
              value={85}
              suffix="%"
              label="de réduction du temps de recherche d'information"
              delay={0}
            />
            <AnimatedMetric
              value={95}
              suffix="%"
              label="de satisfaction utilisateur"
              delay={200}
            />
            <AnimatedMetric
              value={6}
              suffix=" mois"
              prefix="ROI "
              label="retour sur investissement moyen"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* CTA - Cas d'usage */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Découvrez comment nos clients transforment leur gestion documentaire
            </h2>
            <p className="text-gray-600 mb-6">
              Des retours d'expérience concrets dans votre secteur d'activité
            </p>
            <Link 
              href="/use-cases" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Explorez nos cas d'usage
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir RAG Solutions ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sécurité maximale</h3>
              <p className="text-gray-600">Protection de vos données confidentielles avec chiffrement de bout en bout et conformité RGPD native.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performance prouvée</h3>
              <p className="text-gray-600">Temps de réponse inférieur à 2 secondes et précision supérieure à 85% dans la recherche d'information.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Adoption rapide</h3>
              <p className="text-gray-600">Formation personnalisée et accompagnement continu pour une prise en main immédiate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Solutions */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Une solution adaptée à chaque besoin
            </h2>
            <p className="text-blue-100 mb-6">
              De la PME au grand groupe, découvrez nos offres sur mesure
            </p>
            <a 
              href="/solutions" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Découvrir nos solutions
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Pack STARTER</h3>
              <p className="text-gray-600 mb-4">Idéal pour les PME souhaitant optimiser leur gestion documentaire.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Jusqu'à 10 000 documents
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Interface utilisateur standard
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Support pendant déploiement
                </li>
              </ul>
              <Link 
                href="/demo" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-600">
              <div className="bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
                PLUS POPULAIRE
              </div>
              <h3 className="text-xl font-semibold mb-4">Pack BUSINESS</h3>
              <p className="text-gray-600 mb-4">Pour les entreprises en croissance avec des besoins avancés.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Jusqu'à 50 000 documents
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Interface personnalisée
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Support 12/7
                </li>
              </ul>
              <Link 
                href="/demo" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Pack ENTERPRISE</h3>
              <p className="text-gray-600 mb-4">Solution sur mesure pour les grandes entreprises.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Volume illimité
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Solution personnalisée
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Support 24/7
                </li>
              </ul>
              <Link 
                href="/demo" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre gestion documentaire ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts sont là pour vous accompagner dans votre projet
          </p>
          <Link 
            href="/demo" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Demander une démo
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}