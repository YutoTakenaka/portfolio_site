import "../../styles/Skills.css";
import Circle from "react-circle";

export const Skills = () => {
  const skillList = [
    { skill: "React", percentage: 75 },
    { skill: "TypeScript", percentage: 70 },
    { skill: "Python", percentage: 55 },
    { skill: "PHP", percentage: 45 },
    { skill: "Management", percentage: 10 },
    { skill: "AI", percentage: 10 },
  ];

  return (
    <div className="skills">
      <div className="skills-header">
        <div className="skills-title">
          <p className="skills-main-title">Skills</p>
          <p className="skills-subtitle">-できること-</p>
        </div>
      </div>
      <div className="skills-container">
        {skillList.map((data) => (
          <div className="circle" key={data.skill}>
            <p className="circle-label">{data.skill}</p>
            <Circle
              className="react-circle"
              responsive={true}
              size={10}
              lineWidth={16}
              progress={data.percentage}
              progressColor="cornflowerblue"
              bgColor="whitesmoke"
              roundedStroke={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
