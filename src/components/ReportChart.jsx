import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const ReportChart = () => {
  const data = {
    labels: ["mon", "tue", "wed"],
    datasets: [
      {
        label: "sales of week",
        data: [6, 3, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {},
  };

  return (
    <>
      <Line data={data} options={options}></Line>
    </>
  );
};

export default ReportChart;
