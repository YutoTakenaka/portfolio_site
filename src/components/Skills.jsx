import "../styles/Skills.css";
import Circle from "react-circle";

export const Skills = () => {
  const LanguageList = [
    { language: "React", percent: 45 },
    { language: "TypeScript", percent: 45 },
    { language: "JavaScript", percent: 45 },
    { language: "Python", percent: 20 },
    { language: "PHP", percent: 40 },
    { language: "Ruby", percent: 60 },
  ];

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <p>Skills</p>
        </div>
        <div className="skills-container">
          {/* <AiOutlineLoading3Quarters className="loading" /> */}
          {LanguageList.map((item, index) => (
            <div className="skill-item" key={index}>
              <p className="description strong">{item.language}</p>
              <Circle
                animate
                progress={item.percent}
                progressColor="#047ff3"
                size="128px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
