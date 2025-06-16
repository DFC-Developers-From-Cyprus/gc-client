import { useParams, useNavigate } from 'react-router-dom';

import { OrganisationCard } from '../components/organisationPage/OrganisationCard';
import { EventsListMini } from '../components/organisationPage/EventListMini';
import { Button } from '../components/Button/Button';

import { mockOrganisations, mockEvents } from '@/data/mockEvents';

export function OrganisationPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Ищем организацию по id
  const org = mockOrganisations.find((o) => o.id === id);
  if (!org) {
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
  const eventsForOrg = mockEvents.filter((e) => e.organisationId === id);

  return (
    <div className="flex flex-col p-4 space-y-6">
      {/* Заголовок страницы */}
      <h1 className="heading-2">{org.name}</h1>

      {/* Карточка организации */}
      <OrganisationCard
        name={org.name}
        text={org.text}
        description={`Description for ${org.name}`}
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
          onClick={() => alert(`Join ${org.name}`)}
        />
      </div>

      {/* Список событий организации */}
      <h2 className="heading-3">Events</h2>
      <EventsListMini events={eventsForOrg} />
    </div>
  );
}
