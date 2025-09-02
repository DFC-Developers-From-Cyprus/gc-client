// src/ui/layouts/Layout.tsx
import React, { ReactNode, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import footerImage from '../../../public/assets/images/Footer.svg';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Пути, на которых футер НЕ отображается
  const hideFooterOn = ['/home', '/dashboard/event/', '/start', '/register', '/reset'];
  const showFooter = !hideFooterOn.some((p) => pathname.startsWith(p));

  return (
    <div className="min-h-screen flex flex-col bg-white font-body text-text">
      {/* Header всегда отображается */}
      <Header />

      {/* Mobile nav drawer */}
      {isMenuOpen && (
        <aside className="md:hidden bg-bg-footer text-text p-4 space-y-3">
          <a href="#" className="block header-links hover:text-active">
            Home
          </a>
          <a href="#" className="block header-links hover:text-active">
            About
          </a>
          <a href="#" className="block header-links hover:text-active">
            Contact
          </a>
        </aside>
      )}

      {/* Main content */}
      <main className="flex-1 w-full z-[1] lg:container lg:mx-auto">{children}</main>

      {/* Footer условно */}
      {showFooter && (
        <footer>
          <img src={footerImage} alt="Logo" className="w-full" />
        </footer>
      )}
    </div>
  );
}
