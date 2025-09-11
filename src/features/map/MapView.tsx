import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { useState } from 'react';

import { ZoomControls } from '@/features/map/ZoomControls';
import { DashboardButton } from '@/features/map/DashboardButton';
import { CreateReportButton } from '@/features/map/CreateReportButton';
import { UserLocation } from '@/features/map/UserLocation';

// Центр карты (Кипр)
const center: LatLngExpression = [35.1856, 33.3823];

export const MapView = () => {
  const [showLocation, setShowLocation] = useState(false);

  return (
    <div className="relative w-full h-full">
      <MapContainer center={center} zoom={8} className="w-full h-full z-0" zoomControl={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <UserLocation enabled={showLocation} />
        <ZoomControls />
        {/*  */}
        <UserLocation enabled={showLocation} />
      </MapContainer>
      {/* Buttons*/}
      {/* Direction */}
      <div className="absolute top-48 left-4 h-10 z-[1000]">
        <button
          onClick={() => setShowLocation((prev) => !prev)}
          className={`w-10 h-10 rounded-md shadow flex items-center justify-center transition cursor-pointer active:scale-95 ${
            showLocation ? 'bg-[#9A9F17]' : 'bg-white'
          }`}
          title="Direction"
        >
          <img src="src/assets/icons/map/direction.svg" alt="Direction" className="w-6 h-6" />
        </button>
      </div>
      {/* Symbols and Dashboard */}
      <div className="absolute top-70 left-4 h-10 z-[1000]">
        <button
          className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center transition cursor-pointer active:scale-95"
          title="Symbols"
        >
          <img src="src/assets/icons/map/symbols.svg" alt="Symbols" className="w-6 h-6" />
        </button>
        <DashboardButton />
      </div>
      {/* Add polluted area */}
      <div className="absolute top-150 left-4 h-10 z-[1000]">
        <CreateReportButton />
      </div>
    </div>
  );
};
