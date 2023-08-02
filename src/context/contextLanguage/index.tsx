//@ts-nocheck
"use client";
import PropTypes from "prop-types";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
// import { getItem, setItem, STATE_KEY } from "utils/local-storage";
import { CHANGE_TO_ENGLISHE, CHANGE_TO_PERSION } from "../constants/language";
import { appReducer, initialState } from "../reducers/reducerLanquage";


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
    const stateItem = localStorage.getItem("lan");
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
      payload: { key:updatedState.key , language: updatedState.language },
    });
  }, []);

  //USEEFFCET
  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem(
        "lan",
        JSON.stringify({ ...state, key:state.key , language: state.language })
      );
    }
  }, [state]);

  //RETURN
  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  );
}

//useAppContext
export function useAppContext() {
  return useContext(appContext);
}
