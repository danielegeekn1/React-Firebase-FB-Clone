import { Avatar } from "@material-ui/core";
import React from "react";
//import css
import "./singleReel.css";
const SingleReel = ({ backgroundImg, srcImg, text }) => {
  return (
    <div
      className="singleReel"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Avatar src={srcImg} className="singleReel_avatar" />
      <h4>{text}</h4>
    </div>
  );
};

export default SingleReel;
