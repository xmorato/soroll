import React, { useState } from 'react'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from '@material-ui/core';
import imatge from "../puntCalent.png"

const Mapa = (props) => {

    const estilsMapa = {
        dark: 'mapbox://styles/mapbox/dark-v10',
        natural: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
        light: 'mapbox://styles/mapbox/light-v10',
        outdoors: 'mapbox://styles/mapbox/outdoors-v11',
        satellit: 'mapbox://styles/mapbox/satellite-v9'
    };

    const [viewPort, setViewPort] = useState({
        width: "100vh",
        height: "60vh",
        position: "",
        longitude: 1.975731,
        latitude: 41.266965,
        zoom: 15
    });

    const [selectedPunt, setSelectedPunt] = useState(null);

    return (
        <div>
            <ReactMapGl {...viewPort}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle={estilsMapa.dark}
                onViewportChange={viewport => {
                    setViewPort(viewport);
                }}
            >

                {
                    props.dades.map((punt, index) => {
                        return (
                            <Marker
                                key={index}
                                latitude={punt.coord.lat}
                                longitude={punt.coord.lon}
                            >
                                <Button
                                    onClick={e => {
                                        e.preventDefault();
                                        setSelectedPunt(punt);
                                    }}>
                                    <img src={imatge} alt={punt.carrer} />
                                </Button>
                            </Marker>
                        )
                    })
                }

                {selectedPunt ? (
                    <Popup latitude={selectedPunt.coord.lat}
                        longitude={selectedPunt.coord.lon}
                        onClose={() => setSelectedPunt(null)}>
                        <div>
                            <h2>{selectedPunt.tipus} - {selectedPunt.data.toDateString("es-ES")} </h2>
                            <h3>{selectedPunt.carrer}</h3>
                            <div>{selectedPunt.comentari}</div>
                            <p>{selectedPunt.coord.lat} - {selectedPunt.coord.lon}</p>
                        </div>
                    </Popup>)
                    : null
                }
            </ReactMapGl>
        </div>
    )
}

export default Mapa;