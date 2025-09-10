import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Icon } from '@iconify/react';

interface ProjectCardFullProps {
  title: string;
  description: string;
  status: string;
  location: string;
}

export function ProjectCardFull({ title, description, status, location }: ProjectCardFullProps) {
  return (
    <div className="space-y-4">
      {/* Статус проекта */}
      <span className="inline-block px-3 py-1 bg-bg-footer text-sm rounded-full subtitle-1 text-center w-fit">
        {status}
      </span>

      {/* Основная карточка */}
      <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm mx-auto">
        <AspectRatio.Root ratio={1} className="w-full rounded-md overflow-hidden bg-card-bg">
          <Icon icon="mdi:briefcase-outline" width={40} height={40} />
        </AspectRatio.Root>

        <div className="mt-4">
          <h3 className="heading-3 text-text mb-2">{title}</h3>
          <p className="body-2 text-light mb-2">{description}</p>
          <p className="text-sm text-gray-500">Location: {location}</p>
          <p className="text-sm text-gray-500">Status: {status}</p>
        </div>
      </div>
    </div>
  );
}