import { MapContainer, TileLayer } from 'react-leaflet';
import { useEffect } from 'react';

import { LocationMarker } from './LocationMarker';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (coords: [number, number]) => void;
}

export function MapModal({ isOpen, onClose, onSelect }: MapModalProps) {
  // блокируем скролл при открытой модалке
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl h-[500px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white rounded px-2 py-1"
        >
          ✕
        </button>

        <MapContainer center={[35.1856, 33.3823]} zoom={8} className="w-full h-full rounded-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <LocationMarker
            onSelect={(coords) => {
              onSelect(coords);
              onClose(); // закрываем модалку сразу после клика
            }}
          />
        </MapContainer>
      </div>
    </div>
  );
}