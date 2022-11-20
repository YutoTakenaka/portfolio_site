import axios from "axios";
import { useEffect, useReducer } from "react";
import {
  skillReducer,
  initialState,
  actionTypes,
} from "../reducers/skillReducers";
import { requestStates } from "../constants";
import Circle from "react-circle";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Skills = () => {
  const [state, dispatch] = useReducer(skillReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.fetch });
    axios
      .get("https://api.github.com/users/YutoTakenaka/repos")
      .then((res) => {
        const languageList = res.data.map((ojb) => ojb.language);
        const countedLanguageList = generateLanguageCountObj(languageList);
        dispatch({
          type: actionTypes.success,
          payload: { languageList: countedLanguageList },
        });
      })
      .catch(() => {
        dispatch({ type: actionTypes.error });
      });
  }, []);

  const generateLanguageCountObj = (allLanguageList) => {
    const notNullLanguageList = allLanguageList.filter(
      (language) => language !== null
    );
    const uniqueLanguageList = [...new Set(notNullLanguageList)];

    return uniqueLanguageList.map((item, _) => {
      return {
        language: item,
        count: allLanguageList.filter((language) => language === item).length,
      };
    });
  };

  const converseCountToPercentage = (count) => {
    if (count > 10) return 100;
    return count * 10;
  };

  const sortedLanguageList = () =>
    state.languageList.sort((first, next) => next.count - first.count);

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <p>Skills</p>
        </div>
        <div className="skills-container">
          {state.requestStates === requestStates.loading && (
            <AiOutlineLoading3Quarters className="loading" />
          )}
          {state.requestStates === requestStates.error && (
            <p className="description">Error!</p>
          )}
          {state.requestStates === requestStates.success &&
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
