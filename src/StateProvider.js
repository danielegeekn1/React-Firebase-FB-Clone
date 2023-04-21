import React, { createContext, useContext, useReducer } from "react";

export const stateContext = createContext({});

const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <>
      <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </stateContext.Provider>
    </>
  );
};
export const useStateContext = () => {
  useContext(stateContext);
};
export default StateProvider;
