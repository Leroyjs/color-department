import L from "leaflet";

export function rewriteMapIcon (icon) {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: icon.src,
    shadowUrl: '',
    iconSize: [62, 72],
  });
}