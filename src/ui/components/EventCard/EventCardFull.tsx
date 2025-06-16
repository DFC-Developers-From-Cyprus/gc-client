import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { useNavigate } from 'react-router-dom';

export interface EventCardFullProps {
  imageSrc: string;
  title: string;
  text: string;
  description: string;
  organisationId: string;
  organisationName: string;
  alt?: string;
}

export function EventCardFull({
  imageSrc,
  title,
  text,
  description,
  organisationId,
  organisationName,
  alt = title,
}: EventCardFullProps) {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Пилл с текстом organisationName, навигация по organisationId */}
      <button
        type="button"
        onClick={() => navigate(`/organisations/${organisationId}`)}
        className="w-[88px] bg-bg-footer rounded-full subtitle-1 text-center"
      >
        {organisationName}
      </button>

      {/* Остальная разметка карточки */}
      <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm mx-auto">
        <AspectRatio.Root ratio={1} className="w-full rounded-md overflow-hidden bg-card-bg">
          <img src={imageSrc} alt={alt} className="object-cover w-full h-full" />
        </AspectRatio.Root>

        <div className="mt-4">
          <h3 className="heading-3 text-text mb-2">{text}</h3>
          <p className="body-2 text-light">{description}</p>
        </div>
      </div>
    </div>
  );
}
