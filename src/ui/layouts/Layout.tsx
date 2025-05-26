// src/ui/layouts/Layout.tsx
import { ReactNode, useState } from 'react';
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  // Определяем, нужно ли показывать Header (не показываем на StartPage с путём "/")
  const showHeader = pathname !== '/';

  return (
    <div className="min-h-screen flex flex-col bg-card-bg font-body text-text">
      {/* Header */}
      {showHeader && (
        <header className="flex items-center justify-between p-4 bg-bg-primary text-white">
          <h1 className="text-xl font-heading">My App</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="header-links hover:text-light">
              Home
            </a>
            <a href="#" className="header-links hover:text-light">
              About
            </a>
            <a href="#" className="header-links hover:text-light">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <Icon icon="mdi:menu" width={24} height={24} />
          </button>
        </header>
      )}

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
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

      {/* Footer всегда отображается */}
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
