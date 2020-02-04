//import React with useState
import React, { useState } from "react";

// importing styles for login form
import { FormDivStyle } from "./FormStyles/FormDivStyle";
import { InputStyle } from "./FormStyles/InputStyle";
import { LabelStyle } from "./FormStyles/LabelStyle";
import { LgSgConStyle } from "./FormStyles/LgSgConStyle";
import { LgSgButtonStyle } from "./FormStyles/LgSgButtonStyle";

// login form function.
const LoginForm = props => {
  // store user info in the state variables
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });

  // update what the user has typed into state upon the changes
  function handleChanges(event) {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  }

  // submit form for login
  function submitLogin(event) {
    event.preventDefault();
    props.addNewUser(userInfo);
    setUserInfo({ email: "", password: "" });
  }

  // layout of the login form
  return (
    // Container Style
    <LgSgConStyle>
      {/* Form Div Style */}
      <FormDivStyle>
        <form onSubmit={submitLogin}>
          <LabelStyle htmlFor="email">Email</LabelStyle>
          <InputStyle
            id="email"
            type="email"
            onChange={handleChanges}
            placeholder="medseed@me.com"
            value={userInfo.email}
          />

          <LabelStyle htmlFor="password">Password</LabelStyle>
          <InputStyle
            id="password"
            type="password"
            onChange={handleChanges}
            placeholder="password"
            value={userInfo.password}
          />

          <LgSgButtonStyle type="submit">Login</LgSgButtonStyle>
        </form>
      </FormDivStyle>
    </LgSgConStyle>
  );
};

export default LoginForm;
