import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

interface PieChartProps {
    dataPoints: number[];
    labels: string[];
    backgroundColors: string[];
}

const PieChart: React.FC<PieChartProps> = ({ dataPoints, labels, backgroundColors }) => {

    const chartData = {
        labels: labels,
        datasets: [{
            data: dataPoints,
            backgroundColor: backgroundColors
        }]
    };

    if (!chartData) return null;

    return (
        <Chart type='pie' data={chartData} />
    );
};

export default PieChart;
