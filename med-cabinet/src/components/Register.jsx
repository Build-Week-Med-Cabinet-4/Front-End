//import React with useState
import React, { useState } from "react";

// importing styles for sign up form
import { FormDivStyle } from "./FormStyles/FormDivStyle";
import { InputStyle } from "./FormStyles/InputStyle";
import { LgSgConStyle } from "./FormStyles/LgSgConStyle";
import { LgSgStyle } from "./FormStyles/LgSgStyle";

// register form function.
const RegisterForm = props => {
  // store user info in the state variables
  const [userInfo, setUserInfo] = usesState({
    email: "",
    username: "",
    password: ""
  });

  // update what the user has typed into state upon the changes
  function handleChange(event) {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  }

  // submit form for sign up
  function submitSignup(event) {
    event.preventDefault();
  }

  // layout of the register form
  return (
    <form onSubmit={singupForm}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        onChange="handleChanges"
        placeholder="medseed@me.com"
        value={userInfo.email}
      />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        onChange="handleChanges"
        placeholder="medseed@me.com"
        value={userInfo.username}
      />
      <label htmlFor="password">Password</label>
      <input
        id="email"
        type="password"
        onChange="handleChanges"
        placeholder="medseed@me.com"
        value={userInfo.password}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};
