import { ReactNode } from 'react';

import { Header } from '../components/Header/Header';
import footerImage from '../../../public/assets/images/Footer.svg';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-card-bg font-body text-text">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 z-[1]">{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return <img src={footerImage} alt="Logo" />;
}
