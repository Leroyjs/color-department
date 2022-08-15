import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import {useCDMapIcon} from "./map-utils";

export const Map = ({ source, coordinates, zoom = 16 }) => {
  useCDMapIcon();
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