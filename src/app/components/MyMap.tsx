import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '400px', borderRadius: '16px', };
const center = { lat: 41.3158, lng: 69.2789 };
const mapOptions = {
  mapTypeControl: false,        // Remove map type (satellite, terrain, etc.)
  streetViewControl: false,     // Remove street view (human icon)
  fullscreenControl: false,     // Remove fullscreen (expand button)
  scaleControl: false,          // Remove scale control
};

const MyMap = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} options={mapOptions}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
