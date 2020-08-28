import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css";

const Mapa = (props) => {

    //    console.log('PROPS: ', props);
    const estilsMapa = {
        dark: 'mapbox://styles/mapbox/dark-v10',
        natural: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
        light: 'mapbox://styles/mapbox/light-v10',
        outdoors: 'mapbox://styles/mapbox/outdoors-v11',
        satellit: 'mapbox://styles/mapbox/satellite-v9'
    };

    const styles = {
        width: "100vh",
        height: "100vh",
        position: ""
    };

    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken =
            'pk.eyJ1IjoieGF2aW90cCIsImEiOiJja2F5Mnlnd3EwYzF1MzR1bG56czNnNnY4In0.LzCEft2g_0N9kuHVBgi8cA';
        const initializeMap = ({ mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: estilsMapa.outdoors, // stylesheet location
                center: [1.975731, 41.266965],
                zoom: 15
            });

            map.on("load", () => {
                const coords = props.dades.map((dada) => {
                    return (dada.coord)
                });
                coords.forEach((coordenada) => {
                    new mapboxgl.Marker().setLngLat(coordenada).addTo(map)
                });
            });
        };

        initializeMap({ mapContainer });
    });

    return <div ref={el => (mapContainer.current = el)} style={styles} />;
}

export default Mapa;