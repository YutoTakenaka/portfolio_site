import "../styles/Skills.css";
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
    "Python",
    "Azure",
    "Management",
    "Sales",
  ];
  const skillData = {
    labels: dataLabels,
    datasets: [
      {
        label: "%",
        data: [70, 70, 70, 70, 70, 70],
        backgroundColor: "rgb(64,116,252,0.3)",
        borderColor: "#3C71FC",
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
    <>
      <div className="skills">
        <div className="skills-header">
          <div className="skills-title">
            <p className="skills-main-title">Skills</p>
            <p className="skills-subtitle">できること</p>
          </div>
        </div>
        <div className="skills-container">
          <div className="skills-left">
            <p>aaa</p>
            <p>aaa</p>
            <p>aaa</p>
            <p>aaa</p>
            <p>aaa</p>
          </div>
          <div className="ski9lls-right">
            <Radar data={skillData} options={options} />
          </div>
        </div>
      </div>
      {/* <div
        className="cover-image"
        style={{ backgroundImage: `url(${CoverImage})` }}
      /> */}
    </>
  );
};
