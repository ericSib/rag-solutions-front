import React from 'react';
import { ArrowRight, Brain, Shield, Target } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Comment Fonctionne RAG Solutions ?
            </h1>
            <p className="text-xl mb-8">
              Découvrez comment notre technologie RAG transforme votre patrimoine documentaire 
              en intelligence collective.
            </p>
          </div>
        </div>
      </section>

      {/* [INSÉRER ICI LE COMPOSANT RagExplanationSection] */}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Processus</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Analyse initiale</h3>
                <p className="text-gray-600">Évaluation de votre patrimoine documentaire et de vos besoins spécifiques</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Déploiement sécurisé</h3>
                <p className="text-gray-600">Installation dans votre infrastructure avec sécurité maximale</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Accompagnement</h3>
                <p className="text-gray-600">Formation et support pour une adoption réussie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [INSÉRER ICI LE COMPOSANT RagFAQ] */}

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Des Résultats Prouvés</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">-65%</div>
              <p className="text-gray-600">de temps passé à chercher l&apos;information</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6 mois</div>
              <p className="text-gray-600">en moyenne pour un ROI positif</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">de satisfaction utilisateur</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre gestion documentaire ?
          </h2>
          <p className="text-xl mb-8">
            Découvrez comment notre solution s&apos;adapte à vos besoins
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center">
            Demander une démo
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
