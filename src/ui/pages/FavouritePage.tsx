import { EventsList } from '../components/EventCard/EventsList';

import { mockEvents } from '@/data/mockEvents';
import { useEffect, useState } from 'react';
import { fetchOrganizations } from '@/api/organizations';

export function FavouritePage() {
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchOrganizations();
        console.log(data);
        setOrgs(data);
      } catch (err) {
        console.error('Failed to fetch organizations', err);
      }
    };
    load();
  }, [])

  return (
    <div className="flex flex-col p-4">
      <EventsList events={orgs} />
    </div>
  );
}
