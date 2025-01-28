'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FileQuestion, Search, Database, ChevronDown, ArrowRight, Brain, Shield, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onToggle}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQS = [
  {
    question: "Qu'est-ce que la technologie RAG ?",
    answer: "La technologie RAG (Retrieval-Augmented Generation) combine la recherche d'information précise avec la génération de texte pour fournir des réponses contextualisées basées sur vos documents."
  },
  {
    question: "Comment fonctionne le double pipeline ?",
    answer: "Notre double pipeline RAG utilise d'abord un système de recherche avancé pour identifier les informations pertinentes, puis un modèle de langage pour générer des réponses précises et cohérentes."
  },
  {
    question: "Quels types de documents sont supportés ?",
    answer: "Notre solution prend en charge une large gamme de formats : PDF, Word, Excel, PowerPoint, emails, et bien d'autres. Nous pouvons aussi nous connecter à vos systèmes existants."
  },
  {
    question: "Comment est assurée la sécurité des données ?",
    answer: "Nous utilisons le chiffrement de bout en bout, des contrôles d'accès granulaires, et nos serveurs sont hébergés en Europe en conformité avec le RGPD."
  },
  {
    question: "Quel est le temps de mise en place ?",
    answer: "La mise en place typique prend 2-4 semaines, incluant l'intégration avec vos systèmes, la formation des utilisateurs et la personnalisation selon vos besoins."
  }
];

const HowItWorksPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Comment fonctionne notre technologie RAG ?
            </h1>
            <p className="text-xl mb-8">
              Découvrez notre approche innovante de la gestion documentaire intelligente
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Notre processus en 3 étapes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <FileQuestion className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">1. Analyse</h3>
                <p className="text-gray-600">
                  Nous analysons vos documents et les convertissons en données structurées
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Search className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">2. Indexation</h3>
                <p className="text-gray-600">
                  Les informations sont indexées pour une recherche ultra-rapide
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">3. Exploitation</h3>
                <p className="text-gray-600">
                  Accédez instantanément à vos informations via une interface intuitive
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Questions fréquentes
          </h2>
          <div className="max-w-3xl mx-auto">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contextualisation IA */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Comprendre l'IA en Entreprise</h2>
        
        <div className="prose prose-lg mx-auto mb-8">
          <p>
            L'Intelligence Artificielle générative (ChatGPT, etc.) fascine par sa capacité à générer du contenu. 
            Mais en entreprise, cette approche pose deux défis majeurs :
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-red-50">
            <CardContent className="p-6">
              <FileQuestion className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold mb-2">Le problème des hallucinations</h3>
              <p className="text-gray-600">
                L'IA générative peut inventer des informations plausibles mais fausses, 
                créant un risque majeur pour la prise de décision.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-50">
            <CardContent className="p-6">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold mb-2">La confidentialité des données</h3>
              <p className="text-gray-600">
                L'envoi de documents confidentiels vers des modèles externes 
                pose des problèmes de sécurité et de conformité.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Qu'est-ce que le RAG */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Le RAG : L'IA Maîtrisée</h2>
        
        <div className="prose prose-lg mx-auto mb-8">
          <p>
            Le RAG (Retrieval Augmented Generation) résout ces défis en ancrant l'IA dans vos données réelles. 
            Imaginez un expert qui :
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <Search className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">1. Recherche</h3>
              <p className="text-gray-600">
                Identifie précisément les informations pertinentes dans votre base documentaire
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Brain className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">2. Analyse</h3>
              <p className="text-gray-600">
                Comprend le contexte et relie les informations entre elles
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Database className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">3. Restitue</h3>
              <p className="text-gray-600">
                Fournit des réponses basées uniquement sur vos documents vérifiés
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Avantages Entreprise */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Pourquoi le RAG est Idéal pour l'Entreprise</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Fiabilité</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Répond uniquement avec vos données vérifiées</li>
                <li>• Élimine le risque d'hallucinations</li>
                <li>• Traçabilité complète des réponses</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Sécurité</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Vos données restent dans votre infrastructure</li>
                <li>• Conformité RGPD native</li>
                <li>• Contrôle total sur les accès</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Gain de temps</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Recherche instantanée dans tous les documents</li>
                <li>• Compréhension du contexte métier</li>
                <li>• Réponses ciblées et pertinentes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Questions fréquentes
          </h2>
          <div className="max-w-3xl mx-auto">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Des Résultats Prouvés</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">-65%</div>
              <p className="text-gray-600">de temps passé à chercher l'information</p>
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
            Découvrez comment notre solution s'adapte à vos besoins
          </p>
          <Link 
            href="/demo" 
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Demander une démo
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;