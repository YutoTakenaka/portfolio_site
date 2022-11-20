import axios from "axios";
import { useEffect, useReducer } from "react";
import {
  actionTypes,
  initialState,
  skillReducer,
} from "../reducers/skillReducers";
import { requestStates } from "../constants";

const DEFAULT_MAX_PERCENTAGE = 100;
const LANGUAGE_COUNT_BASE = 10;

export const useSkills = () => {
  const [state, dispatch] = useReducer(skillReducer, initialState);

  const fetchReposApi = () => {
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
  };

  useEffect(() => {
    if (state.requestStates !== requestStates.loading) return;
    fetchReposApi();
  }, [state.requestStates]);

  useEffect(() => {
    dispatch({ type: actionTypes.fetch });
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

  const converseCountToPercentage = (languageCount) => {
    if (languageCount > LANGUAGE_COUNT_BASE) return DEFAULT_MAX_PERCENTAGE;
    return languageCount * LANGUAGE_COUNT_BASE;
  };

  const sortedLanguageList = () =>
    state.languageList.sort((first, next) => next.count - first.count);

  return [sortedLanguageList, converseCountToPercentage, state.requestStates];
};
