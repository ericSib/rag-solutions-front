'use client';

import React from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, CheckCircle, Zap, Lock } from 'lucide-react';
import Link from 'next/link';

export default function StarterPackPage() {
  return (
    <PageLayout
      title="Pack STARTER"
      description="La solution idéale pour démarrer avec la gestion documentaire intelligente"
    >
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pack STARTER <br/>
              <span className="text-primary">L'essentiel pour vos premiers pas RAG</span>
            </h1>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-xl mb-6 text-muted-foreground">
                La solution idéale pour les PME souhaitant optimiser leur gestion documentaire de manière simple et sécurisée.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span>Jusqu'à <strong>10 000</strong> documents indexés</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Interface utilisateur standard</span>
                </li>
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-primary mr-2" />
                  <span>Sécurité des données renforcée</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Setup Initial</CardTitle>
                    <div className="text-2xl font-bold text-primary">Sur devis</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Jusqu'à 10 000 documents indexés
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Interface utilisateur standard
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Support pendant déploiement
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Formation utilisateurs initiale
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Maintenance Mensuelle</CardTitle>
                    <div className="text-2xl font-bold text-primary">Sur devis</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Support horaires bureau
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Monitoring basique
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Mises à jour mensuelles
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      SLA : J+1
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-4">Options Compatibles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sécurité Renforcée</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Double authentification
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Chiffrement avancé
                  </li>
                </ul>
                <div className="font-semibold mt-4">À partir de 2 000€</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Avancée</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Cache avancé
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Monitoring premium
                  </li>
                </ul>
                <div className="font-semibold mt-4">À partir de 1 500€/mois</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Dédié</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Ingénieur dédié
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Reporting personnalisé
                  </li>
                </ul>
                <div className="font-semibold mt-4">À partir de 1 000€/mois</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/demo"
              className="inline-block"
            >
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Démarrer maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}