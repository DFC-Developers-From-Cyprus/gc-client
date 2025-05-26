import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export interface EventCardFullProps {
  imageSrc: string;
  title: string;
  description: string;
  alt?: string;
}

export function EventCardFull({ imageSrc, title, description, alt = title }: EventCardFullProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm">
      <AspectRatio.Root ratio={1} className="w-full rounded-md overflow-hidden bg-card-bg">
        <img src={imageSrc} alt={alt} className="object-cover w-full h-full" />
      </AspectRatio.Root>

      <div className="mt-4">
        <h3 className="heading-3 text-text mb-2">{title}</h3>
        <p className="body-2 text-light">{description}</p>
      </div>
    </div>
  );
}
