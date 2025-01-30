import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Scale, Search, Users, Brain, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services Professionnels | RAG Solutions',
  description: 'Solutions documentaires intelligentes pour les services professionnels. Optimisez votre capital informationnel avec notre technologie RAG double pipeline.',
  openGraph: {
    title: 'Services Professionnels | RAG Solutions',
    description: 'Solutions documentaires intelligentes pour les services professionnels. Optimisez votre capital informationnel avec notre technologie RAG double pipeline.',
    images: [
      {
        url: '/images/services-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Services Professionnels RAG Solutions',
      },
    ],
  },
};

interface CaseStudyProps {
  title: string;
  company: string;
  results: string[];
  imageUrl: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ title, company, results, imageUrl }) => (
  <Card className="h-full">
    <CardContent className="p-6">
      <div className="mb-4">
        <Image 
          src={imageUrl} 
          alt={`${company} - ${title}`}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <div 
          className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 hover:bg-blue-200"
        >
          Projet Pilote
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{company}</p>
        <div className="space-y-2">
          {results.map((result, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-blue-600" />
              <span>{result}</span>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function ProfessionalServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
        role="region"
        aria-label="Introduction"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Valorisez votre expertise collective
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transformez votre capital informationnel en avantage concurrentiel grâce à notre solution RAG double pipeline : 
              accès précis à vos connaissances et exploration de nouvelles synergies.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/demo">
                <Button 
                  className="bg-white text-blue-600 hover:bg-blue-700 transition-colors duration-200 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-3"
                >
                  <span>Demander une démo</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 transition-colors duration-200 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-3"
                >
                  <span>Découvrir nos solutions</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section 
        className="py-16 bg-white"
        role="region"
        aria-label="Solutions"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Des solutions concrètes pour vos défis quotidiens
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Capitalisation des Savoirs</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Centralisation des expertises</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Transfert de connaissances facilité</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Préservation de l'historique</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Scale className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Efficacité Opérationnelle</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Réduction du temps de recherche</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Réutilisation des bonnes pratiques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Automatisation des tâches répétitives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Innovation Collective</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Découverte de synergies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Collaboration inter-équipes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Intelligence collective augmentée</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        className="py-16 bg-gray-50"
        role="region"
        aria-label="Cas Clients"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">La méthode RAG en action</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Découvrez comment notre approche RAG optimise la gestion des connaissances dans les services professionnels à travers ces premiers projets pilotes
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard 
              title="Gestion des connaissances"
              company="Cabinet de Conseil International"
              results={[
                "Gain de 12h/consultant/mois",
                "Réutilisation expertise +60%",
                "Satisfaction client +40%"
              ]}
              imageUrl="/images/use-cases/pro-services-1.jpg"
            />
            <CaseStudyCard 
              title="Transformation digitale"
              company="Cabinet d'Avocats"
              results={[
                "Temps recherche -70%",
                "Productivité +35%",
                "Conformité renforcée"
              ]}
              imageUrl="/images/use-cases/pro-services-2.jpg"
            />
            <CaseStudyCard 
              title="Innovation collaborative"
              company="Société d'Audit Big 4"
              results={[
                "Collaboration +45%",
                "Qualité livrables +30%",
                "Time-to-market -25%"
              ]}
              imageUrl="/images/use-cases/pro-services-3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section 
        className="py-16 bg-white"
        role="region"
        aria-label="Métriques d'impact"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Impact mesurable</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">-50%</h3>
                <p className="text-muted-foreground">Temps de recherche d'information</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">+45%</h3>
                <p className="text-muted-foreground">Précision des réponses</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">6 mois</h3>
                <p className="text-muted-foreground">ROI moyen constaté</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 bg-blue-600 text-white"
        role="region"
        aria-label="Appel à l'action"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à optimiser votre gestion des connaissances ?
          </h2>
          <p className="text-xl mb-8">
            Transformez votre expertise collective en avantage compétitif
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/demo">
              <Button 
                className="bg-white text-blue-600 hover:bg-white/90 transition-colors duration-200 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-3"
              >
                <span>Demander une démo</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 transition-colors duration-200 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-3"
              >
                <span>Voir nos solutions</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}