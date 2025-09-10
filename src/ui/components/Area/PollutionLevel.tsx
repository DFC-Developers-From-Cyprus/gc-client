import { Icon } from '@iconify/react';

interface LevelProps {
  level: number;
}

export function PollutionLevel({ level }: LevelProps) {
  return (
    <div className="flex flex-col items-start space-x-2">
      <p className="mb-2">Level</p>
      <div className="flex space-x-1">
        {[1, 2, 3].map((i) =>
          i <= level ? (
            <Icon key={i} icon="mdi:water" className="w-8 h-8 text-[#4F6A35]" />
          ) : (
            <Icon
              key={i}
              icon="mdi:water-outline"
              className="w-8 h-8 text-[#4F6A35] bg-white rounded-full"
            />
          ),
        )}
      </div>
    </div>
  );
}