import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export interface OrganizationCardCatalogProps {
  uuid: string;
  username: string;
  email: string;
}

export function OrganizationCardCatalog({ uuid, username, email }: OrganizationCardCatalogProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full flex items-start space-x-4">
      {/* картинка */}
      <div className="w-40 h-28 rounded bg-card-bg overflow-hidden flex-shrink-0">
        <img alt="Image here" className="object-cover w-full h-full" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="heading font-bold mb-1">{username}</h4>
          <p className="body-2 text-text-light">{email}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="body-2 text-light">Description</p>
          <button
            aria-label="View details"
            onClick={() => navigate(`/organization/${uuid}`)}
            className="text-text self-end p-1 hover:bg-card-bg rounded"
          >
            <Icon icon="mdi:chevron-right" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
