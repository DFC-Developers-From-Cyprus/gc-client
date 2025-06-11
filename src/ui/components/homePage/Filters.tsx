import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import * as Slider from '@radix-ui/react-slider';
import { Icon } from '@iconify/react';

export function Filters() {
  const [range, setRange] = useState<[number, number]>([0, 100]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="text-icons p-2">
          <Icon icon="mage:filter-fill" width={24} height={24} />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="start"
          className="bg-white rounded-lg shadow p-4 w-[230px] h-[200px]"
        >
          <div className="flex justify-between items-center mb-2 mt-[40px]">
            <span className="body-1">Location</span>
            <span className="body-1">
              {range[0]} - {range[1]} km
            </span>
          </div>

          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={range}
            min={0}
            max={100}
            step={1}
            onValueChange={setRange}
            aria-label="Location range"
          >
            <Slider.Track className="bg-gray-200 relative grow rounded-full h-1">
              <Slider.Range className="absolute bg-active rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-4 h-4 bg-active rounded-full focus:outline-none focus:ring-2 focus:ring-active" />
            <Slider.Thumb className="block w-4 h-4 bg-active rounded-full focus:outline-none focus:ring-2 focus:ring-active" />
          </Slider.Root>

          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
