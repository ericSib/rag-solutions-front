"use client"

import Link from "next/link"
import { MessageSquare, Users, Clock, BarChart3, ArrowRight, ChevronRight, Shield, Brain, HeadphonesIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import React from 'react';

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

const ServiceClientPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Un service client augmenté par l'intelligence artificielle
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Optimisez votre support client grâce à notre solution RAG double pipeline : réponses instantanées et personnalisées 24/7 avec une précision exceptionnelle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/demo" 
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Demander une démo
                <ArrowRight className="h-5 w-5" />
              </Link>
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
            Des solutions innovantes pour votre service client
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Automatisation Intelligente</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Réponses précises et contextualisées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Traitement automatique 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Routage intelligent des demandes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expérience Client</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Réponses instantanées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Support personnalisé</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Suivi multicanal unifié</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance & Suivi</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Analytics en temps réel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Tableaux de bord personnalisés</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Mesure de satisfaction client</span>
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
            Découvrez comment notre approche RAG transforme le service client à travers ces premiers projets pilotes
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard 
              title="Support E-commerce"
              company="Leader Retail en Ligne"
              results={[
                "Volume tickets -45%",
                "Satisfaction client +35%",
                "Coûts opérationnels -30%"
              ]}
              imageUrl="/images/use-cases/ecommerce-support.jpg"
            />
            <CaseStudyCard 
              title="Service Client B2B"
              company="Fournisseur Services Pro"
              results={[
                "Temps réponse -60%",
                "Résolution premier contact +50%",
                "Productivité agents +40%"
              ]}
              imageUrl="/images/use-cases/b2b-support.jpg"
            />
            <CaseStudyCard 
              title="Support Technique"
              company="Éditeur Logiciel SaaS"
              results={[
                "Automatisation +70%",
                "NPS +25 points",
                "Base de connaissances optimisée"
              ]}
              imageUrl="/images/use-cases/tech-support.jpg"
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
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">85%</h3>
                <p className="text-gray-600">Taux moyen d'automatisation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">-70%</h3>
                <p className="text-gray-600">Temps de réponse moyen</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-600 mb-2">+40</h3>
                <p className="text-gray-600">Points de NPS en moyenne</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre service client ?
          </h2>
          <p className="text-xl mb-8">
            Découvrez comment notre solution RAG peut révolutionner votre relation client
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/demo" 
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Demander une démo
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center">
              Voir nos offres
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceClientPage;