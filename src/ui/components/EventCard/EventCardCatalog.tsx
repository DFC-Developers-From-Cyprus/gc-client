import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export interface EventCardCatalogProps {
  uuid: string;
  imageSrc: string;
  title: string;
  organisation: string;
  description: string;
  alt?: string;
}

export function EventCardCatalog({
  uuid,
  imageSrc,
  title,
  organisation,
  description,
  alt = title,
}: EventCardCatalogProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full flex items-start space-x-4">
      {/* картинка */}
      <div className="w-40 h-28 rounded bg-card-bg overflow-hidden flex-shrink-0">
        <img src={imageSrc} alt={alt} className="object-cover w-full h-full" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="heading-4 text-text mb-1">{title}</h4>
          <p className="body-3 text-text-light">{organisation}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="body-2 text-light">{description}</p>
          <button
            aria-label="View details"
            onClick={() => navigate(`/dashboard/event/${id}`)}
            className="text-text self-end p-1 hover:bg-card-bg rounded"
          >
            <Icon icon="mdi:chevron-right" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
