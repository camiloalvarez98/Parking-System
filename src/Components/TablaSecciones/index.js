import React from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


export default function TablaSecciones() {
    const [data, setData] = useState([]);

    const getSecciones = async() =>{
        await axios.get('https://sistembebidos.herokuapp.com/router/secciones')
        .then(response =>{
           setData(response.data)
           console.log(response)
        });
    }
    
    useEffect (() => {
        getSecciones();
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
                        lg: 200,
                        xl: 1200,
                    }
                }}
                color = 'contrastText'
                border = {1}
                borderColor = '#0a9396' 
                bgcolor={'white'}
            >
                <h2>Secciones:</h2>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>Nombre sección</TableCell>
                            </TableRow>
                        </TableHead> 
                        <TableBody>
                            {data.map(seccion =>(
                                <TableRow sx={{ '&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell align='center'>{seccion.name}</TableCell>
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