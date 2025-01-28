'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useNavigationMenu, type NavigationItem } from '@/hooks/useNavigationMenu';
import { ArrowRight } from '@/components/icons';

const navigationItems: NavigationItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "À propos",
    children: [
      { label: "Notre mission", href: "/about" },
      { label: "Engagements RSE", href: "/about/rse" },
    ],
    href: "/about",
  },
  {
    label: "Solutions",
    children: [
      { label: "Pack STARTER", href: "/solutions/starter" },
      { label: "Pack BUSINESS", href: "/solutions/business" },
      { label: "Pack ENTERPRISE", href: "/solutions/enterprise" },
    ],
    href: "/solutions",
  },
  {
    label: "Secteurs",
    children: [
      { label: "Industrie & Manufacturing", href: "/sectors/industry" },
      { label: "Services Professionnels", href: "/sectors/professional-services" },
      { label: "Gestion Immobilière", href: "/sectors/real-estate" },
      { label: "Industrie Musicale", href: "/sectors/music" },
      { label: "Service Client", href: "/sectors/customer-service" },
    ],
    href: "/sectors",
  },
  {
    label: "Ressources",
    children: [
      { label: "Blog", href: "https://blog.ragsolutions.tech", external: true },
      { label: "Calculateur ROI", href: "/resources/roi-calculator" },
      { label: "Comment ça marche", href: "/resources/how-it-works" },
    ],
    href: "/resources",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { external?: boolean }
>(({ className, title, children, external, ...props }, ref) => {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...linkProps}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navigation = () => {
  const { getMenuState } = useNavigationMenu(navigationItems);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="RAG Solutions Logo" width={150} height={40} priority />
        </Link>

        <div className="flex-1 flex items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              {navigationItems.map((item) => {
                const menu = item.children ? getMenuState(item.label) : null;
                
                return (
                  <NavigationMenuItem 
                    key={item.label}
                    className="navigation-menu-item relative group"
                    onMouseEnter={() => {
                      menu?.open();
                    }}
                    onMouseLeave={() => {
                      menu?.close();
                    }}
                  >
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger
                          onClick={(e) => {
                            e.preventDefault();
                            menu?.toggle();
                          }}
                          onMouseEnter={() => menu?.blockClose()}
                          onMouseLeave={() => menu?.unblockClose()}
                          className={cn(
                            "cursor-pointer select-none transition-all",
                            menu?.isOpen && "bg-accent text-accent-foreground",
                            "after:absolute after:inset-0 after:content-[''] hover:after:bg-accent/10"
                          )}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        {menu?.isOpen && (
                          <NavigationMenuContent
                            onMouseEnter={() => menu?.blockClose()}
                            onMouseLeave={() => menu?.unblockClose()}
                            className="animate-in fade-in slide-in-from-top-5 duration-200"
                          >
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                              {item.children.map((child) => (
                                <ListItem
                                  key={child.label}
                                  title={child.label}
                                  href={child.href}
                                  external={child.external}
                                  onClick={() => menu?.immediateClose()}
                                />
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        )}
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center">
          <Link 
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Demander une démo
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
