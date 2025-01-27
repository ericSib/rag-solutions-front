import React from 'react';
import { Building, FileText, Users, Clock, BarChart3, ArrowRight, ChevronRight, Shield, Search } from 'lucide-react';
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

const RealEstatePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Simplifiez votre gestion immobilière grâce à l'intelligence documentaire
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Optimisez la gestion de vos baux, diagnostics et documents réglementaires avec notre solution RAG double pipeline : 
              accès instantané à l'information et veille réglementaire proactive.
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
                <h3 className="text-xl font-semibold mb-3">Gestion Documentaire</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Organisation centralisée des baux</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Suivi des diagnostics techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Archivage réglementaire sécurisé</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Conformité & Suivi</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Veille réglementaire automatisée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Alertes échéances et renouvellements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Traçabilité des actions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Relation Locataires</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Traitement rapide des demandes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Historique des échanges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Communication centralisée</span>
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
            Découvrez comment notre approche RAG transforme la gestion immobilière à travers ces premiers projets pilotes
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard 
              title="Gestion de parc résidentiel"
              company="Groupe Immobilier National"
              results={[
                "Temps réponse locataires -70%",
                "Efficacité gestion +45%",
                "Contentieux -30%"
              ]}
              imageUrl="/api/placeholder/800/600"
            />
            <CaseStudyCard 
              title="Digitalisation gestion locative"
              company="Agence Immobilière Régionale"
              results={[
                "Traitement demandes +60%",
                "Satisfaction locataires +40%",
                "Coûts administratifs -25%"
              ]}
              imageUrl="/api/placeholder/800/600"
            />
            <CaseStudyCard 
              title="Conformité réglementaire"
              company="Gestionnaire de Copropriétés"
              results={[
                "Temps audit divisé par 2",
                "Mises à jour réglementaires +90%",
                "Risques juridiques -40%"
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
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">-60%</h3>
                <p className="text-gray-600">Temps de traitement des demandes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">+45%</h3>
                <p className="text-gray-600">Efficacité gestion locative</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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
            Prêt à révolutionner votre gestion immobilière ?
          </h2>
          <p className="text-xl mb-8">
            Optimisez la gestion de votre patrimoine avec une solution innovante et responsable
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

export default RealEstatePage;