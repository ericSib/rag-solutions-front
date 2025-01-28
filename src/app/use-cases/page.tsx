'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, FileText, Users, Clock, Target, 
  ArrowRight, ChevronRight, Music2, Search 
} from 'lucide-react';

export default function UseCasesPage() {
  const sectors = [
    {
      icon: Building,
      title: "Industrie & Manufacturing",
      description: "Optimisation de la documentation technique et des processus qualité",
      cases: [
        {
          title: "Constructeur Automobile International",
          results: [
            "Temps de recherche réduit de 65%",
            "Erreurs de production réduites de 45%",
            "ROI atteint en 8 mois"
          ],
          volume: "500 000+ documents",
          solution: "ENTERPRISE avec intégration PLM"
        },
        {
          title: "PME Industrie de Précision",
          results: [
            "Onboarding nouveaux employés accéléré de 40%",
            "Productivité maintenance augmentée de 25%",
            "Satisfaction employés améliorée de 35%"
          ],
          volume: "10 000 documents",
          solution: "BUSINESS avec formation intensive"
        }
      ]
    },
    {
      icon: FileText,
      title: "Services Professionnels",
      description: "Gestion des connaissances et optimisation des processus métier",
      cases: [
        {
          title: "Cabinet de Conseil International",
          results: [
            "Gain de 12h/consultant/mois",
            "Réutilisation expertise +60%",
            "Satisfaction client +40%"
          ],
          volume: "1M+ documents",
          solution: "ENTERPRISE avec IA prédictive"
        },
        {
          title: "Cabinet d'Avocats Régional",
          results: [
            "Temps recherche -50%",
            "Qualité réponses client +45%",
            "Nouveaux contrats +25%"
          ],
          volume: "50 000 documents",
          solution: "BUSINESS avec formation"
        }
      ]
    },
    {
      icon: Building,
      title: "Gestion Immobilière",
      description: "Gestion des baux et conformité réglementaire",
      cases: [
        {
          title: "Groupe Immobilier National",
          results: [
            "Temps de réponse locataires -70%",
            "Efficacité gestion +45%",
            "Contentieux -30%"
          ],
          volume: "50 000 lots",
          solution: "ENTERPRISE avec portail client"
        },
        {
          title: "Agence Immobilière Régionale",
          results: [
            "Traitement demandes +60% rapide",
            "Satisfaction locataires +40%",
            "Coûts administratifs -25%"
          ],
          volume: "1 000 lots",
          solution: "BUSINESS avec API"
        }
      ]
    },
    {
      icon: Music2,
      title: "Industrie Musicale",
      description: "Gestion des droits et catalogues musicaux",
      cases: [
        {
          title: "Label Musical Major",
          results: [
            "Gestion droits optimisée 50%",
            "Revenus streaming +25%",
            "Temps traitement -40%"
          ],
          volume: "2M+ titres",
          solution: "ENTERPRISE avec API"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 font-inter mb-4">
          Cas d'Usage par Secteur
        </h1>
        <p className="text-xl text-gray-600 font-sourcesanspro">
          Découvrez comment nos clients transforment leur gestion documentaire
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {sectors.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-4">
                  <Icon className="h-8 w-8 text-[#2563EB]" />
                  <div>
                    <CardTitle className="font-inter">{sector.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1 font-sourcesanspro">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {sector.cases.map((case_, caseIndex) => (
                  <div 
                    key={caseIndex}
                    className={`${caseIndex > 0 ? 'mt-8 pt-8 border-t' : ''}`}
                  >
                    <h3 className="font-semibold text-lg mb-4 font-inter">
                      {case_.title}
                    </h3>
                    <div className="grid gap-4">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          Résultats
                        </Badge>
                        <ul className="space-y-2">
                          {case_.results.map((result, resultIndex) => (
                            <li 
                              key={resultIndex}
                              className="flex items-center gap-2 text-sm font-sourcesanspro"
                            >
                              <ChevronRight className="h-4 w-4 text-[#2563EB]" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <div>
                          <Badge variant="outline" className="mb-2">
                            Volume
                          </Badge>
                          <p className="text-sm font-sourcesanspro">{case_.volume}</p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">
                            Solution
                          </Badge>
                          <p className="text-sm font-sourcesanspro">{case_.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
