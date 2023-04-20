import React, { createContext, useContext, useReducer } from "react";
export const stateContext = createContext();
export const useStateContext = () => {
  useContext(stateContext);
};
const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <div>
      <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </stateContext.Provider>
    </div>
  );
};

export default StateProvider;
