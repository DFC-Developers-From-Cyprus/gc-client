import { useEffect, useState } from 'react';

import { fetchAreas, PollutedArea } from '@/api/polluted-areas';
import { AreasList } from '@/ui/components/Area/AreasList';

export function DashboardPage() {
  const [areas, setAreas] = useState<PollutedArea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAreas = async () => {
      try {
        let url: string | null = '/api/env/polluted-areas/';
        let allResults: PollutedArea[] = [];

        while (url) {
          const data = await fetchAreas(url);
          allResults = [...allResults, ...data.results];
          url = data.next; // если есть следующая страница
        }

        setAreas(allResults);
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