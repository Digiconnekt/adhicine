import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function dateRange(startDate, endDate) {
  let dates = [];
  let currentDate = new Date(startDate);
  let end = new Date(endDate);
  while (currentDate <= end) {
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let dateString = day + " " + monthNames[month] + " " + year;
    dates.push(dateString);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

const ReportChart = ({ APIDATA, from, to }) => {
  // console.log("dateRange: ", dateRange(from, to));

  //  for taken
  let taken = [];
  for (let i = 0; i < dateRange(from, to).length; i++) {
    let found = false;
    for (let j = 0; j < APIDATA.length; j++) {
      if (
        dateRange(from, to)[i] === APIDATA[j].toBeTakenAt.date &&
        APIDATA[j].toBeTakenAt.date === APIDATA[j].takenAt.date &&
        APIDATA[j].status === "taken"
      ) {
        taken.push(APIDATA[j].dosage);
        found = true;
        break;
      }
    }
    if (!found) {
      taken.push(0);
    }
  }
  //  for taken

  //  for snoozed
  let snoozed = [];
  for (let i = 0; i < dateRange(from, to).length; i++) {
    let found = false;
    for (let j = 0; j < APIDATA.length; j++) {
      if (
        dateRange(from, to)[i] === APIDATA[j].toBeTakenAt.date &&
        APIDATA[j].toBeTakenAt.date !== APIDATA[j].takenAt.date &&
        APIDATA[j].status === "snoozed"
      ) {
        snoozed.push(APIDATA[j].dosage);
        found = true;
        break;
      }
    }
    if (!found) {
      snoozed.push(0);
    }
  }
  //  for snoozed

  //  for missed
  let missed = [];
  for (let i = 0; i < dateRange(from, to).length; i++) {
    let found = false;
    for (let j = 0; j < APIDATA.length; j++) {
      if (
        dateRange(from, to)[i] === APIDATA[j].toBeTakenAt.date &&
        APIDATA[j].toBeTakenAt.date !== APIDATA[j].takenAt.date &&
        APIDATA[j].status === "missed"
      ) {
        missed.push(APIDATA[j].dosage);
        found = true;
        break;
      }
    }
    if (!found) {
      missed.push(0);
    }
  }
  //  for missed

  const data = {
    labels: dateRange(from, to),
    datasets: [
      {
        label: "Taken",
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
        stack: "Stack 0",
        data: taken,
      },
      {
        label: "Snoozed",
        backgroundColor: "yellow",
        borderColor: "yellow",
        borderWidth: 1,
        stack: "Stack 0",
        data: snoozed,
      },
      {
        label: "Missed",
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
        stack: "Stack 0",
        data: missed,
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
      <Bar data={data} options={options}></Bar>
    </>
  );
};

export default ReportChart;
