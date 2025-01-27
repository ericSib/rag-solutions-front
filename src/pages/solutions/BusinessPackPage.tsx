import { Helmet } from 'react-helmet-async';
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle, Zap, Lock, Users } from 'lucide-react';

export default function BusinessPackPage() {
  return (
    <>
      <Helmet>
        <title>Pack Business - RAG Solutions</title>
        <meta
          name="description"
          content="Découvrez notre Pack Business, la solution puissante et évolutive pour les ETI et grands comptes souhaitant optimiser leur gestion documentaire."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Pack BUSINESS <br/>
          <span className="text-primary">La performance RAG pour votre entreprise</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-xl mb-6 text-muted-foreground">
              La solution puissante et évolutive pour les ETI et grands comptes souhaitant optimiser leur gestion documentaire de manière personnalisée et sécurisée.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Zap className="h-5 w-5 text-primary mr-2" />
                <span>Jusqu'à <strong>50 000</strong> documents indexés</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Interface utilisateur personnalisée</span>
              </li>
              <li className="flex items-center">
                <Lock className="h-5 w-5 text-primary mr-2" />
                <span>Sécurité des données renforcée</span>
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span>Support et formation avancés</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Setup Initial</CardTitle>
                  <div className="text-2xl font-bold text-primary">35 000€</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Jusqu'à 50 000 documents indexés
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Interface personnalisée
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Intégration système existant 
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Support déploiement premium
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Formation complète équipes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Maintenance Mensuelle</CardTitle>
                  <div className="text-2xl font-bold text-primary">4 000€</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Support 12/7
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Monitoring avancé 
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Mises à jour hebdomadaires
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    SLA : 4h
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
                  Audit sécurité complet
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Conformité RGPD
                </li>
              </ul>
              <div className="font-semibold mt-4">À partir de 5 000€</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Optimisée</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Load balancing  
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Réplication données
                </li>
              </ul>
              <div className="font-semibold mt-4">À partir de 3 000€</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Premium</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">  
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Support VIP 
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />  
                  Astreinte 24/7
                </li>
              </ul>
              <div className="font-semibold mt-4">À partir de 2 000€/mois</div>  
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contacter un expert
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}