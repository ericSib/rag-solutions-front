import React from 'react';
import { ArrowRight, BarChart, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/ui/animated-section';
import Link from 'next/link';

const SuccessStory = ({ company, sector, results, logo, index }) => (
  <AnimatedSection animation="fade-up" delay={index * 100}>
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img src={logo} alt={company} className="w-16 h-16 rounded-lg object-contain bg-gray-50 p-2" />
          <div>
            <h3 className="font-semibold">{company}</h3>
            <Badge variant="secondary" className="mt-1">{sector}</Badge>
          </div>
        </div>
        <div className="space-y-3">
          {results.map((result, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                {result.icon}
              </div>
              <div>
                <div className="font-medium text-gray-900">{result.metric}</div>
                <p className="text-sm text-gray-600">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </AnimatedSection>
);

const SuccessStories = () => {
  const stories = [
    {
      company: "AutoTech Industries",
      sector: "Manufacturing",
      logo: "/images/logos/autotech.svg",
      results: [
        {
          icon: <Clock className="w-4 h-4 text-blue-600" />,
          metric: "Temps de recherche -65%",
          description: "Accès instantané aux documents techniques"
        },
        {
          icon: <BarChart className="w-4 h-4 text-blue-600" />,
          metric: "Productivité +45%",
          description: "Réutilisation optimisée des connaissances"
        }
      ]
    },
    {
      company: "Global Services Corp",
      sector: "Services Pro",
      logo: "/images/logos/global-services.svg",
      results: [
        {
          icon: <Shield className="w-4 h-4 text-blue-600" />,
          metric: "Conformité 100%",
          description: "Gestion documentaire aux normes RGPD"
        },
        {
          icon: <BarChart className="w-4 h-4 text-blue-600" />,
          metric: "ROI en 6 mois",
          description: "Retour sur investissement rapide"
        }
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ils ont fait confiance au RAG
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Découvrez comment nos clients transforment leur gestion documentaire avec notre solution RAG
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {stories.map((story, index) => (
            <SuccessStory key={index} {...story} index={index} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link 
            href="/use-cases" 
            className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            Voir tous nos cas clients <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
