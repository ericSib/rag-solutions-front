import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle, Zap, Lock, Users, Star, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pack ENTERPRISE - RAG Solutions',
  description: 'Solution sur mesure pour les grandes organisations. Exploitez pleinement votre patrimoine documentaire avec notre technologie RAG avancée.',
  openGraph: {
    title: 'Pack ENTERPRISE - RAG Solutions',
    description: 'Solution sur mesure pour les grandes organisations. Exploitez pleinement votre patrimoine documentaire avec notre technologie RAG avancée.',
  },
};

export default function EnterprisePackPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Pack ENTERPRISE <br/>
          <span className="text-primary">La solution RAG ultime pour votre transformation digitale</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-xl mb-6 text-muted-foreground">
              La solution sur-mesure et évolutive pour les grands groupes souhaitant une transformation globale de leur gestion documentaire, avec un niveau de service et de sécurité sans compromis.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Zap className="h-5 w-5 text-primary mr-2" />
                <span>Volume illimité de documents</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Solution entièrement personnalisée</span>
              </li>
              <li className="flex items-center">
                <Lock className="h-5 w-5 text-primary mr-2" />
                <span>Sécurité et conformité maximales</span>
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span>Support et expertise dédiés</span>
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-primary mr-2" />
                <span>Innovation et R&D continues</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Setup Initial</CardTitle>
                  <div className="text-2xl font-bold text-primary">60 000€</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Volume illimité de documents
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Solution sur mesure
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Intégrations multiples
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Support dédié
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Formation sur site
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Maintenance Mensuelle</CardTitle>
                  <div className="text-2xl font-bold text-primary">7 000€</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Support 24/7
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Monitoring temps réel
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Mises à jour continues
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    SLA : 1h
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Services Inclus</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sécurité Maximale</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Audit et hardening continus
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Certifications ISO 27001, HDS
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Tests d'intrusion réguliers
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Optimale</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Architecture sur mesure
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Haute disponibilité
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Plan de reprise d'activité
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accompagnement Stratégique</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Conseil en transformation
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Co-innovation et R&D
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Gouvernance de données
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/demo" 
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Demander un devis sur mesure
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}