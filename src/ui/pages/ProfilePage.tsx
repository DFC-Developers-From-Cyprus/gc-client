import { useState } from 'react';

import { Button } from '../components/Button/Button';
import { EventsList } from '../components/EventCard/EventsList';
import { mockEvents } from '../../data/mockEvents';

export function ProfilePage() {
  // 'inprogress' означает, что InProgress активна (index=1), Passed — неактивна (index=3)
  // 'passed'  — наоборот: Passed активна (index=1), InProgress — неактивна (index=3)
  const [selected, setSelected] = useState<'inprogress' | 'passed'>('inprogress');

  const filtered = mockEvents.filter((ev) => (selected === 'inprogress' ? !ev.passed : ev.passed));

  return (
    <div className="flex flex-col px-[19px] pt-4">
      <div className="flex space-x-[13px]">
        {/* In Progress */}
        <Button
          key={selected + '-in'}
          // если selected==='inprogress' — начальный индекс=1, иначе=3
          initialIndex={selected === 'inprogress' ? 1 : 3}
          states={[
            { label: 'One', icon: 'mdi:plus' },
            { label: 'In progress', icon: 'mdi:check' },
            { label: 'Three', icon: 'mdi:check' },
            { label: 'In progress', icon: 'mdi:...', textClass: 'text-link' },
          ]}
          // Только два перехода: 1→3 и 3→1
          transitionMap={{ 1: 3, 3: 1 }}
          className="w-[165px]"
          onClick={() => setSelected('inprogress')}
        />

        {/* Passed */}
        <Button
          key={selected + '-pa'}
          initialIndex={selected === 'passed' ? 1 : 3}
          states={[
            { label: 'One', icon: 'mdi:plus' },
            { label: 'Passed', icon: 'mdi:check' },
            { label: 'Three', icon: 'mdi:check' },
            { label: 'Passed', icon: 'mdi:...', textClass: 'text-link' },
          ]}
          transitionMap={{ 1: 3, 3: 1 }}
          className="w-[165px]"
          onClick={() => setSelected('passed')}
        />
      </div>
      <EventsList events={filtered} />
    </div>
  );
}
