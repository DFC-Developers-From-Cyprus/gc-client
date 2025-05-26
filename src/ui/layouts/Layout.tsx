import { ReactNode } from 'react';

import { Header } from '../components/Header/Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-card-bg font-body text-text">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-bg-footer text-hint text-sm p-4 text-center">
      © {new Date().getFullYear()} My Company
    </footer>
  );
}
