import React from "react";
import ReactDOM from "react-dom/client";

//import reducer, { initialState } from "./reducer";
//import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
//import Login from "./Login";
import App from "./App";
//import StateProvider from "./StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/*
    <StateProvider reducer={reducer} initialState={initialState}>
     
    </StateProvider>*/}
  </React.StrictMode>
);
