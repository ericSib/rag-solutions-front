import { useState } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Accueil", href: "/" },
  {
    label: "À propos",
    children: [
      { label: "Notre mission", href: "/about" },
      { label: "Engagements RSE", href: "/about/rse" },
    ],
  },
  {
    label: "Nos solutions",
    children: [
      { label: "Pack STARTER", href: "/solutions/starter" },
      { label: "Pack BUSINESS", href: "/solutions/business" },
      { label: "Pack ENTERPRISE", href: "/solutions/enterprise" },
    ],
  },
  {
    label: "Nos secteurs",
    children: [
      { label: "Industrie & Manufacturing", href: "/sectors/industry" },
      { label: "Services Professionnels", href: "/sectors/services" },
      { label: "Gestion Immobilière", href: "/sectors/real-estate" },
      { label: "Industrie Musicale", href: "/sectors/music" },
      { label: "Service Client", href: "/sectors/customer-service" },
    ],
  },
  {
    label: "Ressources",
    children: [
      { label: "Blog", href: "https://blog.ragsolutions.tech" },
      { label: "Calculateur ROI", href: "/resources/roi-calculator" },
      { label: "Comment ça marche", href: "/resources/how-it-works" },
    ],
  },
  { label: "Community Hub", href: "/community" },
];