//import React with useState
import React, { useState } from "react";

// importing styles for login form
import { FormDivStyle } from "./FormStyles/FormDivStyle";
import { InputStyle } from "./FormStyles/InputStyle";
import { LabelStyle } from "./FormStyles/LabelStyle";
import { LgSgConStyle } from "./FormStyles/LgSgConStyle";

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
    <div>
      {/* Form Div Style */}
      <div>
        <form onSubmit={submitLogin}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={handleChanges}
            placeholder="medseed@me.com"
            value={userInfo.email}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={handleChanges}
            placeholder="password"
            value={userInfo.password}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
