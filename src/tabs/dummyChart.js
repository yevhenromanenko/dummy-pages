import React, {useEffect, useRef} from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';

const DummyChart = () => {

    const chartRef = useRef(null);
    useEffect(() => {
        Chart.register(CategoryScale, LinearScale, BarController, BarElement);

        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Data 1', 'Data 2', 'Data 3'],
                datasets: [
                    {
                        label: 'Dummy Chart Data',
                        data: [10, 20, 15],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        type: 'category',
                    },
                    y: {
                        type: 'linear',
                        beginAtZero: true,
                    },
                },
            },
        });
    }, []);

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
}

export default DummyChart;
