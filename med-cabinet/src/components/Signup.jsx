//import React with useState
import React, { useState } from "react";

// importing styles for sign up form
import { FormDivStyle } from "./FormStyles/FormDivStyle";
import { InputStyle } from "./FormStyles/InputStyle";
import { LabelStyle } from "./FormStyles/LabelStyle";
import { LgSgConStyle } from "./FormStyles/LgSgConStyle";

// register form function.
const SignupForm = props => {
  // store user info in the state variables
  const [userInfo, setUserInfo] = usesState({
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
    setUserInfo({ email: "", username: "", password: "" });
  }

  // layout of the register form
  return (
    // Container Style
    <LgSgConStyle>
      {/* Form Div Style */}
      <FormDivStyle>
        <form onSubmit={singupForm}>
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
            placeholder="medseed@me.com"
            value={userInfo.username}
          />

          <LabelStyle htmlFor="password">Password</LabelStyle>
          <InputStyle
            id="email"
            type="password"
            onChange={handleChanges}
            placeholder="medseed@me.com"
            value={userInfo.password}
          />

          <button type="submit">Sign Up</button>
        </form>
      </FormDivStyle>
    </LgSgConStyle>
  );
};
