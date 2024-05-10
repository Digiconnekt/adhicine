import Chart from "../../base-components/Chart";
import { getColor } from "../../utils/colors";
import { selectColorScheme } from "../../stores/colorSchemeSlice";
import { selectDarkMode } from "../../stores/darkModeSlice";
import { useAppSelector } from "../../stores/hooks";
import { useMemo } from "react";

function Main(props) {
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const data = useMemo(() => {
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: "Taken",
          barPercentage: 0.5,
          barThickness: 8,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [12, 20, 25, 20, 50, 45, 85, 105],
          backgroundColor: colorScheme ? getColor("green.400") : "",
        },
        {
          label: "Missed",
          barPercentage: 0.5,
          barThickness: 8,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [35, 30, 40, 56, 32, 60, 72, 85],
          backgroundColor: colorScheme ? getColor("red.400") : "",
        },
        {
          label: "Snoozed",
          barPercentage: 0.5,
          barThickness: 8,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [60, 13, 28, 80, 43, 38, 79, 80],
          backgroundColor: colorScheme ? getColor("orange.400") : "",
        },
      ],
    };
  }, [colorScheme, darkMode]);

  const options = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: getColor("slate.500", 0.8),
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 12,
            },
            color: getColor("slate.500", 0.8),
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            font: {
              size: 12,
            },
            color: getColor("slate.500", 0.8),
            callback: function (value) {
              return "$" + value;
            },
          },
          grid: {
            color: darkMode
              ? getColor("slate.500", 0.3)
              : getColor("slate.300"),
            borderDash: [2, 2],
            drawBorder: false,
          },
        },
      },
    };
  }, [colorScheme, darkMode]);

  return (
    <Chart
      type="bar"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
};

export default Main;
