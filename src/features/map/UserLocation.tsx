import { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

interface UserLocationProps {
  enabled: boolean;
}

export function UserLocation({ enabled }: UserLocationProps) {
  const map = useMap();
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  useEffect(() => {
    if (!enabled) {
      setPosition(null);
      return;
    }

    map.locate({ setView: true, maxZoom: 16 });

    const onLocationFound = (e: any) => {
      setPosition(e.latlng);
    };

    map.on('locationfound', onLocationFound);
    return () => {
      map.off('locationfound', onLocationFound);
    };
  }, [enabled, map]);

  return position ? <Marker position={position} /> : null;
}
