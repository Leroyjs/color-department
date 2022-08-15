import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: '/map-marker.svg',
  shadowUrl: '',
  iconSize: [62, 72],
});

const Map = () => {
  return (
    <MapContainer attributionControl={false} zoomControl={false} center={[51.505, -0.09]} zoom={13} style={{minHeight: '100%'}}>
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;