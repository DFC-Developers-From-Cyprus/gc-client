import { useEffect, useState } from 'react';

import { fetchAreas, PollutedArea } from '@/api/polluted-areas';
import { AreasList } from '@/ui/components/Area/AreasList';

export function DashboardPage() {
  const [areas, setAreas] = useState<PollutedArea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAreas = async () => {
      try {
        const data = await fetchAreas();
        setAreas(data.results);
      } catch (err) {
        console.error('Failed to fetch areas', err);
      } finally {
        setLoading(false);
      }
    };
    loadAreas();
  }, []);

  if (loading) return <div className="flex flex-col pt-4 p-4">Loading...</div>;
  return (
    <div className="flex flex-col p-4">
      <AreasList areas={areas} />
    </div>
  );
}
