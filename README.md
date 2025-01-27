# RAG Solutions Website

Site web vitrine pour RAG Solutions, spécialiste en solutions d'intelligence documentaire basées sur le RAG (Retrieval Augmented Generation).

## Stack Technique

- Next.js 14 avec App Router
- TailwindCSS + shadcn/ui
- TypeScript
- Jest & React Testing Library
- Strapi CMS (StrapiCloud)
- Hébergement Vercel

## Prérequis

- Node.js 18+
- npm 9+

## Installation

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build le projet pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Lance le linter
- `npm run test` - Lance les tests
- `npm run test:watch` - Lance les tests en mode watch
- `npm run format` - Formate le code avec Prettier

## Structure du Projet

```
src/
├── app/             # Routes et pages
├── components/      # Composants réutilisables
├── lib/            # Utilitaires et configurations
├── styles/         # Styles globaux
└── tests/          # Tests
```

## Intégrations

- Formulaire de contact via Hubspot
- Formulaire de demande de devis via Hubspot
- Blog (redirection vers blog.ragsolutions.tech)

## Features

- SEO optimisé
- Performance optimale (Core Web Vitals)
- Full responsive
- Support i18n (préparé pour le futur)
- RGPD compliant
