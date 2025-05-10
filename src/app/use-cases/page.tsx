'use client'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Building, Briefcase, Music2, HeadphonesIcon } from 'lucide-react'
import Link from 'next/link'

const sectors = [
  {
    title: "Industrie",
    description: "Optimisez la gestion de vos documents techniques et réglementaires",
    icon: Building2,
    href: "/use-cases/industry"
  },
  {
    title: "Gestion immobilière",
    description: "Centralisez et automatisez la gestion de vos documents immobiliers",
    icon: Building,
    href: "/use-cases/real-estate"
  },
  {
    title: "Services professionnels",
    description: "Améliorez l'efficacité de vos processus documentaires",
    icon: Briefcase,
    href: "/use-cases/professional-services"
  },
  {
    title: "Industrie musicale",
    description: "Gérez efficacement vos contrats et droits d'auteur",
    icon: Music2,
    href: "/use-cases/music-industry"
  },
  {
    title: "Service client",
    description: "Offrez un support client plus rapide et plus précis",
    icon: HeadphonesIcon,
    href: "/use-cases/service-client"
  }
]

export default function UseCases() {
  return (
    <>
      <PageHeader
        title="Nos cas d'usage"
        description="Découvrez comment notre solution RAG s'adapte aux besoins spécifiques de votre secteur"
      />

      <Container className="mt-16 sm:mt-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <Link key={index} href={sector.href}>
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{sector.title}</h3>
                    <p className="text-gray-600">{sector.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </Container>
    </>
  )
}
