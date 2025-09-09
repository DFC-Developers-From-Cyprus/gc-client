import { EventCardCatalog } from './EventCardCatalog';

export interface EventItem {
  uuid: string;
  title: string;
  text: string;
  description: string;
  imageSrc: string;
  passed: boolean;
  username: string;
}

interface EventsListProps {
  events: EventItem[];
}

export function EventsList({ events }: EventsListProps) {
  return (
    <div className="w-full space-y-4">
      {events.map((e) => (
        <EventCardCatalog
          key={e.uuid}
          uuid={e.uuid}
          imageSrc={e.imageSrc}
          title={e.title}
          organisation={e.username}
          description={e.description}
        />
      ))}
    </div>
  );
}
