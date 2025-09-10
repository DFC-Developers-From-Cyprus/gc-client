import { EventCardCatalog } from './EventCardCatalog';

export interface EventItem {
  uuid: string;
  location: string;
  description: string;
  project_uuid: string;
  type_of_pollution: string;
  pollution_level: number;
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
          location={e.location}
          title={e.title}
          organisation={e.organisation}
          description={e.description}
        />
      ))}
    </div>
  );
}
