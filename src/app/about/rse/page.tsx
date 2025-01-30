import React from 'react';
import { Leaf, Users, Target, ChevronRight, Heart, BarChart, Calendar, Shield, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engagements RSE | RAG Solutions',
  description: 'Découvrez nos engagements RSE : une approche éthique et durable de l\'IA documentaire, alliant performance technique et impact positif.',
  openGraph: {
    title: 'Engagements RSE | RAG Solutions',
    description: 'Découvrez nos engagements RSE : une approche éthique et durable de l\'IA documentaire, alliant performance technique et impact positif.',
    images: [
      {
        url: '/images/rse-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Engagements RSE RAG Solutions',
      },
    ],
  },
};

// Types
interface TimelineItemProps {
  year: string;
  title: string;
  items: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, items }) => (
  <div className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-0" data-testid="timeline-item">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
    <div className="mb-2">
      <span className="text-lg font-semibold text-blue-600">{year}</span>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface ImpactCardProps {
  icon: LucideIcon;
  title: string;
  currentMetric: string;
  target2025: string;
  description: string;
  color?: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  icon: Icon,
  title,
  currentMetric,
  target2025,
  description,
  color = "blue"
}) => (
  <Card className="h-full">
    <CardContent className="p-6">
      <Icon className={`w-12 h-12 text-${color}-600 mb-4`} />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Aujourd'hui</span>
          <span className="font-bold text-lg">{currentMetric}</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full" data-testid="impact-progress">
          <div className={`bg-${color}-600 h-2 rounded-full`} style={{ width: '40%' }} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Objectif 2025</span>
          <span className="font-semibold text-lg text-blue-600">{target2025}</span>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const RSEPage: React.FC = () => {
  const impacts = [
    {
      icon: Leaf,
      title: "Impact Environnemental",
      currentMetric: "Objectif initial",
      target2025: "-40%",
      description: "Réduction de l'empreinte carbone vs solutions traditionnelles grâce à notre architecture RAG optimisée et nos datacenters verts certifiés.",
      color: "green"
    },
    {
      icon: Users,
      title: "Impact Social",
      currentMetric: "Lancement 2025",
      target2025: "100+",
      description: "Emplois créés dans la tech éthique avec 50+ partenariats académiques actifs et notre programme Tech4All pour l'inclusion numérique.",
      color: "blue"
    },
    {
      icon: Target,
      title: "Impact Économique",
      currentMetric: "Objectif initial",
      target2025: "85%",
      description: "De nos clients PME accompagnés vers une transformation numérique responsable avec un ROI moyen de 300% la première année.",
      color: "blue"
    }
  ];

  const initiatives = [
    {
      title: "Tech4All Academy",
      metrics: [
        "Objectif : Former 50 personnes en 2025",
        "Programme de formation en développement",
        "Premier centre pilote prévu à Paris"
      ],
      icon: Users
    },
    {
      title: "Green Computing",
      metrics: [
        "Objectif : 80% énergie renouvelable en 2025",
        "Architecture optimisée en développement",
        "Certification Green IT en cours"
      ],
      icon: Leaf
    },
    {
      title: "Innovation Responsable",
      metrics: [
        "5 startups RSE incubées",
        "3M€ investis en R&D verte",
        "2 brevets déposés en 2023"
      ],
      icon: Zap
    }
  ];

  const roadmap = [
    {
      year: "2025",
      title: "Lancement",
      items: [
        "Lancement de RAG Solutions",
        "Mise en place Tech4All Academy",
        "Préparation certification Green IT"
      ]
    },
    {
      year: "2026",
      title: "Développement",
      items: [
        "100% énergie renouvelable",
        "Ouverture de 3 nouveaux centres de formation",
        "Lancement du fonds d'innovation sociale"
      ]
    },
    {
      year: "2027",
      title: "Accélération",
      items: [
        "Scale-up du programme Tech4All en Europe",
        "Neutralité carbone validée",
        "1000+ emplois tech créés"
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 lg:py-20" role="banner">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-4">
              RSE & Impact
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Une tech responsable au service de votre transformation
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8">
              Nous concilions performance technique et impact positif pour construire 
              ensemble une transformation numérique éthique et durable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>RGPD Compatible</span>
              </div>
              <div className="flex items-center">
                <Leaf className="w-5 h-5 mr-2" />
                <span>Green IT Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Cards avec métriques */}
      <section className="py-16" role="region" aria-label="Notre impact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Notre Impact en Chiffres
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {impacts.map((impact, index) => (
              <ImpactCard key={index} {...impact} />
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Concrètes */}
      <section className="py-16 bg-gray-50" role="region" aria-label="Nos initiatives">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nos Initiatives Concrètes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <initiative.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{initiative.title}</h3>
                  <ul className="space-y-3">
                    {initiative.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                        <span className="text-gray-600">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap avec échéances précises */}
      <section className="py-16 bg-white" role="region" aria-label="Notre feuille de route">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Notre Feuille de Route
          </h2>
          <div className="max-w-3xl mx-auto">
            {roadmap.map((milestone, index) => (
              <TimelineItem key={index} {...milestone} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA avec focus communauté */}
      <section className="py-16 bg-green-600" role="region" aria-label="Appel à l'action">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Rejoignez le mouvement
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Ensemble, construisons une tech plus responsable et inclusive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/demo" 
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Demander une démo
              <ChevronRight className="h-5 w-5" />
            </a>
            <a 
              href="https://blog.ragsolutions.tech" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-green-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le blog
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSEPage;