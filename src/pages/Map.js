import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ markerPosition, onMapClick }) => {
  return (
    <MapContainer
      center={markerPosition}
      zoom={13}
      style={{ width: '100%', height: 'calc(100vh - 100px)' }}
      whenCreated={(map) => map.on('click', onMapClick)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={markerPosition}>
        <Popup>
          <h4>Selected Location</h4>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
