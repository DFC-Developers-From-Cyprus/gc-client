import { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

interface ChoiceComponentProps {
  title: string;
}

type ChoiceValue = 'low' | 'middle' | 'high';

export function ChoiceComponent({ title }: ChoiceComponentProps) {
  const [value, setValue] = useState<ChoiceValue>('low');

  return (
    <div className="space-y-2">
      {/* Заголовок */}
      <p className="body-3 mb-1">{title}</p>

      {/* Корневой контейнер Radix RadioGroup */}
      <RadioGroup.Root
        className="flex items-center space-x-6"
        value={value}
        onValueChange={(val: ChoiceValue) => setValue(val)}
        aria-label={title}
      >
        {(['low', 'middle', 'high'] as ChoiceValue[]).map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroup.Item
              id={`radio-${option}`}
              value={option}
              className="w-4 h-4 rounded-full bg-text-light border-1 border-active flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-active"
            >
              <RadioGroup.Indicator className="w-3 h-3 bg-active rounded-full" />
            </RadioGroup.Item>
            <label htmlFor={`radio-${option}`} className="body-1 text-text cursor-pointer">
              {option === 'low' ? 'Low' : option === 'middle' ? 'Middle' : 'High'}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
