//import React with useState
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

// importing styles for sign up form
import { InputStyle } from "./FormStyles/InputStyle";
import { LabelStyle } from "./FormStyles/LabelStyle";
import { LgSgButtonStyle } from "./FormStyles/LgSgButtonStyle";
import { FormStyle } from "./FormStyles/FormStyle";

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
  function submitSignup() {
    axios
      .post("https://reqres.in/api/users/", userInfo)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  // react hook form
  const { register, handleSubmit, errors } = useForm();
  console.log(errors);

  // layout of the register form
  return (
    // Form Style
    <FormStyle onSubmit={handleSubmit(submitSignup)}>
      <LabelStyle htmlFor="email">Email</LabelStyle>
      <InputStyle
        id="email"
        type="email"
        name="email"
        onChange={handleChanges}
        placeholder="medseed@me.com"
        value={userInfo.email}
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />

      <LabelStyle htmlFor="username">Username</LabelStyle>
      <InputStyle
        id="username"
        type="text"
        name="username"
        onChange={handleChanges}
        placeholder="username"
        value={userInfo.username}
        ref={register({ required: true, maxLength: 100 })}
      />

      <LabelStyle htmlFor="password">Password</LabelStyle>
      <InputStyle
        id="password"
        type="password"
        name="password"
        onChange={handleChanges}
        placeholder="password"
        value={userInfo.password}
        ref={register({ required: true, minLength: 6, maxLength: 12 })}
      />

      <LgSgButtonStyle type="submit">Sign Up</LgSgButtonStyle>
    </FormStyle>
  );
};

export default RegisterForm;
