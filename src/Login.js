import React, { useState } from "react";
//import css
import "./login.css";
//import images from my folder
import fbString from "../src/img/fb-strings.png";
import fbLogo from "../src/img/fb-logo-circle.png";
import { Button } from "@mui/material";
//import from firebase
import { auth, provider } from "./firebase";
import { useNavigate } from "react-router";

//import { useStateContext } from "./StateProvider";
//import { actionTypes } from "./reducer";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
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
        let user = result.user;
        setUser(user);
        if (user) {
          navigate("/main");
          console.log("user", user);
          console.log("result", result);
          console.log("resultUser", result.user.email);
        }
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
