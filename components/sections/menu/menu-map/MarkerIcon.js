import L from 'leaflet';

const mapIcon = new L.Icon({
  iconUrl: import('../../../../public/map-marker.svg'),
  iconRetinaUrl: import('../../../../public/map-marker.svg'),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: 'leaflet-div-icon'
});

export { mapIcon };