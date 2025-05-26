import { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Icon } from '@iconify/react';

interface ChoicePollComponentProps {
  title: string;
  options?: string[];
}

export function ChoicePollComponent({
  title,
  options = ['Soil', 'Water', 'Garbage', 'Other'],
}: ChoicePollComponentProps) {
  const [value, setValue] = useState<string>('');
  const [otherText, setOtherText] = useState('');

  const handleValueChange = (val: string) => {
    setValue(val);
    if (val !== 'Other') setOtherText('');
  };

  return (
    <div className="space-y-4">
      <p className="body-3 mb-1">{title}</p>
      <RadioGroup.Root
        className="flex flex-col space-y-2"
        value={value}
        onValueChange={handleValueChange}
        aria-label={title}
      >
        {options.map((opt) => (
          <div key={opt} className="flex items-center space-x-2 cursor-pointer">
            <RadioGroup.Item
              value={opt}
              id={`poll-${opt.toLowerCase()}`}
              className={`
                w-6 h-6 flex items-center justify-center 
                rounded-sm border-2 border-card-bg 
                focus:outline-none focus:ring-2 focus:ring-active
                data-[state=checked]:bg-active 
                data-[state=checked]:border-active
              `}
            >
              <RadioGroup.Indicator>
                <Icon icon="mdi:check" width={16} height={16} className="text-white" />
              </RadioGroup.Indicator>
            </RadioGroup.Item>
            <label htmlFor={`poll-${opt.toLowerCase()}`} className="body-1 text-text select-none">
              {opt}
            </label>
          </div>
        ))}
      </RadioGroup.Root>

      {value === 'Other' && (
        <input
          type="text"
          placeholder="Please specify"
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
          className="w-full h-[27px] border border-card-bg rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-active"
        />
      )}
    </div>
  );
}
