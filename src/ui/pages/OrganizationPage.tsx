import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { OrganizationCard } from '../components/organizationPage/OrganizationCard';
// import { EventsListMini } from '../components/organizationPage/EventListMini';
import { Button } from '../components/Button/Button';

import { getOrganizationById } from '@/api/organizations';

interface Organization {
  uuid: string;
  username: string;
  email: string;
}

export function OrganizationPage() {
  const { uuid } = useParams<{ uuid: string }>();
  const navigate = useNavigate();

  const [organization, setOrganization] = useState<Organization | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uuid) return;

    const fetchData = async () => {
      try {
        const org = await getOrganizationById(uuid);
        setOrganization(org);
      } catch (err) {
        console.error('Error loading event or organization', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [uuid]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!organization) {
    return (
      <div className="p-4 text-center">
        <h2 className="heading-2">Organisation not found</h2>
        <Button
          states={[{ label: 'Back' }, { label: 'Back' }]}
          initialIndex={0}
          onClick={() => navigate(-1)}
          className="mt-4"
        />
      </div>
    );
  }

  // Берём все события, привязанные к этой организации
  // const eventsForOrg = mockEvents.filter((e) => e.organisationId === id);

  return (
    <div className="flex flex-col p-4 space-y-6">
      {/* Заголовок страницы */}
      <h1 className="heading-2">{organization.username}</h1>

      {/* Карточка организации */}
      <OrganizationCard
        username={organization.username}
        email={organization.email}
        description={`Description for ${organization.username}`}
        imageSrc={'/assets/react.svg'}
      />

      {/* Кнопки «Join» и «Back» */}
      <div className="flex space-x-4">
        <Button
          states={[
            { label: 'Back' },
            { label: 'Going back...' },
            { label: 'Backed' },
            { label: 'Back', textClass: 'text-link' },
          ]}
          initialIndex={3}
          transitionMap={{ 3: 1 }}
          className="flex-1"
          onClick={() => navigate(-1)}
        />
        <Button
          states={[{ label: 'Join' }, { label: 'Joining...' }]}
          initialIndex={0}
          transitionMap={{ 0: 0 }}
          className="flex-1"
          onClick={() => alert(`Join ${organization.username}`)}
        />
      </div>

      {/* Список событий организации */}
      <h2 className="heading-3">Events</h2>
      {/*<EventsListMini events={eventsForOrg} />*/}
    </div>
  );
}
