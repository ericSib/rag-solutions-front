'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle, Zap, Lock, Users, Star, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/layout/page-layout';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function EnterprisePackPage() {
  return (
    <PageLayout
      title="Pack ENTERPRISE"
      description="La solution RAG ultime pour votre transformation digitale"
    >
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Features */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  La solution sur-mesure et évolutive pour les grands groupes souhaitant une transformation globale de leur gestion documentaire, avec un niveau de service et de sécurité sans compromis.
                </h2>
                <div className="space-y-4">
                  <Feature icon={<Zap className="w-5 h-5" />} text="Volume illimité de documents" />
                  <Feature icon={<CheckCircle className="w-5 h-5" />} text="Solution entièrement personnalisée" />
                  <Feature icon={<Lock className="w-5 h-5" />} text="Sécurité et conformité maximales" />
                  <Feature icon={<Users className="w-5 h-5" />} text="Support et expertise dédiés" />
                  <Feature icon={<Star className="w-5 h-5" />} text="Innovation et R&D continues" />
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
                      <Feature icon={<ChevronRight className="w-4 h-4" />} text="Volume illimité de documents" />
                      <Feature icon={<ChevronRight className="w-4 h-4" />} text="Solution sur mesure" />
                      <Feature icon={<ChevronRight className="w-4 h-4" />} text="Intégrations multiples" />
                      <Feature icon={<ChevronRight className="w-4 h-4" />} text="Support dédié" />
                      <Feature icon={<ChevronRight className="w-4 h-4" />} text="Formation sur site" />
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
                      <Feature icon={<ChevronRight className="w-4 h-4" />} text="Support 24/7" />
                      <Feature icon={<ChevronRight className="w-4 h-4" />} text="Monitoring temps réel" />
                      <Feature icon={<ChevronRight className="w-4 h-4" />} text="Mises à jour continues" />
                      <Feature icon={<ChevronRight className="w-4 h-4" />} text="SLA : 1h" />
                    </div>
                  </CardContent>
                </Card>

                <Link href="/demo">
                  <Button className="w-full">
                    Demander un devis sur mesure
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Services Inclus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Sécurité Maximale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Feature icon={<ChevronRight className="w-4 h-4" />} text="Audit et hardening continus" />
                  <Feature icon={<ChevronRight className="w-4 h-4" />} text="Certifications ISO 27001, HDS" />
                  <Feature icon={<ChevronRight className="w-4 h-4" />} text="Tests d'intrusion réguliers" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Optimale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Feature icon={<ChevronRight className="w-4 h-4" />} text="Architecture sur mesure" />
                  <Feature icon={<ChevronRight className="w-4 h-4" />} text="Haute disponibilité" />
                  <Feature icon={<ChevronRight className="w-4 h-4" />} text="Plan de reprise d'activité" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accompagnement Stratégique</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Feature icon={<ChevronRight className="w-4 h-4" />} text="Conseil en transformation" />
                  <Feature icon={<ChevronRight className="w-4 h-4" />} text="Co-innovation et R&D" />
                  <Feature icon={<ChevronRight className="w-4 h-4" />} text="Gouvernance de données" />
                </div>
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