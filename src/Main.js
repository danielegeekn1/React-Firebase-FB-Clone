import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

const Main = () => {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="feed">
          <Feed />
        </div>
        <div className="widgets"></div>
        {/*Widgets*/}
      </div>
    </div>
  );
};

export default Main;
