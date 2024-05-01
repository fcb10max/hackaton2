import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    // zoomPlugin
);

let delayed = false;

export const options: ChartOptions<"bar"> = {
    responsive: true,
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
        },
    },
    plugins: {
        // zoom: {
        //     zoom: {
        //         wheel: {
        //             enabled: true,
        //         },
        //         pinch: {
        //             enabled: true
        //         },
        //         mode: 'xy',
        //     }
        // },
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Chart.js Bar Chart",
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: labels.map(() => Math.random() * 1000),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: "Dataset 2",
            data: labels.map(() => Math.random() * 1000),
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
};

const CustomChart = () => {
    return <Bar options={options} data={data} />;
}

export default CustomChart;