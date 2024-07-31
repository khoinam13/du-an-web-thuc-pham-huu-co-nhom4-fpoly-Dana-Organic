import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Doanh thu từng năm',
            data: [300, 100, 120, 90],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    };

    return (
        <>
            <h1>Biểu đồ Thống kê doanh thu</h1>
            <div style={{ width: '900px', height: '700px',margin:'0 auto' }}>
                <Pie data={data} />
            </div>
        </>
    );
};

export default PieChart;
