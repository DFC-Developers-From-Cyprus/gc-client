import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';

import { ZoomControls } from '@/features/map/ZoomControls';
import { DashboardButton } from '@/features/map/DashboardButton';
import { CreateReportButton } from '@/features/map/CreateReportButton';
import { UserLocation } from '@/features/map/UserLocation';
import { PollutedAreaMarker } from '@/features/map/PollutedAreaMarker';
import { fetchAreas, PollutedArea } from '@/api/polluted-areas';

// Центр карты (Кипр)
const center: LatLngExpression = [35.1856, 33.3823];

export const MapView = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [areas, setAreas] = useState<PollutedArea[]>([]);

  useEffect(() => {
    const loadAreas = async () => {
      try {
        let url: string | null = '/api/env/polluted-areas/';
        let allResults: PollutedArea[] = [];
        while (url) {
          const data = await fetchAreas(url);
          allResults = [...allResults, ...data.results];
          url = data.next; // если есть следующая страница
        }
        setAreas(allResults);
      } catch (err) {
        console.error('Failed to fetch areas', err);
      }
    };
    loadAreas();
  }, []);

  return (
    <div className="relative w-full h-full">
      <MapContainer center={center} zoom={8} className="w-full h-full z-0" zoomControl={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {areas.map((area) => (
          <PollutedAreaMarker key={area.uuid} area={area} />
        ))}
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
