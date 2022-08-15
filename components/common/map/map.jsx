import React, {useEffect} from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { rewriteMapIcon } from "./utils";

export const Map = ({ source, coordinates, zoom = 16 }) => {
  useEffect(rewriteMapIcon);
  return (
    <MapContainer attributionControl={false} zoomControl={false} center={coordinates} zoom={zoom} style={{minHeight: '100%'}}>
      <TileLayer
        url={source}
      />
      <Marker position={coordinates} >
      </Marker>
    </MapContainer>
  );
}