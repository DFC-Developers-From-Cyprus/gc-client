import { Icon } from '@iconify/react';

export interface EventCardCatalogProps {
  imageSrc: string;
  title: string;
  organisation: string;
  description: string;
  alt?: string;
}

export function EventCardCatalog({
  imageSrc,
  title,
  organisation,
  description,
  alt = title,
}: EventCardCatalogProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-md flex items-start space-x-4">
      {/* Прямоугольное изображение фиксированного размера */}
      <div className="w-41 h-29 rounded bg-card-bg overflow-hidden flex-shrink-0">
        <img src={imageSrc} alt={alt} className="object-cover w-full h-full" />
      </div>

      {/* Содержимое карточки */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="heading-4 text-text mb-1">{title}</h4>
          <p className="body-3 text-text-light">{organisation}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="body-2 text-light">{description}</p>
          <Icon icon="mdi:chevron-right" width={20} height={20} className="text-text" />
        </div>
      </div>
    </div>
  );
}
