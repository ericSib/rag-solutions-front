import React from 'react';
import { ArrowRight, BarChart, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/ui/animated-section';

const SuccessStory = ({ company, sector, results, logo, index }) => (
  <AnimatedSection animation="fade-up" delay={index * 100}>
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img src={logo} alt={company} className="w-16 h-16 rounded-lg object-contain bg-gray-50" />
          <div>
            <h3 className="font-semibold">{company}</h3>
            <Badge variant="secondary" className="mt-1">{sector}</Badge>
          </div>
        </div>
        <div className="space-y-3">
          {results.map((result, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                {result.icon}
              </div>
              <div>
                <div className="font-medium">{result.metric}</div>
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
      logo: "/api/placeholder/100/100",
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
      logo: "/api/placeholder/100/100", 
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <h2 className="text-3xl font-bold text-center mb-4">Ils nous font confiance</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez comment nos clients transforment leur gestion documentaire avec notre solution RAG
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <SuccessStory key={index} {...story} index={index} />
          ))}
        </div>
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="text-center mt-8">
            <a 
              href="/success-stories" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-lg transition-colors"
            >
              Voir tous nos cas clients
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SuccessStories;
