'use client'

import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
