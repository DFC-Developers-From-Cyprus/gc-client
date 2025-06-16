import { EventCardCatalog } from './EventCardCatalog';

export interface EventItem {
  id: string;
  title: string;
  organisation: string;
  description: string;
  imageSrc: string;
  passed: boolean;
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
          organisation={e.organisation}
          description={e.description}
        />
      ))}
    </div>
  );
}
