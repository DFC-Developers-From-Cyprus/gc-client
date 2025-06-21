import { useMap } from 'react-leaflet';

export const ZoomControls = () => {
  const map = useMap();

  const handleZoomIn = () => map.zoomIn();
  const handleZoomOut = () => map.zoomOut();

  return (
    <div className="absolute top-4 left-4 z-[1000]">
      <button
        onClick={handleZoomIn}
        className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center mt-20 transition cursor-pointer active:scale-95"
        title="Zoom In"
      >
        <img src="src/assets/icons/map/zoom_in.svg" alt="Zoom In" className="w-6 h-6" />
      </button>
      <button
        onClick={handleZoomOut}
        className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center mt-2 mb-2 transition cursor-pointer active:scale-95"
        title="Zoom Out"
      >
        <img src="src/assets/icons/map/zoom_out.svg" alt="Zoom Out" className="w-6 h-6" />
      </button>
    </div>
  );
};
