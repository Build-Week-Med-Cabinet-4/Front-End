
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { FormStyle } from './FormStyles/FormStyle'
import { InputStyle } from "./FormStyles/InputStyle";
import { LabelStyle } from "./FormStyles/LabelStyle";
import { LgSgButtonStyle } from "./FormStyles/LgSgButtonStyle";

const Login = () => {
    const [credentials, setCredentials] = useState ({
        username: '',
        password: ''
    });
    const [fetching, setFetching ] = useState(false);
    const [error, setError] = useState('');
    
    const handleChanges = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        console.log('credentials from login', credentials);
    };
  
    let history = useHistory();
    const login = e => {
        e.preventDefault();
        setFetching(true);
        axiosWithAuth()
        .post('/auth/login', credentials)
        .then(res => {
            console.log(res);
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                history.push('/profile')
            } else {
                setError('Login failed');
            }
        })
        .catch(err => console.log(err));
    };

  



 // layout of the login form
 return (
    // Container Style
    <FormStyle onSubmit={login}>
      <LabelStyle htmlFor="username">Username</LabelStyle>
      <InputStyle
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
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


      <LgSgButtonStyle type="submit">Sign in</LgSgButtonStyle>
    </FormStyle>
  );
};
export default Login;