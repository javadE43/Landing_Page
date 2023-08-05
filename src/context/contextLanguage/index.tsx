//@ts-nocheck
"use client";
import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
// import { getItem, setItem, STATE_KEY } from "utils/local-storage";
// import { CHANGE_TO_ENGLISHE, CHANGE_TO_PERSION } from "../constants/language";
// import { appReducer, initialState } from "../reducers/reducerLanquage";

import { CHANGE_TO_ENGLISHE, CHANGE_TO_PERSION, STORE__LANGUAGE } from "../constants/language";

interface InitialState {
  data: {
    fa: {};
    en: {};
  };
  language: {};
  key: string;
}

//INITIALSTATE
export const initialState: InitialState = {
  key: typeof window !== "undefined" && sessionStorage.getItem("lan") ? JSON.parse(`${window.sessionStorage.getItem('lan')}`).key : false,
  language:  typeof window !== "undefined" && sessionStorage.getItem("lan") ? JSON.parse(`${window.sessionStorage.getItem('lan')}`).lenguage : {},
  data: {
    fa: {},
    en: {},
  },
};

type Action =
  | { type: "CHANGE_TO_ENGLISHE"; payload: { language: {}; key: string } }
  | { type: "CHANGE_TO_PERSION"; payload: { language: {}; key: string } }
  | { type: "STORE__LANGUAGE"; payload: { data: { fa: {}; en: {} } } };

//REDUCER
export const appReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case STORE__LANGUAGE: {
      let local = sessionStorage.getItem("lan")
        ? JSON.parse(`${sessionStorage.getItem("lan")}`).key
        : null;
      if (!local) {
        return {
          ...state,
          data: action.payload.data,
          language: action.payload.data?.["fa"],
          key: "fa",
        };
      } else {
        return {
          ...state,
          data: action.payload.data,
          language: action.payload.data?.[JSON.parse(`${sessionStorage.getItem("lan")}`).key],
        };
      }
    }
    case CHANGE_TO_ENGLISHE: {
      return {
        ...state,
        language: action.payload.language,
        key: action.payload.key,
      };
    }
    case CHANGE_TO_PERSION: {
      return {
        ...state,
        language: action.payload.language,
        key: action.payload.key,
      };
    }
    default:
      return state;
  }
};

const STATE_KEY = "lan";

//CREATE CONTEXT
const appContext = createContext(initialState);

//AppWrapper
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  //USEMEMO
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  //USEEFFCET
  useEffect(() => {
    const stateItem = sessionStorage.getItem("lan");
    if (!stateItem) return;
    const parsedState = JSON.parse(stateItem);
    const updatedState = {
      ...initialState,
      // persistent state
      key: parsedState.key,
      data: parsedState.data,
    };
    dispatch({
      type: parsedState.key,
      payload: updatedState,
    });
    dispatch({
      type: CHANGE_TO_PERSION,
      payload: { key: updatedState.key, language: updatedState.language },
    });
  }, []);

  //USEEFFCET
  useEffect(() => {
    if (state !== initialState) {
      sessionStorage.setItem(
        "lan",
        JSON.stringify({ ...state, key: state.key, language: state.language })
      );
    }
  }, [state]);

  //RETURN
  return <appContext.Provider value={contextValue}>{children}</appContext.Provider>;
}

//useAppContext
export function useAppContext() {
  return useContext(appContext);
}
