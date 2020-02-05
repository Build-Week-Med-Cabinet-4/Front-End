//import React with useState
import React, { useState } from "react";
import axios from "axios";

// importing styles for login form
import { InputStyle } from "./FormStyles/InputStyle";
import { LabelStyle } from "./FormStyles/LabelStyle";
import { LgSgButtonStyle } from "./FormStyles/LgSgButtonStyle";
import { FormStyle } from "./FormStyles/FormStyle";

// login form function.
const LoginForm = props => {
  // store user info in the state variables
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });

  // update what the user has typed into state upon the changes
  const handleChanges = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  // submit form for login
  function submitLogin(event) {
    event.preventDefault();

    axios
      .post("https://reqres.in/api/users/", userInfo)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  // layout of the login form
  return (
    // Form Style
    <FormStyle onSubmit={submitLogin}>
      <LabelStyle htmlFor="email">Email</LabelStyle>
      <InputStyle
        id="email"
        type="email"
        name="email"
        onChange={handleChanges}
        placeholder="medseed@me.com"
        value={userInfo.email}
      />

      <LabelStyle htmlFor="password">Password</LabelStyle>
      <InputStyle
        id="password"
        type="password"
        name="password"
        onChange={handleChanges}
        placeholder="password"
        value={userInfo.password}
      />

      <LgSgButtonStyle type="submit">Login</LgSgButtonStyle>
    </FormStyle>
  );
};

export default LoginForm;
