'use client';

import { useDelayedHover } from './useDelayedHover';
import { useEffect } from 'react';

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
    getMenuState: (label: string) => menuStates[label],
  };
}
