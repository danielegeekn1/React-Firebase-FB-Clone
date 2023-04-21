import React from "react";
import { Route, Routes } from "react-router-dom";
//import App from "./App";
import Login from "./Login";
import Main from "./Main";
const RoutesSet = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default RoutesSet;
