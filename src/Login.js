import React from "react";
//import css
import "./login.css";
//import images from my folder
import fbString from "../src/img/fb-strings.png";
import fbLogo from "../src/img/fb-logo-circle.png";
import { Button } from "@mui/material";
//import from firebase
import { auth, provider } from "./firebase";
//import { actionTypes } from "./reducer";
//import { useStateContext } from "./StateProvider";
const Login = () => {
  //const [state, dispatch] = useStateContext();
  const handleSignIn = (e) => {
    e.preventDefault();
    //sign in logic with firebase
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /*
        dispatch({
          type: actionTypes.Set_User,
          user: result.user,
        });

        console.log(result, state);
        */
        console.log("result", result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img src={fbLogo} alt="fbLogo" />
        <img src={fbString} alt="fbString" />
      </div>
      <Button type="submit" onClick={handleSignIn} className="button">
        Sign in
      </Button>
    </div>
  );
};

export default Login;
