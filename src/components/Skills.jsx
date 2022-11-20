import "../styles/Skills.css";
import { requestStates } from "../constants";
import Circle from "react-circle";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSkills } from "../hooks/useSkills";

export const Skills = () => {
  const [sortedLanguageList, converseCountToPercentage, fetchRequestState] =
    useSkills();

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <p>Skills</p>
        </div>
        <div className="skills-container">
          {fetchRequestState === requestStates.loading && (
            <AiOutlineLoading3Quarters className="loading" />
          )}
          {fetchRequestState === requestStates.error && (
            <p className="description">Error!</p>
          )}
          {fetchRequestState === requestStates.success &&
            sortedLanguageList().map((item, index) => (
              <div className="skill-item" key={index}>
                <p className="description strong">{item.language}</p>
                <Circle
                  animate
                  progress={converseCountToPercentage(item.count)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
