'use client';

import { useState, useEffect } from 'react';
import { useDelayedHover } from './useDelayedHover';

export interface NavigationItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

export function useNavigationMenu(items: NavigationItem[]) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleSelect = (href: string) => {
    setActiveItem(href);
  };

  // Créer les hooks pour chaque menu une seule fois
  const menuStates = items.reduce((acc, item) => {
    if (item.children) {
      acc[item.label] = useDelayedHover();
    }
    return acc;
  }, {} as { [key: string]: ReturnType<typeof useDelayedHover> });

  // Gestionnaire de clic extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navigation-menu-item')) {
        Object.values(menuStates).forEach((menu) => {
          menu.immediateClose();
        });
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuStates]);

  return {
    activeItem,
    handleSelect,
    getMenuState: (label: string) => menuStates[label],
  };
}
