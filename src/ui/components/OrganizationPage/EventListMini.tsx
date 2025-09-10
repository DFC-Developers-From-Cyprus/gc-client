import { EventCardSearch } from '../EventCard/EventCardSearch';

import { EventItem } from '@/data/mockEvents';

interface EventsListMiniProps {
  events: EventItem[];
}

export function EventsListMini({ events }: EventsListMiniProps) {
  return (
    <div className="space-y-4">
      {events.map((ev) => (
        <EventCardSearch
          key={ev.id}
          imageSrc={ev.imageSrc}
          title={ev.title}
          description={ev.description}
          alt={ev.title}
        />
      ))}
    </div>
  );
}
