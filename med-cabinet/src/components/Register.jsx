import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import { FormDivStyle } from "./FormStyles/FormDivStyle";
import { InputStyle } from "./FormStyles/InputStyle";
import { LabelStyle } from "./FormStyles/LabelStyle";
import { LgSgConStyle } from "./FormStyles/LgSgConStyle";

const Register = () => {

    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
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
        .post('/api/auth/register', credentials)
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
    // Container Style
    <LgSgConStyle>
      {/* Form Div Style */}
      <FormDivStyle>
        <form onSubmit={Register}>
          <LabelStyle htmlFor="firstName">First Name</LabelStyle>
          <InputStyle
           type="text"
           name="firstName"
           placeholder="First Name"
           value={credentials.firstName}
           onChange={handleChanges}
           required
          />

          <LabelStyle htmlFor="lastName">Last Name</LabelStyle>
          <InputStyle
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={credentials.lastName}
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

          <button type="submit">Sign Up</button>
        </form>
      </FormDivStyle>
    </LgSgConStyle>
  );
  };

export default Register;