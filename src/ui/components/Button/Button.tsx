// src/ui/components/Button/Button.tsx
import React, { ButtonHTMLAttributes, useState } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

// Возможные состояния кнопки
export type ButtonState = 'normal' | 'pressed' | 'done';

// Конфиг для одного состояния
interface StateConfig {
  label: string;
  icon?: string;
}

// Props базового компонента Button
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Конфигурация состояний: [нормальное, нажато], либо [normal, pressed, done] */
  states: [StateConfig, StateConfig] | [StateConfig, StateConfig, StateConfig];
  /** Дополнительные CSS-классы */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ states, className, onClick, ...rest }) => {
  const [index, setIndex] = useState(0);
  const max = states.length;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIndex((prev) => (prev + 1) % max);
    onClick?.(e);
  };

  const current = states[index];

  // Определяем фон и ховер в зависимости от состояния
  const bgClasses = clsx(
    index === 0 && 'bg-button hover:bg-button/80',
    index === 1 && 'bg-active hover:bg-active/80',
    index === 2 && 'bg-hint',
  );

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={clsx(
        'boby-3 text-white rounded-md px-4 py-2 flex items-center justify-center space-x-2',
        bgClasses,
        className,
      )}
    >
      {current.icon && <Icon icon={current.icon} width={20} height={20} />}
      <span>{current.label}</span>
    </button>
  );
};
