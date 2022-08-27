import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { colors } from 'styles';
import { svgIcon, title } from "./utils";

export const Map = ({ source, coordinates, zoom = 16 }) => {
  return (
    <MapContainer
      id='leaflet-map'
      attributionControl={false}
      zoomControl={false}
      center={coordinates}
      zoom={zoom}
      style={{ minHeight: '100%', backgroundColor: colors.black }}>
      <TileLayer
        url={source}
      />
      <Marker 
      icon={title}
      position={coordinates}
      >
      <Marker 
      icon={svgIcon}
      position={coordinates}
      ></Marker>
      </Marker>
    </MapContainer>
  );
}