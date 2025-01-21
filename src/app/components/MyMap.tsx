import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '400px' };
const center = { lat: 41.2995, lng: 69.2401 };
const mapOptions = {
  mapTypeControl: false,        // Remove map type (satellite, terrain, etc.)
  streetViewControl: false,     // Remove street view (human icon)
  fullscreenControl: false,     // Remove fullscreen (expand button)
  scaleControl: false,          // Remove scale control
};

const MyMap = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyB_bm1an29_D5YfHu_Rmhngt4E4J5Z27Co'}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} options={mapOptions}>
        {/* Add markers or other components here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
