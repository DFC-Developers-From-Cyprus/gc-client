import { EventCardCatalog } from './EventCardCatalog';

export interface EventItem {
  id: string;
  title: string;
  text: string;
  description: string;
  imageSrc: string;
  passed: boolean;
  organisationId: string;
}

interface EventsListProps {
  events: EventItem[];
}

export function EventsList({ events }: EventsListProps) {
  return (
    <div className="space-y-4 mb-[-100px]">
      {events.map((e) => (
        <EventCardCatalog
          key={e.id}
          id={e.id}
          imageSrc={e.imageSrc}
          title={e.title}
          organisation={e.organisationId}
          description={e.description}
        />
      ))}
    </div>
  );
}
