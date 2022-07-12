import React from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


export default function Reporte() {
    const [data, setData] = useState([]);
    const days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"]
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    const current_day = new Date();
    let string_day = days[current_day.getDay()];
    let day = current_day.getDate()
    let month = months[current_day.getMonth()]
    let anno = current_day.getFullYear()

    const getReporte = async() =>{
        await axios.get('https://sistembebidos.herokuapp.com/router/reportestrue')
        .then(response =>{
           setData(response.data)
           console.log(response)
           console.log(day)
           console.log(month)
        });
    }
    
    useEffect (() => {
        getReporte();
    },[])

    return (
        <div align  = 'center'>
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
            >
                <h2>Reporte diario de hoy {string_day} {day} de {month} del {anno}: </h2>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>Sección</TableCell>
                                <TableCell align='center'>Cuadrante</TableCell>
                                <TableCell align='center'>N° de estacionamiento</TableCell>
                                <TableCell align='center'>Hora</TableCell>
                            </TableRow>
                        </TableHead> 
                        <TableBody>
                            {data.map(reporte =>(
                                <TableRow sx={{ '&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell align='center'>{reporte.seccion}</TableCell>
                                    <TableCell align='center'>{reporte.cuadrante}</TableCell>
                                    <TableCell align='center'>{reporte.idestacionamiento}</TableCell>
                                    <TableCell align='center'>{reporte.hora}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>   
            <br/>
        </div> 
    )
}