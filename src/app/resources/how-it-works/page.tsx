'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FileQuestion, Search, Database, ChevronDown, ArrowRight, Brain, Shield, Target } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { PageLayout } from '@/components/layout/page-layout';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
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
    question: "Comment garantissez-vous la sécurité des données ?",
    answer: "Nous appliquons des protocoles de sécurité stricts, incluant le chiffrement des données, l'authentification multi-facteurs et des audits réguliers. Vos documents restent dans votre infrastructure."
  },
  {
    question: "Quel est le temps de mise en place ?",
    answer: "Le déploiement initial prend généralement 2 à 4 semaines, incluant l'intégration, la configuration et la formation des équipes."
  }
];

export default function HowItWorksPage() {
  const [openFAQs, setOpenFAQs] = useState<{ [key: number]: boolean }>({});

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <PageLayout
      title="Comprendre l'IA en Entreprise"
      description="L'Intelligence Artificielle générative fascine par sa capacité à générer du contenu. Mais en entreprise, cette approche pose deux défis majeurs."
      showCTA={false}
    >
      {/* Défis Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-50 border-red-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileQuestion className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Le problème des hallucinations</h3>
                    <p className="text-gray-600">
                      L'IA générative peut inventer des informations plausibles mais fausses, créant un risque majeur pour la prise de décision.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">La confidentialité des données</h3>
                    <p className="text-gray-600">
                      L'envoi de documents confidentiels vers des modèles externes pose des problèmes de sécurité et de conformité.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RAG Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">Le RAG : L'IA Maîtrisée</h2>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Le RAG (Retrieval Augmented Generation) résout ces défis en ancrant l'IA dans vos données réelles. Imaginez un expert qui :
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Search className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">1. Recherche</h3>
                    <p className="text-gray-600">
                      Identifie précisément les informations pertinentes dans votre base documentaire
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">2. Analyse</h3>
                    <p className="text-gray-600">
                      Comprend le contexte et relie les informations entre elles
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Database className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">3. Restitue</h3>
                    <p className="text-gray-600">
                      Fournit des réponses basées uniquement sur vos documents vérifiés
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi le RAG est Idéal pour l'Entreprise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Fiabilité</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span>Répond uniquement avec vos données vérifiées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span>Élimine le risque d'hallucinations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span>Traçabilité complète des réponses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Sécurité</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>Vos données restent dans votre infrastructure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>Conformité RGPD native</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>Contrôle total sur les accès</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Gain de temps</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-blue-600" />
                    <span>Recherche instantanée dans tous les documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-600" />
                    <span>Compréhension du contexte métier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span>Réponses ciblées et pertinentes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Processus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Analyse initiale</h3>
                  <p className="text-gray-600">
                    Évaluation de votre patrimoine documentaire et de vos besoins spécifiques
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Déploiement sécurisé</h3>
                  <p className="text-gray-600">
                    Installation dans votre infrastructure avec sécurité maximale
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Accompagnement</h3>
                  <p className="text-gray-600">
                    Formation et support pour une adoption réussie
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="max-w-2xl mx-auto">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQs[index] || false}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à transformer votre gestion documentaire ?
            </h2>
            <p className="text-xl mb-8">
              Découvrez comment notre solution peut s'adapter à vos besoins spécifiques.
            </p>
            <Link href="/demo">
              <Button size="lg" variant="secondary">
                Demander une démo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}