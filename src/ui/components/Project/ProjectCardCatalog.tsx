import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface ProjectCardProps {
  uuid: string;
  title: string;
  description: string;
  status: string;
}

export function ProjectCardCatalog({ uuid, title, description, status }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full flex items-start space-x-4">
      {/* картинка */}
      <div className="w-40 h-28 rounded bg-card-bg overflow-hidden flex-shrink-0">
        <Icon icon="mdi:briefcase-outline" width={40} height={40} />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-gray-500">{status}</p>
      </div>

      <div className="flex justify-end mt-4">
        <button
          aria-label="View details"
          onClick={() => navigate(`/project/${uuid}`)}
          className="text-text self-end p-1 hover:bg-card-bg rounded"
        >
          <Icon icon="mdi:chevron-right" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
