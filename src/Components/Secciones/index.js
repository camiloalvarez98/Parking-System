import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Mapa from '../Mapa';
import mapas from './data';
import axios from 'axios';

export default function Secciones() {

    const [maps, setMaps] = useState([]);

    const green = '#13fc03';
    const yellow = '#fcd303';
    const red = '#fc0303';

    const getEstacionamientos = async () => {
        await axios.get('https://sistembebidos.herokuapp.com/router/disponiblecuadrante')
            .then(response => {
                let maps = [...mapas.data];
                response.data.forEach(element => {
                    let section = maps.find(e => e.id === element.nombre).sources;
                    section.find(e => e.id === element.cuadrante).layer.paint['fill-color'] = element.disponible > 0 ? (element.disponible > 1 ? green : yellow) : red;
                    section.find(e => e.group === 'text').data.features.find(e => e.id === element.cuadrante).properties.title = `${element.disponible}`;
                });
                setMaps(maps);

            });
    }

    useEffect(() => {
        setMaps(mapas.data_2);
        getEstacionamientos();
    }, [])

    useEffect(() => {
        setInterval(() => {
            setMaps(mapas.data_2);
            getEstacionamientos();
        }, 1000 * 60);
    }, [])

    return (
        <div align='center'>
            <br />
            <Box
                sx={{
                    width: {
                        xs: 300,
                        sm: 400,
                        md: 600,
                        lg: 1000,
                        xl: 1400,
                    },
                }}
                color='contrastText'
                border={1}
                borderColor='#0a9396'
                bgcolor={'white'}
            >
                <h2>Secciones</h2>
                <hr />
                <Grid container spacing={2} mb={3} justifyContent='center' >
                    {
                        maps && maps.map(m => {
                            return (
                                <Grid item>
                                    <h3>{m.title}</h3>
                                    <Mapa
                                        initialState={m.initialState}
                                        sources={m.sources ?? []}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <br />
        </div>
    )
}