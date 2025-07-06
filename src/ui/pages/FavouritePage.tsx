import { EventsList } from '../components/EventCard/EventsList';

import { mockEvents } from '@/data/mockEvents';

export function FavouritePage() {
  return (
    <div className="flex flex-col p-4">
      <EventsList events={mockEvents} />
    </div>
  );
}
