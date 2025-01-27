export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationChild[];
}

export interface NavigationChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavigationProps {
  items: NavigationItem[];
}
