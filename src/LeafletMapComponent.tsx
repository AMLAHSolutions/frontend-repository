import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import Leaflet default marker icon assets
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.7128, // New York City
  lng: -74.0060,
};

// Configure the marker icon for Leaflet
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // size of the shadow
});

const LeafletMapComponent = () => {
  const mapRef = useRef(null);

  return (
    <div id="leaflet-map-container" style={mapContainerStyle}>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[center.lat, center.lng]} icon={defaultIcon} />
      </MapContainer>
    </div>
  );
};

export default LeafletMapComponent;
