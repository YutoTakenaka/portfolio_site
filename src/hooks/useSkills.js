import axios from "axios";
import { useEffect, useReducer } from "react";
import {
  actionTypes,
  initialState,
  skillReducer,
} from "../reducers/skillReducers";

export const useSkills = () => {
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

  return [sortedLanguageList, converseCountToPercentage, state.requestStates];
};
