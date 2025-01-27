import React, { useState, useEffect } from 'react';
import { Shield, Zap, Users, ChevronRight, Search, BookOpen, Leaf, Target } from 'lucide-react';

const TopBanner = () => (
  <div className="bg-blue-900 text-white py-2 px-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex space-x-8">
        <div className="flex items-center">
          <Shield className="w-4 h-4 mr-2" />
          <span className="text-sm">Sécurité maximale & RGPD</span>
        </div>
        <div className="flex items-center">
          <Target className="w-4 h-4 mr-2" />
          <span className="text-sm">Précision > 85%</span>
        </div>
        <div className="flex items-center">
          <Leaf className="w-4 h-4 mr-2" />
          <span className="text-sm">-40% empreinte carbone</span>
        </div>
      </div>
    </div>
  </div>
);

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Homepage = () => {
  return (
    <div className="w-full">
      <TopBanner />
      
      {/* Hero Section with Double Pipeline Focus */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-center">
              L'Intelligence Documentaire Éthique pour Entreprises Responsables
            </h1>
            <p className="text-xl mb-8 text-center">
              Notre technologie RAG double pipeline permet d'exploiter et d'explorer votre patrimoine documentaire de manière éthique et performante.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Search className="w-6 h-6 mr-2" />
                  Pipeline Exploitation
                </h3>
                <p>Accédez instantanément à l'information pertinente avec une précision supérieure à 85% et un temps de réponse inférieur à 2 secondes.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2" />
                  Pipeline Exploration
                </h3>
                <p>Découvrez des connexions inattendues et des insights cachés dans vos documents grâce à notre technologie d'exploration contextuelle.</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-12">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Demander une démo
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Voir nos solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Triple Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Triple Impact Positif</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performance</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Précision > 85%
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Temps réponse < 2s
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  ROI sous 6 mois
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <Leaf className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Environnement</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-green-600 mr-2" />
                  -40% empreinte carbone
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-green-600 mr-2" />
                  Datacenters verts
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-green-600 mr-2" />
                  Objectif 2025: neutralité
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Social</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  200+ emplois créés
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Formation Tech4All
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  50+ partenariats écoles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Une Solution pour Chaque Besoin</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pack STARTER */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Pack STARTER</h3>
              <p className="text-gray-600 mb-4">PME & ETI - jusqu'à 10 000 documents</p>
              <div className="mb-6 text-3xl font-bold text-blue-600">
                <AnimatedCounter end={85} suffix="%" /> 
                <div className="text-sm font-normal text-gray-600 mt-1">
                  de gain en productivité
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Sécurité RGPD native</h4>
                    <p className="text-sm text-gray-600">Protection de vos données garantie</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Search className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Recherche optimisée</h4>
                    <p className="text-sm text-gray-600">Accès instantané à vos documents</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Découvrir l'offre
              </button>
            </div>

            {/* Pack BUSINESS */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  RECOMMANDÉ
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pack BUSINESS</h3>
              <p className="text-gray-600 mb-4">ETI & Grands Comptes - jusqu'à 50 000 documents</p>
              <div className="mb-6 text-3xl font-bold text-blue-600">
                <AnimatedCounter end={95} suffix="%" />
                <div className="text-sm font-normal text-gray-600 mt-1">
                  de satisfaction client
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Double pipeline</h4>
                    <p className="text-sm text-gray-600">Exploitation & exploration optimales</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Innovation guidée</h4>
                    <p className="text-sm text-gray-600">Découverte de connexions cachées</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Découvrir l'offre
              </button>
            </div>

            {/* Pack ENTERPRISE */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Pack ENTERPRISE</h3>
              <p className="text-gray-600 mb-4">Grands Groupes - volume illimité</p>
              <div className="mb-6 text-3xl font-bold text-blue-600">
                <AnimatedCounter end={6} suffix=" mois" />
                <div className="text-sm font-normal text-gray-600 mt-1">
                  ROI moyen
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Solution sur mesure</h4>
                    <p className="text-sm text-gray-600">Adaptée à vos enjeux spécifiques</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Co-innovation</h4>
                    <p className="text-sm text-gray-600">Partenariat stratégique dédié</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Découvrir l'offre
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ils nous font confiance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "RAG Solutions nous a permis de réduire de 65% le temps de recherche de nos équipes techniques. La double approche exploitation/exploration nous a fait découvrir des opportunités d'amélioration insoupçonnées."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Marie Dubois</p>
                  <p className="text-gray-600">Directrice Technique, AutoTech Industries</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "Au-delà de la performance technique, c'est l'engagement RSE et l'approche éthique qui nous ont convaincus. RAG Solutions prouve qu'on peut allier innovation et responsabilité."
                </p>
                <div className="flex items-center">
                <div>
                  <p className="font-semibold">Thomas Martin</p>
                  <p className="text-gray-600">DSI, Global Services Corp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre gestion documentaire de manière éthique ?
          </h2>
          <p className="text-xl mb-8">
            Découvrez comment notre technologie RAG double pipeline peut révolutionner votre approche documentaire tout en respectant vos engagements RSE
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Demander une démo
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Calculer votre ROI
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;