import React from 'react';
import { Shield, Leaf, Users, Target, ChevronRight, Heart, BadgeCheck, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from 'next/link';
import { SiLinkedin } from 'react-icons/si';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qui sommes-nous | RAG Solutions',
  description: 'Découvrez l\'expertise RAG Solutions en gestion documentaire éthique et performante. Notre technologie double pipeline révolutionne le traitement de l\'information.'
};

interface StatCardProps {
  icon: LucideIcon;
  stat: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, stat, description }) => (
  <Card className="text-center transform transition-all duration-300 hover:scale-105" data-testid="stat-card">
    <CardContent className="p-6">
      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
      <p className="text-4xl font-bold text-blue-600 mb-2">{stat}</p>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description, iconColor = "text-blue-600" }) => (
  <Card className="h-full" data-testid="value-card">
    <CardContent className="p-6">
      <Icon className={`w-12 h-12 ${iconColor} mb-4`} />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const AboutUsPage: React.FC = () => {
  const stats = [
    {
      icon: Target,
      stat: "85%",
      description: "de précision dans la recherche documentaire grâce à notre double pipeline RAG"
    },
    {
      icon: Zap,
      stat: "60%",
      description: "de gain de productivité moyen constaté chez nos clients"
    },
    {
      icon: Heart,
      stat: "95%",
      description: "de satisfaction client sur nos déploiements"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Excellence technologique",
      description: "Notre double pipeline RAG associe recherche précise et exploration intelligente, permettant d'exploiter pleinement votre capital informationnel tout en garantissant une sécurité maximale.",
      iconColor: "text-blue-600"
    },
    {
      icon: Leaf,
      title: "Innovation responsable",
      description: "Nous développons une IA frugale et éthique, réduisant de 40% l'empreinte carbone du traitement documentaire tout en préservant la confidentialité des données.",
      iconColor: "text-green-600"
    },
    {
      icon: BadgeCheck,
      title: "Accompagnement humain",
      description: "Au-delà de la technologie, nous assurons une transformation réussie grâce à notre programme de formation certifiant et notre support expert disponible 24/7.",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 lg:py-20" role="banner">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              L'expertise RAG au service de votre performance
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-blue-50">
              Nés en 2023 de l'alliance entre experts en IA / cybersécurité et chefferie de projet IT, nous révolutionnons 
              la gestion documentaire grâce à notre technologie RAG double pipeline, alliant performance 
              et éthique.
            </p>
          </div>
        </div>
      </section>

      {/* Statistiques - Focus performance */}
      <section className="py-16 -mt-8" role="region" aria-label="Statistiques">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Notre Expertise - Nouveau bloc explicatif RAG */}
      <section className="py-16 bg-white" role="region" aria-label="Notre expertise">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Notre Expertise Unique</h2>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">La Puissance du Double Pipeline RAG</h3>
                <div className="space-y-4">
                  <div className="flex items-start" data-testid="pipeline-card">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Pipeline d'Exploitation</h4>
                      <p className="text-gray-600">Recherche ultra-précise et contextuelle dans vos documents avec un temps de réponse inférieur à 2 secondes.</p>
                    </div>
                  </div>
                  <div className="flex items-start" data-testid="pipeline-card">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Pipeline d'Exploration</h4>
                      <p className="text-gray-600">Découverte de connexions cachées et de nouvelles opportunités dans votre patrimoine documentaire.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 leading-relaxed">
                En 2023, face au constat que la plupart des solutions de gestion documentaire sacrifient 
                soit la performance, soit l'éthique, notre équipe d'experts en IA et en cybersécurité 
                a développé une approche révolutionnaire. Notre technologie RAG double pipeline permet 
                non seulement d'accéder instantanément à l'information pertinente, mais aussi de 
                découvrir des insights stratégiques inexploités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs - Reformulées pour plus d'impact */}
      <section className="py-16 bg-gray-50" role="region" aria-label="Nos valeurs">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Valeurs Fondamentales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 - Plus concrète et chiffrée */}
      <section className="py-16 bg-blue-50" role="region" aria-label="Vision 2030">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Notre Vision 2030</h2>
            <Card className="text-left mb-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center" data-testid="vision-item">
                    <Target className="w-6 h-6 text-blue-600 mr-3" />
                    <p><strong>1000+</strong> organisations accompagnées dans leur transformation numérique</p>
                  </div>
                  <div className="flex items-center" data-testid="vision-item">
                    <Leaf className="w-6 h-6 text-green-600 mr-3" />
                    <p><strong>-40%</strong> d'empreinte carbone sur le traitement de l'information</p>
                  </div>
                  <div className="flex items-center" data-testid="vision-item">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    <p><strong>1000</strong> emplois qualifiés créés dans la tech éthique</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <p className="text-gray-600">
              Notre ambition est de devenir le leader européen des solutions RAG éthiques d'ici 2030, 
              en démontrant qu'excellence technologique et impact positif vont de pair.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications et Reconnaissances */}
      <section className="py-16 bg-white" role="region" aria-label="Certifications">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Nos Certifications</h2>
            <div className="grid grid-cols-2 gap-6">
              <Card className="flex items-center justify-center p-6" data-testid="certification-card">
                <p className="font-semibold">RGPD Compatible</p>
              </Card>
              <Card className="flex items-center justify-center p-6" data-testid="certification-card">
                <p className="font-semibold">Green IT</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600" role="region" aria-label="Call to action">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Prêt à transformer votre gestion documentaire ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Découvrez la puissance de notre technologie RAG double pipeline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo" 
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Demander une démo
              <ArrowRight className="h-5 w-5" />
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
    </div>
  );
};

export default AboutUsPage;