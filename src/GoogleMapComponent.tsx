import React, { useCallback, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.7128, // Default center (New York City)
  lng: -74.0060,
};

const GoogleMapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCJbzS4VODYwk6_AhZS3FEQ5Z7aDmDS-O0',
  });

  // Use Ref with explicit type for google.maps.Map
  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div id="google-map-container" style={mapContainerStyle}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        onLoad={onMapLoad}
        options={{ fullscreenControl: true }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent;
