import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { EventCardFull } from '../components/EventCard/EventCardFull';
import { Button } from '../components/Button/Button';

import { mockEvents } from '@/data/mockEvents';

export function EventPage() {
  const navigate = useNavigate();
  const event = mockEvents.find((e) => e.uuid === uuid);
  if (!event) return <div className="p-4">Event not found</div>;

  // const org = mockOrganisations.find((o) => o.id === event.organisationId)!;

  return (
    <div className="flex flex-col p-4 space-y-6">
      <h2 className="heading-2">{organization.username}</h2>

      <EventCardFull
        imageSrc={event.imageSrc}
        // title={event.title}
        // text={event.text}
        organisationId={organization.uuid}
        organisationName={organization.username}
        // description={event.description}
        // alt={event.title}
      />

      {/* Кнопки внизу */}
      <div className="flex space-x-4">
        {/* Back (состояние 3) */}
        <Button
          states={[
            { label: 'Back' },
            { label: 'Going back...' },
            { label: 'Backed' },
            { label: 'Back', textClass: 'text-link' },
          ]}
          initialIndex={3}
          transitionMap={{ 3: 3 }}
          className="flex-1"
          onClick={() => navigate(-1)}
        />
        {/* Join (состояние 0) */}
        <Button
          states={[
            { label: 'Join' },
            { label: 'Joining...' },
            { label: 'Joined' },
            { label: 'Join', textClass: 'text-link' },
          ]}
          initialIndex={0}
          transitionMap={{ 0: 0 }}
          className="flex-1"
          onClick={() => alert('Join clicked')}
        />
      </div>
    </div>
  );
}
