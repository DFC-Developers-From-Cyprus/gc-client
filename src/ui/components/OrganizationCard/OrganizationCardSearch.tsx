import { Icon } from '@iconify/react';

export interface EventCardSearchProps {
  imageSrc: string;
  title: string;
  description: string;
  alt?: string;
}

export function EventCardSearch({
  imageSrc,
  title,
  description,
  alt = title,
}: EventCardSearchProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm flex items-start space-x-4">
      {/* небольшой квадрат изображения */}
      <div className="w-21 h-21 rounded bg-card-bg overflow-hidden flex-shrink-0">
        <img src={imageSrc} alt={alt} className="object-cover w-full h-full" />
      </div>

      {/* текстовая часть */}
      <div className="flex-1 flex justify-between">
        <div>
          <h4 className="heading-4 text-text">{title}</h4>
          <p className="body-2 text-light mt-1">{description}</p>
        </div>
        <div className="self-end">
          <Icon icon="mdi:chevron-right" width={20} height={20} className="text-text" />
        </div>
      </div>
    </div>
  );
}
