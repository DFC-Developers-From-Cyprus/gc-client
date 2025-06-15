import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

// Центр карты (Кипр)
const center: LatLngExpression = [35.1856, 33.3823];

export const MapView = () => {
  return (
    <MapContainer center={center} zoom={8} className="w-full h-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
    </MapContainer>
  );
}