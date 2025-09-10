import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Button } from '../components/Button/Button';

import { getPollutedAreaById, PollutedAreaPayload } from '@/api/polluted-areas';

export function LocationInfoPage() {
  const { uuid } = useParams<{ uuid: string }>();
  const navigate = useNavigate();

  const [area, setArea] = useState<PollutedAreaPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uuid) return;

    const fetchData = async () => {
      try {
        const area = await getPollutedAreaById(uuid);
        console.log(area);
        setArea(area);
      } catch (err) {
        console.error('Error loading area', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [uuid]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!area) {
    return (
      <div className="p-4 text-center">
        <h2 className="heading-2">Polluted area not found</h2>
        <Button
          states={[{ label: 'Back' }, { label: 'Back' }]}
          initialIndex={0}
          onClick={() => navigate(-1)}
          className="mt-4"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 space-y-6">
      <p>{area.location}</p>
    </div>
  );
}
