import React from 'react';
import { Music, FileText, Shield, Globe, BarChart3, ArrowRight, ChevronRight, Tags, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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
        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Projet Pilote</Badge>
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

const MusicIndustryPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Optimisez la gestion de vos droits et catalogues
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Gérez efficacement vos contrats, licences et métadonnées musicales grâce à notre solution RAG double pipeline :
              conformité simplifiée et exploitation optimisée de votre catalogue.
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
            Des solutions concrètes pour vos défis quotidiens
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Gestion des Droits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Suivi des contrats artistes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Gestion des licences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Historique des royalties</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Tags className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Métadonnées & Archives</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Organisation du catalogue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Gestion des assets numériques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Préservation patrimoniale</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Distribution Internationale</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Suivi des exploitations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Conformité territoriale</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Reporting multi-territoires</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cas d'application */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">La méthode RAG en action</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Découvrez comment notre approche RAG optimise la gestion des droits et catalogues musicaux à travers ces premiers projets pilotes
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard 
              title="Gestion des droits"
              company="Label Musical Major"
              results={[
                "Gestion droits optimisée 50%",
                "Revenus streaming +25%",
                "Litiges -40%"
              ]}
              imageUrl="/api/placeholder/800/600"
            />
            <CaseStudyCard 
              title="Organisation catalogues"
              company="Label Indépendant"
              results={[
                "Efficacité administrative +60%",
                "Temps négociation -30%",
                "Revenus +20%"
              ]}
              imageUrl="/api/placeholder/800/600"
            />
            <CaseStudyCard 
              title="Distribution internationale"
              company="Éditeur Musical"
              results={[
                "Suivi territorial amélioré 45%",
                "Conformité accords +70%",
                "Reporting optimisé 35%"
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
                <Music className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">+50%</h3>
                <p className="text-gray-600">Efficacité gestion des droits</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">-40%</h3>
                <p className="text-gray-600">Litiges et réclamations</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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
            Prêt à optimiser la gestion de votre catalogue ?
          </h2>
          <p className="text-xl mb-8">
            Découvrez comment notre solution peut transformer votre gestion des droits et métadonnées
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

export default MusicIndustryPage;