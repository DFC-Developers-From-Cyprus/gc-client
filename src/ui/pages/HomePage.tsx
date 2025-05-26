import { Icon } from '@iconify/react';

export function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center h-full space-y-6 p-4">
      {/* Hero Heading */}
      <h2 className="display-T text-active text-center">Добро пожаловать в My App</h2>

      {/* Subtitle */}
      <p className="body-1 text-center text-light max-w-lg">
        Это базовая страница HomePage. Здесь вы можете разместить краткое описание приложения,
        основные функции или призыв к действию.
      </p>

      {/* Primary Action */}
      <button className="bg-button hover:bg-button/80 btn-text text-white rounded px-6 py-3 flex items-center space-x-2">
        <Icon icon="mdi:rocket-launch" width={20} height={20} />
        <span>Начать</span>
      </button>
    </section>
  );
}
