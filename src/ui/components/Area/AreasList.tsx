import { AreaCardCatalog } from './AreaCardCatalog';

import { PollutedArea } from '@/api/polluted-areas';

interface AreasListProps {
  areas: PollutedArea[];
}

export function AreasList({ areas }: AreasListProps) {
  if (!areas?.length) {
    return <div className="text-center text-gray-400 pt-4">No polluted areas found</div>;
  }
  return (
    <div className="w-full space-y-4 pt-4">
      {areas.map((area) => (
        <AreaCardCatalog
          key={area.uuid}
          uuid={area.uuid}
          description={area.description}
          location={area.location}
        />
      ))}
    </div>
  );
}
