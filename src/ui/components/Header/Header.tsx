import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

// Навигационные пункты
const MAIN_NAV = [
  { to: '/', label: 'Home', icon: 'mdi:home' },
  { to: '/organisations', label: 'Organisations', icon: 'mage:heart-fill' },
  { to: '/notifications', label: 'Notifications', icon: 'mage:notification-bell-fill' },
  { to: '/profile', label: 'Profile', icon: 'mdi:account' },
];

const MAIN_NAV_PROFILE = [
  { to: '/organisations', label: 'Organisations', icon: 'mage:heart-fill' },
  { to: '/notifications', label: 'Notifications', icon: 'mage:notification-bell-fill' },
  { to: '/settings', label: 'Settings', icon: 'mage:settings-fill' },
  { to: '/', label: 'Home', icon: 'mdi:home' },
];

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Функция отрисовки пункта меню с иконкой и подписью
  function renderNavItem(item: (typeof MAIN_NAV)[number]) {
    return (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          clsx('flex flex-col items-center space-y-1', isActive ? 'text-active' : 'text-icons')
        }
      >
        <Icon icon={item.icon} width={16} height={16} />
        <span className="body-2">{item.label}</span>
      </NavLink>
    );
  }

  // 1) Стартовая страница "/": показываем все пункты с подписями по центру
  if (pathname === '/') {
    return (
      <header className="bg-white p-4 shadow flex justify-around h-[100px]">
        {MAIN_NAV.map(renderNavItem)}
      </header>
    );
  }

  // 2) Главная страница "/home": слева фильтры (иконка+текст), справа остальные пункты с подписями
  if (pathname === '/home') {
    return (
      <header className="bg-white p-4 shadow flex items-center justify-between h-[100px]">
        {/* Левая кнопка «Filters» */}
        <button className="flex flex-col items-center space-y-1 text-icons p-2">
          <Icon icon="mage:filter-fill" width={24} height={24} />
        </button>
        <nav className="flex space-x-6">{MAIN_NAV.slice(1).map(renderNavItem)}</nav>
      </header>
    );
  }

  // 3) Страница профиля "/profile": слева аватар, справа остальные пункты с подписями (организации, нотификейшн, настройки, Home)
  if (pathname === '/profile') {
    return (
      <header className="bg-white p-4 shadow flex items-center justify-between h-[100px]">
        <div className="w-[64px] h-[67px] bg-gray-400"></div>
        <div className="flex flex-col">
          <span>John Smith</span>
          <nav className="flex space-x-6">{MAIN_NAV_PROFILE.map(renderNavItem)}</nav>
        </div>
      </header>
    );
  }

  // 4) Страница профиля "/settings": слева большой аватар, справа остальные пункты с подписями (организации, нотификейшн, настройки, Home)
  if (pathname === '/settings') {
    return (
      <header className="bg-white p-4 shadow flex items-start justify-between h-[116px]">
        <div className="w-[86px] h-[84px] bg-gray-400"></div>
        <div className="flex flex-col">
          <span>John Smith</span>
          <nav className="flex space-x-6">{MAIN_NAV_PROFILE.map(renderNavItem)}</nav>
        </div>
      </header>
    );
  }

  // 5) На всех остальных путях: слева «Home» (иконка+текст), справа остальные пункты
  return (
    <header className="bg-white p-4 shadow flex items-center justify-between h-[100px]">
      <button
        onClick={() => navigate('/home')}
        className="flex flex-col items-center space-y-1 text-icons p-2"
      >
        <Icon icon="mdi:home" width={16} height={16} />
        <span className="body-2">Home</span>
      </button>
      <nav className="flex space-x-6">{MAIN_NAV.slice(1).map(renderNavItem)}</nav>
    </header>
  );
}
