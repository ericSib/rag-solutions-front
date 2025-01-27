'use client'

import React from 'react';
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

const Navigation = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">RAG Solutions</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {child.label}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href} passHref legacyBehavior>
                    <NavigationMenuLink
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button variant="outline">Se connecter</Button>
          <Button>Demander une démo</Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
