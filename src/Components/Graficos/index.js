import React from 'react'
import Box from '@mui/material/Box';
import {GraficoDerecho, GraficoEstudiantes,GraficoHawai,GraficoCanchas,GraficoEIC,GraficoCS} from '../../Components'
import { Grid } from '@material-ui/core';

export default function Graficos() {
    return (
        <div>
            <br/>
            <Box
                sx = {{
                    width:{
                        xs: 300,
                        sm: 400,
                        md: 600,
                        lg: 800,
                        xl: 1200,
                    }
                }}
                color = 'contrastText'
                border = {1}
                borderColor = '#0a9396' 
                bgcolor={'white'}
                marginLeft={34.5}
            >
                <h2 align='center'>Porcentajes de ocupación: </h2>
                <div>
                    <Grid container alignItems='center' spacing={2} mb={3} justifyContent='center' >
                        <Grid item md={6}>
                            <h2 align = 'center'>EIC</h2>
                            <GraficoEIC/>
                        </Grid>
                        <Grid item lg={6}>
                            <h2 align = 'center'>Centro de Salud</h2>
                            <GraficoCS/>
                        </Grid>
                        <Grid item lg={6}>
                            <h2 align = 'center'>Derecho</h2>
                            <GraficoDerecho/>
                        </Grid>
                        <Grid item lg={6}>
                            <h2 align = 'center'>Estudiantes</h2>
                            <GraficoEstudiantes/>
                        </Grid>
                        <Grid item lg={6}>
                            <h2 align = 'center'>Hawai</h2>
                            <GraficoHawai/>
                        </Grid>
                        <Grid item lg={6}>
                            <h2 align = 'center'>Canchas</h2>
                            <GraficoCanchas/>
                        </Grid>
                    </Grid>
                </div>
            </Box>   
            <br/>
        </div> 
    )
}