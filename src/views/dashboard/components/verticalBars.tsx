import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalBarChart = ({ stats, year }) => {
  // Array of month names
  const monthNames = [
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

  // Prepare data for the chart
  const labels = stats.map((stat) => monthNames[stat.month - 1]);
  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        data: stats.map((stat) => stat.count),
        backgroundColor: "#a3c8ff",
        borderColor: "#0065FF",
        borderWidth: 1,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Explicitly set the type to a valid literal value
      },
      title: {
        display: true,
        text: `Monthly Stats for ${year}`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default VerticalBarChart;
