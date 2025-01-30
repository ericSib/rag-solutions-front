import React from 'react';
import Link from 'next/link';
import { Package, Shield, Zap, Users, BarChart3, ArrowRight, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrie & Manufacturing | RAG Solutions',
  description: 'Solutions documentaires intelligentes pour l\'industrie et le manufacturing. Optimisez votre documentation technique avec notre technologie RAG double pipeline.',
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
        <img 
          src={imageUrl} 
          alt={`${company} - ${title}`}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Cas Client</Badge>
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

const IndustryPage: React.FC = () => {
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
              Libérez le potentiel de votre documentation technique
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Optimisez votre patrimoine documentaire industriel grâce à notre solution RAG double pipeline : 
              exploitation précise et exploration innovante.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/demo"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Demander une démo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Découvrez nos solutions
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Défis & Solutions */}
      <section 
        className="py-16 bg-white"
        role="region"
        aria-label="Solutions"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Des solutions concrètes pour vos défis industriels
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Package className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Documentation Technique</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Accès instantané aux plans et manuels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Gestion des révisions et versions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Traçabilité des modifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Conformité & Qualité</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Respect des normes ISO et réglementations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Gestion des procédures qualité</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Audit et certification facilités</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Savoir-Faire</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Capitalisation des connaissances</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Formation accélérée des nouveaux</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Préservation expertise seniors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cas Clients */}
      <section 
        className="py-16 bg-gray-50"
        role="region"
        aria-label="Cas Clients"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">La méthode RAG en action</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Découvrez comment notre approche RAG transforme concrètement la gestion documentaire industrielle à travers ces premiers projets pilotes
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard 
              title="Optimisation documentation technique"
              company="Constructeur Automobile International"
              results={[
                "Temps de recherche réduit de 65%",
                "Erreurs de production -45%",
                "ROI atteint en 8 mois"
              ]}
              imageUrl="/images/use-cases/industry-1.jpg"
            />
            <CaseStudyCard 
              title="Transformation digitale"
              company="PME Industrie de Précision"
              results={[
                "Onboarding nouveaux -40%",
                "Productivité maintenance +25%",
                "Satisfaction employés +35%"
              ]}
              imageUrl="/images/use-cases/industry-2.jpg"
            />
            <CaseStudyCard 
              title="Conformité & Qualité"
              company="Groupe Manufacturing International"
              results={[
                "Temps audit divisé par 2",
                "Conformité ISO 9001 simplifiée",
                "Zéro non-conformité majeure"
              ]}
              imageUrl="/images/use-cases/industry-3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Bénéfices chiffrés */}
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
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">-65%</h3>
                <p className="text-muted-foreground">Temps de recherche documents</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">+40%</h3>
                <p className="text-muted-foreground">Productivité maintenance</p>
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

      {/* CTA */}
      <section 
        className="py-16 bg-blue-600 text-white"
        role="region"
        aria-label="Appel à l'action"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre gestion documentaire ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts sont là pour vous accompagner dans votre projet
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/demo"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              Demander une démo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Découvrez nos solutions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryPage;