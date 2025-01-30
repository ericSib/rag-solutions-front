'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

const menuItems = [
  {
    label: "Accueil",
    path: "/",
  },
  {
    label: "À propos",
    submenu: [
      { label: "Qui sommes-nous", path: "/about" },
      { label: "Engagements RSE", path: "/about/rse" },
    ],
  },
  {
    label: "Nos solutions",
    submenu: [
      { label: "Pack Starter", path: "/solutions/starter" },
      { label: "Pack Business", path: "/solutions/business" },
      { label: "Pack Enterprise", path: "/solutions/enterprise" },
    ],
  },
  {
    label: "Cas d'usage",
    submenu: [
      { label: "Industrie", path: "/use-cases/industry" },
      { label: "Gestion immobilière", path: "/use-cases/real-estate" },
      { label: "Services professionnels", path: "/use-cases/professional-services" },
      { label: "Industrie musicale", path: "/use-cases/music-industry" },
      { label: "Service client", path: "/use-cases/service-client" },
    ],
  },
  {
    label: "Ressources",
    submenu: [
      { label: "Calculateur ROI", path: "/resources/roi-calculator" },
      { label: "Comment ça marche", path: "/resources/how-it-works" },
      { label: "Blog", path: "https://blog.ragsolutions.tech" },
    ],
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white border-b z-50">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1">
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {item.submenu.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          {subItem.path.startsWith('http') ? (
                            <a href={subItem.path} target="_blank" rel="noopener noreferrer">
                              <span className="w-full cursor-pointer">
                                {subItem.label}
                              </span>
                            </a>
                          ) : (
                            <Link href={subItem.path}>
                              <span className="w-full cursor-pointer">
                                {subItem.label}
                              </span>
                            </Link>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={item.path}>
                    <Button variant="ghost">
                      {item.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
            <Link href="/demo">
              <Button>Demander une démo</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      {item.submenu ? (
                        <div className="flex flex-col space-y-2">
                          <div className="font-semibold">{item.label}</div>
                          <div className="flex flex-col space-y-2 pl-4">
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.path}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-600 hover:text-gray-900"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          className="font-semibold"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Link href="/demo" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Demander une démo</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
