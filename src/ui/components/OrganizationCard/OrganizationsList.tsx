import { OrganizationCardCatalog } from './OrganizationCardCatalog';

export interface OrganizationItem {
  uuid: string;
  username: string;
  email: string;
}

interface OrganizationsListProps {
  orgs: OrganizationItem[];
}

export function OrganizationsList({ orgs }: OrganizationsListProps) {
  return (
    <div className="w-full space-y-4">
      {orgs.map((o) => (
        <OrganizationCardCatalog key={o.uuid} uuid={o.uuid} username={o.username} email={o.email} />
      ))}
    </div>
  );
}
