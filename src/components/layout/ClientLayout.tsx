'use client';

import { type ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
