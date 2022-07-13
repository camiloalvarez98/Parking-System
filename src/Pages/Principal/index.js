import React from 'react';
import { Barra, TablaDisponibles, GraficoCS, Reporte,Graficos} from '../../Components';

export default function Principal(){
    return (
        <div>
            <Barra/>
            <TablaDisponibles/>
            <Graficos/>
            <Reporte/>
        </div>
    )
}