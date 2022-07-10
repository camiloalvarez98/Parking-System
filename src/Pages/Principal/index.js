import React from 'react';
import { Barra, TablaDisponibles, TablaSecciones, Grafico} from '../../Components';

export default function Principal(){
    return (
        <div>
            <Barra/>
            <TablaSecciones/>
            <TablaDisponibles/>
            <Grafico/>
        </div>
    )
}