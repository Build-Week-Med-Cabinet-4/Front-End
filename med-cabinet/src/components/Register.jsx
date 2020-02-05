import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

// importing styles for sign up form
import { InputStyle } from "./FormStyles/InputStyle";
import { LabelStyle } from "./FormStyles/LabelStyle";
import { LgSgButtonStyle } from "./FormStyles/LgSgButtonStyle";
import { FormStyle } from "./FormStyles/FormStyle";


const Register = () => {

    const [credentials, setCredentials] = useState({
        full_name: '',
        username: '',
        email: '',
        password: ''
    });

    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState('');

    const handleChanges = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        console.log('credentials from registration component', credentials);
    };

    let history = useHistory();
    const register = e => {
        e.preventDefault();
        setFetching(true);
        axiosWithAuth()
        .post('/auth/register', credentials)
        .then(res => {
            console.log(res.data);
            history.push('/login');
        })
        .catch(err => console.log(err));
    };

  // submit form for sign up

  // function submitSignup(event) {
  //   event.preventDefault();
  //   setUserInfo({ email: "", username: "", password: "" });
  // }

  // layout of the register form
  return (
  
  
    <FormStyle onSubmit={register}>
      <LabelStyle htmlFor="firstName">Full Name</LabelStyle>
      <InputStyle
       type="text"
       name="full_name"
       placeholder="Full Name"
       value={credentials.full_name}
       onChange={handleChanges}
       required
      />

<LabelStyle htmlFor="username">Username</LabelStyle>
      <InputStyle
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChanges}
        required
      />

      <LabelStyle htmlFor="email">Email</LabelStyle>
      <InputStyle
        type="text"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChanges}
        required
      />

<LabelStyle htmlFor="password">Password</LabelStyle>
      <InputStyle
        type="text"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChanges}
        required
      />


      <LgSgButtonStyle type="submit">Sign Up</LgSgButtonStyle>
    </FormStyle>
  );
  };

export default Register;

