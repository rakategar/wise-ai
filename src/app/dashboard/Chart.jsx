import React from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
import { Chart as ChartJS } from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const NUMBER_CFG = { count: 12, min: 0, max: 100 };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Home 1",
        data: Array.from(
          { length: NUMBER_CFG.count },
          () =>
            Math.floor(Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min + 1)) +
            NUMBER_CFG.min
        ),
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y",
      },
      {
        label: "Home 2",
        data: Array.from(
          { length: NUMBER_CFG.count },
          () =>
            Math.floor(Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min + 1)) +
            NUMBER_CFG.min
        ),
        borderColor: "blue",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Energy Usage",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
