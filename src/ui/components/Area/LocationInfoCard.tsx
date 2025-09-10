import { Icon } from '@iconify/react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

import { PollutedArea } from '@/api/polluted-areas';
import { Button } from '@/ui/components/Button/Button';
import locationIcon from '@/assets/icons/report_form/location.svg';
import { PollutionLevel } from '@/ui/components/Area/PollutionLevel';
import { PollutionType } from '@/ui/components/Area/PollutionType';

interface LocationInfoCardProps {
  area: PollutedArea;
}

export function LocationInfoCard({ area }: LocationInfoCardProps) {
  console.log(area);
  return (
    <div className="flex flex-col px-5 pt-5 space-y-4 bg-[#E7EC72]">
      {/* Title */}
      <h3 className="font-bold text-lg">Title</h3>
      {/* Address */}
      <div className="flex flex-1 space-x-2">
        <img src={locationIcon} alt="Location" className="w-5 h-5 right-5" />
        <p className="text-lg font-light ">{area.location}</p>
      </div>

      <div className="bg-white rounded-md p-2">
        <AspectRatio.Root ratio={2/1} className="w-full rounded-md overflow-hidden bg-card-bg">
          <Icon icon="mdi:briefcase-outline" width={40} height={40} />
        </AspectRatio.Root>
      </div>

      {/* Pollution */}
      <div className="bg-white rounded-lg p-3 space-y-2 mt-6">
        <h4 className="text-sm font-bold ">Pollution</h4>
        <div className="flex justify-start gap-20 text-sm">
          <PollutionLevel level={area.pollution_level} />
          <PollutionType types={area.type_of_pollution} />
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg p-3 space-y-2 min-h-[120px]">
        <h4 className="text-sm font-bold ">Description</h4>
        <p className="text-gray-600 text-sm">{area.description}</p>
      </div>

      {/* Sensor Pollution*/}
      <div className="relative mt-6">
        {/* label */}
        <div className="absolute -top-6 -left-0 bg-[#EC9968] text-[#D9D9D9] text-xs px-3 pt-1 pb-2 z-0 rounded">
          Sensor
        </div>
        <div className="bg-white rounded-md p-3 space-y-2 z-10 relative">
          <h4 className="text-sm font-bold ">Pollution</h4>
          <div className="flex justify-between text-sm">
            <span>Level: {area.pollution_level}</span>
            <span>Type: {area.type_of_pollution || '—'}</span>
          </div>
        </div>
      </div>

      {/* Sensor Weather */}
      <div className="bg-white rounded-lg p-3 space-y-2">
        <h4 className="text-sm font-bold ">Weather</h4>
        <div className="flex justify-between text-sm">
          <span>Level: {area.pollution_level}</span>
          <span>Type: {area.type_of_pollution || '—'}</span>
        </div>
      </div>

      {/* Button CleanUp */}
      <div className="flex justify-end pt-4 py-5">
        <Button
          type="submit"
          initialIndex={0}
          states={[
            { label: 'CleanUp' },
            { label: 'CleanUp' },
            { label: 'CleanUp...' },
            { label: 'CleanUp', textClass: 'text-link' },
          ]}
          transitionMap={{ 0: 0 }}
          className="w-[163px]"
        />
      </div>

      {/*  User Complaint */}
      <div className="bg-white rounded-lg p-3 space-y-2 mb-5">
        <h4 className="text-sm font-bold">User Name</h4>
        <div className="flex justify-between">
          <button
            aria-label="View details"
            className="text-text self-end p-1 hover:bg-card-bg rounded"
          >
            <Icon icon="mdi:chevron-left" width={24} height={24} />
          </button>
          <div>
            <p>Compaint text</p>
          </div>
          <button
            aria-label="View details"
            className="text-text self-end p-1 hover:bg-card-bg rounded"
          >
            <Icon icon="mdi:chevron-right" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}