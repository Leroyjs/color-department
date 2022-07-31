import { useEffect, useRef } from 'react';
import { mapStyle } from 'styles';

export const GoogleMap = ({ }) => {
    const mapRef = useRef();

    useEffect(() => {
        console.log(mapStyle)

        if (false) {
            let map = new google.maps.Map(mapRef);
            window.map = map;

        }
    }, []);

    return (
        <div ref={mapRef}>testMa</div>
    )

}