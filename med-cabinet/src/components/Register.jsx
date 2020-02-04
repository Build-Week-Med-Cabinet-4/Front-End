//import React with useState
import React, { useState } from "react";

// importing styles for sign up form
import { FormDivStyle } from "./FormStyles/FormDivStyle";
import { InputStyle } from "./FormStyles/InputStyle";
import { LabelStyle } from "./FormStyles/LabelStyle";
import { LgSgConStyle } from "./FormStyles/LgSgConStyle";
import { LgSgButtonStyle } from "./FormStyles/LgSgButtonStyle";

// register form function.
const RegisterForm = props => {
  // store user info in the state variables
  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
    password: ""
  });

  // update what the user has typed into state upon the changes
  function handleChanges(event) {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  }

  // submit form for sign up
  function submitSignup(event) {
    event.preventDefault();
    props.addNewUser(userInfo);
    setUserInfo({ email: "", username: "", password: "" });
  }

  // layout of the register form
  return (
    // Container Style
    <LgSgConStyle>
      {/* Form Div Style */}
      <FormDivStyle>
        <form onSubmit={submitSignup}>
          <LabelStyle htmlFor="email">Email</LabelStyle>
          <InputStyle
            id="email"
            type="email"
            onChange={handleChanges}
            placeholder="medseed@me.com"
            value={userInfo.email}
          />

          <LabelStyle htmlFor="username">Username</LabelStyle>
          <InputStyle
            id="username"
            type="text"
            onChange={handleChanges}
            placeholder="username"
            value={userInfo.username}
          />

          <LabelStyle htmlFor="password">Password</LabelStyle>
          <InputStyle
            id="password"
            type="password"
            onChange={handleChanges}
            placeholder="password"
            value={userInfo.password}
          />

          <LgSgButtonStyle type="submit">Sign Up</LgSgButtonStyle>
        </form>
      </FormDivStyle>
    </LgSgConStyle>
  );
};

export default RegisterForm;
