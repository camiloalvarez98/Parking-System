import React from 'react';
import Map, { Source, Layer } from 'react-map-gl';

export default function Mapa(props) {

    let { initialState, sources } = props;

    return (
        <Map
            mapboxAccessToken='pk.eyJ1IjoiZ2FzdHJvcG9kbyIsImEiOiJjbDVoYzh4ODkwMm16M2NyMGF3MmppNnluIn0.rBmiRZvyCdXRllkMW1njFg'
            {...initialState}
            style={{ width: 300, height: 300 }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            attributionControl={false}
        >
            {
                sources && sources.map(e => {
                    return (
                        <Source
                            type='geojson'
                            data={e.data}
                        >
                            <Layer {...e.layer}/>
                        </Source>
                    )
                })
            }
        </Map>
    )
}