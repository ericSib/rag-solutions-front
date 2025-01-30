'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle, Zap, Lock, Users } from 'lucide-react';
import { PageLayout } from '@/components/layout/page-layout';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function BusinessPackPage() {
  return (
    <PageLayout
      title="Pack BUSINESS"
      description="La performance RAG pour votre entreprise"
    >
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Features */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  La solution puissante et évolutive pour les ETI et grands comptes souhaitant optimiser leur gestion documentaire de manière personnalisée et sécurisée.
                </h2>
                <div className="space-y-4">
                  <Feature icon={<Zap className="w-5 h-5" />} text="Jusqu'à 50 000 documents indexés" />
                  <Feature icon={<Users className="w-5 h-5" />} text="Interface utilisateur personnalisée" />
                  <Feature icon={<Lock className="w-5 h-5" />} text="Sécurité des données renforcée" />
                  <Feature icon={<CheckCircle className="w-5 h-5" />} text="Support et formation avancés" />
                </div>
              </div>

              {/* Right Column - Pricing */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Setup Initial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">Sur devis</div>
                    <div className="space-y-2">
                      <Feature icon={<CheckCircle className="w-4 h-4" />} text="Jusqu'à 50 000 documents indexés" />
                      <Feature icon={<CheckCircle className="w-4 h-4" />} text="Interface personnalisée" />
                      <Feature icon={<CheckCircle className="w-4 h-4" />} text="Intégration système existant" />
                      <Feature icon={<CheckCircle className="w-4 h-4" />} text="Support déploiement premium" />
                      <Feature icon={<CheckCircle className="w-4 h-4" />} text="Formation complète équipes" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Maintenance Mensuelle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">Sur devis</div>
                    <div className="space-y-2">
                      <Feature icon={<CheckCircle className="w-4 h-4" />} text="Support 12/7" />
                      <Feature icon={<CheckCircle className="w-4 h-4" />} text="Monitoring avancé" />
                      <Feature icon={<CheckCircle className="w-4 h-4" />} text="Mises à jour hebdomadaires" />
                      <Feature icon={<CheckCircle className="w-4 h-4" />} text="SLA: 4h" />
                    </div>
                  </CardContent>
                </Card>

                <Link href="/demo">
                  <Button className="w-full">
                    Demander une démo <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Options Compatibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Sécurité Renforcée</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Feature icon={<CheckCircle className="w-4 h-4" />} text="Audit sécurité complet" />
                  <Feature icon={<CheckCircle className="w-4 h-4" />} text="Conformité RGPD" />
                </div>
                <div className="font-semibold mt-4">À partir de 5 000€</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Optimisée</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Feature icon={<CheckCircle className="w-4 h-4" />} text="Load balancing" />
                  <Feature icon={<CheckCircle className="w-4 h-4" />} text="Réplication données" />
                </div>
                <div className="font-semibold mt-4">À partir de 3 000€</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Feature icon={<CheckCircle className="w-4 h-4" />} text="Support VIP" />
                  <Feature icon={<CheckCircle className="w-4 h-4" />} text="Astreinte 24/7" />
                </div>
                <div className="font-semibold mt-4">À partir de 2 000€/mois</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 text-blue-600">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}