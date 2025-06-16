import { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import { Icon } from '@iconify/react';

import { MapView } from '@/features/map/MapView';

export function HomePage() {
  const [search, setSearch] = useState('');
  const handleClear = () => setSearch('');

  return (
    <div className="flex flex-col h-screen">
      {/* Search input */}
      <div className="p-4">
        <Form.Root onSubmit={(e) => e.preventDefault()}>
          <Form.Field name="search">
            <Form.Control asChild>
              <div className="relative border border-gray-200 rounded-lg h-[58px]">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="w-full border border-card-bg rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-active h-[58px]"
                />
                {search && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="absolute inset-y-0 right-3 flex items-center text-icons"
                  >
                    <Icon icon="mdi:close" width={16} height={16} />
                  </button>
                )}
              </div>
            </Form.Control>
          </Form.Field>
        </Form.Root>
      </div>
      {/* Map */}
      <div className="flex-1">
        <MapView />
      </div>
    </div>
  );
}
