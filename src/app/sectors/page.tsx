import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Secteurs d\'Activité | RAG Solutions',
  description: 'Découvrez comment RAG Solutions s\'adapte à votre secteur d\'activité pour optimiser votre gestion documentaire et améliorer votre efficacité opérationnelle.',
  openGraph: {
    title: 'Nos Secteurs d\'Activité | RAG Solutions',
    description: 'Découvrez comment RAG Solutions s\'adapte à votre secteur d\'activité pour optimiser votre gestion documentaire et améliorer votre efficacité opérationnelle.',
    images: [
      {
        url: '/images/sectors-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Secteurs d\'activité RAG Solutions',
      },
    ],
  },
};

const sectors = [
  {
    title: "Industrie & Manufacturing",
    icon: Briefcase,
    description: "Optimisez votre documentation technique et vos processus métier.",
    benefits: [
      "Accès instantané aux manuels, plans et procédures",
      "Sécurisation du savoir-faire industriel",
      "Conformité aux normes qualité et réglementations"
    ],
    caseStudy: {
      title: "Constructeur Automobile",
      results: [
        "Temps de recherche réduit de 65%",
        "Erreurs de production réduites de 45%",
        "ROI atteint en 8 mois"
      ]
    }
  },
  {
    title: "Services Professionnels",
    icon: FileText,
    description: "Capitalisez sur vos connaissances et délivrez une expertise de pointe.",
    benefits: [
      "Base de connaissances unifiée et intelligente",
      "Recherche intuitive dans les précédents et expertises",
      "Collaboration et partage d'informations facilités"
    ],
    caseStudy: {
      title: "Cabinet de Conseil",
      results: [
        "Gain de 12h/consultant/mois",
        "Réutilisation de l'expertise +60%",
        "Satisfaction client +40%"
      ]
    }
  },
  {
    title: "Gestion Immobilière",
    icon: Briefcase,
    description: "Rationalisez vos processus de gestion locative et de transactions.",
    benefits: [
      "Centralisation des baux, contrôls et documents réglementaires",
      "Intégration avec vos outils métier (CRM, SIG...)",
      "Automatisation des tâches administratives récurrentes"
    ],
    caseStudy: {
      title: "Groupe Immobilier National",
      results: [
        "Temps de traitement des demandes locataires -70%",
        "Efficacité gestion locative +45%",
        "Contentieux -30%"
      ]
    }
  },
  {
    title: "Industrie Musicale",
    icon: Users,
    description: "Gérez vos catalogues et vos contrats artistiques de manière fluide.",
    benefits: [
      "Gestion fine des droits et royalties",
      "Recherche multi-critères dans les répertoires et archives",
      "Conformité juridique et reporting facilités"
    ],
    caseStudy: {
      title: "Label Musical Major",
      results: [
        "Gestion des droits optimisée 50%",
        "Revenus streaming +25%",
        "Litiges -40%"
      ]
    }
  }
];

export default function SectorsPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">
          L'IA Documentaire au Service de Votre Secteur
        </h1>
        <p className="text-xl mb-12 text-center text-muted-foreground max-w-3xl mx-auto">
          Quel que soit votre domaine d'activité, nos solutions RAG vous aident à valoriser votre patrimoine informationnel de manière sécurisée et performante.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <Card key={index} className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <sector.icon className="w-6 h-6 mr-2 text-primary" />
                  {sector.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{sector.description}</p>
                <ul className="space-y-3 mb-6">
                  {sector.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {sector.caseStudy.title}
                  </h3>
                  <ul className="space-y-2">
                    {sector.caseStudy.results.map((result, rIndex) => (
                      <li key={rIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/solutions" 
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Découvrez nos solutions
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}