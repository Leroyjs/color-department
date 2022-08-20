import dynamic from "next/dynamic";

export const MapWrapper = dynamic(
  () => import('./map').then((mod) => mod.Map),
  { ssr: false }
);

