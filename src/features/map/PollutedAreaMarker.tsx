import { CircleMarker, Popup } from 'react-leaflet';

import { PollutedArea } from '@/api/polluted-areas';

interface PollutedAreaMarkerProps {
  area: PollutedArea;
}

export function PollutedAreaMarker({ area }: PollutedAreaMarkerProps) {
  const coords = area.location.split(',').map(Number);
  if (coords.length !== 2 || coords.some(isNaN)) return null;

  return (
    <CircleMarker
      center={[coords[0], coords[1]]}
      radius={10}
      pathOptions={{
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.4,
      }}
    >
      <Popup>
        <strong>{area.type_of_pollution || 'Unknown type'}</strong>
        <br />
        Level: {area.pollution_level}
        <br />
        {area.description}
      </Popup>
    </CircleMarker>
  );
}