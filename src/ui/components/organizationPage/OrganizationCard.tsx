export interface OrganizationCardProps {
  username: string;
  email: string;
  description: string;
  imageSrc: string;
}

export function OrganizationCard({
  username,
  email,
  description,
  imageSrc,
}: OrganizationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-md flex flex-col space-y-4">
      {/* Картинка */}
      <div className="w-full h-40 bg-card-bg rounded overflow-hidden">
        <img src={imageSrc} alt="organization picture" className="object-cover w-full h-full" />
      </div>

      {/* Текст описания */}
      <p className="body-2 text-light">{username}</p>
      <p className="body-2 text-light">{description}</p>
      <p className="body-2 text-light">{email}</p>
    </div>
  );
}
