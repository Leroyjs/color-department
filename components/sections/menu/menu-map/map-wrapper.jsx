import dynamic from "next/dynamic";

const MapWrapper = dynamic(() => import('./map'), { ssr: false });

export { MapWrapper };
