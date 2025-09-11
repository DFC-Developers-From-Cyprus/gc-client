import { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';

interface LocationMarkerProps {
  onSelect: (coords: [number, number]) => void;
}

export function LocationMarker({ onSelect }: LocationMarkerProps) {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useMapEvents({
    click(e) {
      const coords: [number, number] = [e.latlng.lat, e.latlng.lng];
      setPosition(coords);
      onSelect(coords);
    },
  });

  return position ? <Marker position={position} /> : null;
}