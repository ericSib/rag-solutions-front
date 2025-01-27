import React from 'react';
import { Package, Shield, Zap, Users, BarChart3, ArrowRight, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CaseStudyCard = ({ title, company, results, imageUrl }) => (
  <Card className="h-full">
    <CardContent className="p-6">
      <div className="mb-4">
        <img 
          src={imageUrl} 
          alt={company} 
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Cas Client</Badge>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{company}</p>
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

const IndustryPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Libérez le potentiel de votre documentation technique
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Optimisez votre patrimoine documentaire industriel grâce à notre solution RAG double pipeline : 
              exploitation précise et exploration innovante.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center">
                Demander une démo
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center">
                Découvrir notre méthode
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Défis & Solutions */}
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">La méthode RAG en action</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
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
              imageUrl="/api/placeholder/800/600"
            />
            <CaseStudyCard 
              title="Transformation digitale"
              company="PME Industrie de Précision"
              results={[
                "Onboarding nouveaux -40%",
                "Productivité maintenance +25%",
                "Satisfaction employés +35%"
              ]}
              imageUrl="/api/placeholder/800/600"
            />
            <CaseStudyCard 
              title="Conformité & Qualité"
              company="Groupe Manufacturing International"
              results={[
                "Temps audit divisé par 2",
                "Conformité ISO 9001 simplifiée",
                "Zéro non-conformité majeure"
              ]}
              imageUrl="/api/placeholder/800/600"
            />
          </div>
        </div>
      </section>

      {/* Bénéfices chiffrés */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Impact mesurable</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">-65%</h3>
                <p className="text-gray-600">Temps de recherche documents</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">+40%</h3>
                <p className="text-gray-600">Productivité maintenance</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">6 mois</h3>
                <p className="text-gray-600">ROI moyen constaté</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre gestion documentaire ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts sont là pour vous accompagner dans votre projet
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center">
              Demander une démo
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center">
              Voir nos offres
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
