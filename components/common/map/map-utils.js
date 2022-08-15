import { useEffect } from "react";
import L from "leaflet";

export function useCDMapIcon () {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: '/map-marker.svg',
      shadowUrl: '',
      iconSize: [62, 72],
    });
  })
}