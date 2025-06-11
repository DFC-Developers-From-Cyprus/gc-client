// src/ui/components/Button/Button.tsx
import React, { ButtonHTMLAttributes, useState } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

// Конфиг для одного состояния кнопки
interface StateConfig {
  label: string;
  icon?: string;
  /** Дополнительный класс для цвета текста */
  textClass?: string;
}

// Props базового компонента Button
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Масcив состояний: минимум 2, максимум 4 */
  states: StateConfig[];
  /** Индекс начального состояния (по умолчанию 0) */
  initialIndex?: number;
  /** Пользовательская карта переходов: {текущийIndex: следующийIndex} */
  transitionMap?: Record<number, number>;
  /** Дополнительные CSS-классы */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  states,
  initialIndex = 0,
  transitionMap,
  className,
  onClick,
  ...rest
}) => {
  const [index, setIndex] = useState<number>(initialIndex);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = transitionMap?.[index] ?? (index + 1) % states.length;
    setIndex(next);
    onClick?.(e);
  };

  const current = states[index];

  // фоновые классы
  const bgClasses = clsx(
    index === 0 && 'bg-button hover:bg-button/80',
    index === 1 && 'bg-active hover:bg-active/80',
    index === 2 && 'bg-hint',
    index === 3 && 'bg-transparent',
  );

  // класс цвета текста из stateConfig или дефолт белый
  const textColorClass = current.textClass ?? 'text-white';

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={clsx(
        'body-3 rounded-md px-4 py-2 flex items-center justify-center space-x-2',
        bgClasses,
        textColorClass,
        className,
      )}
    >
      {current.icon && <Icon icon={current.icon} width={20} height={20} />}
      <span>{current.label}</span>
    </button>
  );
};
