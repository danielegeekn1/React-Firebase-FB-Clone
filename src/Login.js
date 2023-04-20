import React from "react";
//import css
import "./login.css";
//import images from my folder
import fbString from "../src/img/fb-strings.png";
import fbLogo from "../src/img/fb-logo-circle.png";
import { Button } from "@mui/material";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img src={fbLogo} alt="fbLogo" />
        <img src={fbString} alt="fbString" />
      </div>
      <Button type="submit" onSubmit={handleSubmit} className="button">
        Sign in
      </Button>
    </div>
  );
};

export default Login;
