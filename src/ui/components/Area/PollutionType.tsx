import waterIcon from '@/assets/icons/types/water.svg';
import garbageIcon from '@/assets/icons/types/garbage.svg';
import soilIcon from '@/assets/icons/types/soil.svg';
import otherIcon from '@/assets/icons/types/other.svg';

interface PollutionTypeProps {
  types: string;
}

const typeIcons: Record<string, string> = {
  water: waterIcon,
  garbage: garbageIcon,
  soil: soilIcon,
  other: otherIcon,
};

export function PollutionType({ types }: PollutionTypeProps) {
  if (!types) {
    return <p className="text-sm">No types</p>;
  }
  const parsedTypes = types.split(',').map((t) => t.trim());
  return (
    <div className="flex flex-col items-start space-x-2">
      <p className="mb-2">Type</p>
      <div className="flex space-x-1">
        {parsedTypes.map((type) => (
          <div
            key={type}
            className="w-8 h-8 flex items-center justify-center fullbg-white"
          >
            <img src={typeIcons[type] || otherIcon} alt={type} className="w-8 h-8 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}