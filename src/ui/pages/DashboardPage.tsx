import { useEffect, useState } from 'react';

import { EventsList } from '../components/EventCard/EventsList';

import { fetchAreas } from '@/api/areas.ts';

export function DashboardPage() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchAreas();
        console.log(data.results);
        setAreas(data.results);
      } catch (err) {
        console.error('Failed to fetch areas', err);
      }
    };
    load();
  }, []);
  return (
    <div className="flex flex-col p-4">
      <EventsList events={areas} />
    </div>
  );
}
