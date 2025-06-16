export interface OrganisationCardProps {
  name: string;
  text: string;
  description: string;
  imageSrc: string;
  alt?: string;
}

export function OrganisationCard({
  name,
  text,
  description,
  imageSrc,
  alt = name,
}: OrganisationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-md flex flex-col space-y-4">
      {/* Картинка */}
      <div className="w-full h-40 bg-card-bg rounded overflow-hidden">
        <img src={imageSrc} alt={alt} className="object-cover w-full h-full" />
      </div>

      {/* Текст описания */}
      <p className="body-2 text-light">{text}</p>
      <p className="body-2 text-light">{description}</p>
    </div>
  );
}
