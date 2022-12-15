import "../styles/Skills.css";
import Cloud from "../images/cloud.svg";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  CategoryScale,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const Skills = () => {
  const dataLabels = [
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "PHP",
    "Ruby",
  ];
  const skillData = {
    labels: dataLabels,
    datasets: [
      {
        label: "skills(%)",
        data: [70, 70, 60, 30, 40, 60],
        backgroundColor: "rgba(42,61,224,0.3)",
        borderColor: "rgba(42,61,224,1)",
        borderWidth: 3,
      },
    ],
  };
  const options = {
    elements: {
      line: { borderWidth: 3 },
    },
    plugin: {
      // legend: { display: false },
      // datalabels: { display: false },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        angleLines: {
          display: false,
        },
      },
    },
  };

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <p>Skills</p>
        </div>
        <div className="skills-container">
          <div className="">
            <img className="react-image" src={Cloud} alt="" />
          </div>
          <div className="chart">
            <Radar data={skillData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};
