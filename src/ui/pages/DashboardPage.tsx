import { EventsList } from '../components/EventCard/EventsList';

import { mockEvents } from '@/data/mockEvents';

export function DashboardPage() {
  return (
    <div className="flex flex-col p-4">
      <EventsList events={mockEvents} />
    </div>
  );
}
