import React from 'react';
import { Barra, TablaDisponibles, Grafico, Reporte} from '../../Components';

export default function Principal(){
    return (
        <div>
            <Barra/>
            <TablaDisponibles/>
            <Grafico/>
            <Reporte/>
        </div>
    )
}