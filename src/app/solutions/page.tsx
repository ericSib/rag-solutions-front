import React from 'react';
import Link from 'next/link';
import { Shield, Zap, Users, ChevronRight, Search, BookOpen, Leaf, Database, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Solutions RAG | RAG Solutions',
  description: 'Découvrez nos solutions RAG innovantes pour transformer votre gestion documentaire. Du pack Starter à Enterprise, trouvez l\'offre adaptée à vos besoins.',
  openGraph: {
    title: 'Nos Solutions RAG | RAG Solutions',
    description: 'Découvrez nos solutions RAG innovantes pour transformer votre gestion documentaire. Du pack Starter à Enterprise, trouvez l\'offre adaptée à vos besoins.',
    images: [
      {
        url: '/images/solutions-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Solutions RAG',
      },
    ],
  },
};

interface FeatureProps {
  icon: any;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-3">
    <Icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const RagExplanation: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-8 mb-12">
    <Card className="h-full" data-testid="pipeline-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Pipeline d'Exploitation</h3>
        <div className="space-y-4">
          <Feature 
            icon={Search}
            title="Recherche ultra-précise"
            description="Accédez à vos documents en moins de 2 secondes avec une précision optimale" 
          />
          <Feature 
            icon={Database}
            title="Organisation intelligente"
            description="Structuration automatique de votre base documentaire"
          />
          <Feature 
            icon={Shield}
            title="Sécurité intégrée"
            description="Protection RGPD native et chiffrement de bout en bout"
          />
        </div>
      </CardContent>
    </Card>
    <Card className="h-full" data-testid="pipeline-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Pipeline d'Exploration</h3>
        <div className="space-y-4">
          <Feature 
            icon={Zap}
            title="Découverte de connexions"
            description="Identifiez les liens cachés entre vos documents"
          />
          <Feature 
            icon={Leaf}
            title="IA frugale"
            description="Traitement optimisé réduisant l'empreinte carbone de 40%"
          />
          <Feature 
            icon={BookOpen}
            title="Capitalisation"
            description="Transformation de vos documents en intelligence collective"
          />
        </div>
      </CardContent>
    </Card>
  </div>
);

interface SolutionCardProps {
  title: string;
  subtitle: string;
  highlight?: boolean;
  features: FeatureProps[];
  ctaText: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, subtitle, highlight, features, ctaText }) => (
  <Card className={`p-6 hover:shadow-lg transition-shadow ${highlight ? 'border-2 border-blue-600' : ''}`}>
    <CardHeader>
      {highlight && (
        <div className="bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-2">
          RECOMMANDÉ
        </div>
      )}
      <CardTitle className="text-2xl">{title}</CardTitle>
      <p className="text-gray-600">{subtitle}</p>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
      <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
        {ctaText}
        <ArrowRight className="w-4 h-4" />
      </button>
    </CardContent>
  </Card>
);

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Pack STARTER",
      subtitle: "PME & Start-up - Excellence opérationnelle",
      features: [
        {
          icon: Search,
          title: "RAG Pipeline Simple",
          description: "Recherche documentaire optimisée et sécurisée"
        },
        {
          icon: Shield,
          title: "Sécurité essentielle",
          description: "RGPD natif et chiffrement de base"
        },
        {
          icon: Users,
          title: "Support & Formation",
          description: "Accompagnement au démarrage et support réactif"
        }
      ],
      ctaText: "Découvrir STARTER"
    },
    {
      title: "Pack BUSINESS",
      subtitle: "ETI & Scale-up - Innovation maîtrisée",
      highlight: true,
      features: [
        {
          icon: Zap,
          title: "Double Pipeline RAG",
          description: "Exploitation et exploration de vos documents"
        },
        {
          icon: Shield,
          title: "Sécurité avancée",
          description: "Chiffrement bout-en-bout et audits réguliers"
        },
        {
          icon: Leaf,
          title: "IA Responsable",
          description: "Optimisation de l'empreinte environnementale"
        }
      ],
      ctaText: "Découvrir BUSINESS"
    },
    {
      title: "Pack ENTERPRISE",
      subtitle: "Grands Groupes - Transformation globale",
      features: [
        {
          icon: Database,
          title: "RAG sur mesure",
          description: "Architecture dédiée et personnalisée"
        },
        {
          icon: Shield,
          title: "Sécurité critique",
          description: "Protection maximale et conformité totale"
        },
        {
          icon: Users,
          title: "Co-innovation",
          description: "Accompagnement stratégique dédié"
        }
      ],
      ctaText: "Découvrir ENTERPRISE"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 lg:py-20" role="banner">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                RGPD natif
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sm">
                <Leaf className="w-4 h-4 mr-2" />
                IA frugale
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              La puissance de la RAG au service de vos documents
            </h1>
            <p className="text-xl text-white/90">
              Une solution éthique et performante pour exploiter pleinement votre capital informationnel
            </p>
          </div>
        </div>
      </section>

      {/* Section RAG Expliquée */}
      <section className="py-16" role="region" aria-label="Explication RAG">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Notre approche double pipeline RAG</h2>
          <RagExplanation />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50" role="region" aria-label="Nos solutions">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions adaptées à vos besoins</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Engagement Environnemental */}
      <section className="py-16" role="region" aria-label="Engagement environnemental">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Une approche éco-responsable</h2>
            <p className="text-lg text-gray-600 mb-8">
              Notre architecture RAG optimisée et nos datacenters verts permettent de réduire 
              significativement l'empreinte environnementale de votre transformation numérique.
            </p>
            <Link 
              href="/rse" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              En savoir plus sur nos engagements
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16" role="region" aria-label="Call to action">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre gestion documentaire ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Nos experts sont là pour vous accompagner dans votre projet
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
              href="/calculator" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Calculer votre ROI
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;