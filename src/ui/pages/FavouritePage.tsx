import { useEffect, useState } from 'react';

import { OrganizationsList } from '@/ui/components/OrganizationCard/OrganizationsList';
import { fetchOrganizations } from '@/api/organizations';

export function FavouritePage() {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchOrganizations();
        setOrgs(data);
      } catch (err) {
        console.error('Failed to fetch organizations', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!orgs) return <div className="p-4">Organizations not found</div>;

  return (
    <div className="flex flex-col p-4">
      <OrganizationsList orgs={orgs} />
    </div>
  );
}
