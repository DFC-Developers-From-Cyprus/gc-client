// src/ui/components/Header/Header.tsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

// Навигационные пункты
const MAIN_NAV = [
  { to: '/', label: 'Home', icon: 'mdi:home' },
  { to: '/organisations', label: 'Organisations', icon: 'mdi:heart-outline' },
  { to: '/notifications', label: 'Notifications', icon: 'mdi:bell-outline' },
  { to: '/profile', label: 'Profile', icon: 'mdi:account' },
];

export function Header() {
  const { pathname } = useLocation();

  // 1) Стартовая страница "/": центрированный row из MAIN_NAV
  if (pathname === '/') {
    return (
      <header className="bg-white p-4 shadow flex justify-around">
        {MAIN_NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              clsx('flex flex-col items-center space-y-1', isActive ? 'text-active' : 'text-icons')
            }
          >
            <Icon icon={item.icon} width={24} height={24} />
            <span className="body-2">{item.label}</span>
          </NavLink>
        ))}
      </header>
    );
  }

  // 2) Все остальные страницы: слева иконка-меню, справа — остальные пункты
  return (
    <header className="bg-white p-4 shadow flex items-center justify-between">
      {/* Левая кнопка (тайпичный «гамбургер» / фильтры) */}
      <button className="text-icons p-2">
        <Icon icon="mdi:slider-horizontal" width={24} height={24} />
      </button>

      {/* Остальные пункты навигации без текста, только иконки */}
      <nav className="flex space-x-6">
        {MAIN_NAV.slice(1).map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => clsx('text-2xl', isActive ? 'text-active' : 'text-icons')}
          >
            <Icon icon={item.icon} width={24} height={24} />
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
