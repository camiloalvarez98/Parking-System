import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from 'axios';

export default function GraficoCS() {

    const [data, setData] = useState([]);
    const getCS = async () => {
      await axios.get('https://sistembebidos.herokuapp.com/router/disponibleSalud')
        .then(response => {
            setData([parseInt(response.data[0].disponible), 8 - response.data[0].disponible]);
            });
    }

    useEffect(() => {
        getCS();
    }, [])

    const [options, setOptions] = useState({ labels: ['Disponible', 'Ocupado'] });

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <Chart
            options={options}
            series={data}
            type="donut"
            width="300"
        />
    );
}