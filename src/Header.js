import React from "react";
//import images from my folder
import fbString from "./img/facebook-string.jpeg";
//import css
import "../src/header.css";
//import from material ui
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src={fbString} alt="fb-string-logo" />
      </div>
      <div className="header_middle">
        <div className="header_input">
          <SearchIcon fontSize="large" />
          <input type="text" placeholder="Search from here" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_avatar">
          <Avatar />
          <h4>Daniele b.</h4>
        </div>
        <div className="header_options">
          <div className="header_option">
            <NotificationsIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
