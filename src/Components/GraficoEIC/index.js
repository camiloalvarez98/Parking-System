import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from 'axios';

export default function GraficoEIC() {

    const [data, setData] = useState([]);
    const getEIC = async () => {
      await axios.get('https://sistembebidos.herokuapp.com/router/disponibleEIC')
        .then(response => {
            setData([parseInt(response.data[0].disponible), 8 - response.data[0].disponible]);
            });
    }

    useEffect(() => {
        getEIC();
    }, [])

    const [options, setOptions] = useState({ labels: ['Disponible', 'Ocupado'] });

    useEffect(() => {
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