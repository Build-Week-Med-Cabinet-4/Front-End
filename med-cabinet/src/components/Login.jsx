
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { FormDivStyle } from "./FormStyles/FormDivStyle";
import { InputStyle } from "./FormStyles/InputStyle";
import { LabelStyle } from "./FormStyles/LabelStyle";
import { LgSgConStyle } from "./FormStyles/LgSgConStyle";
import { LgSgButtonStyle } from './FormStyles/LgSgButtonStyle';

const Login = () => {
    const [credentials, setCredentials] = useState ({
        email: '',
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
    .post('/api/auth/login', credentials)
    .then(res => {
        console.log(res);
        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            history.push('/home')
        } else {
            setError('Login failed');
        }
    })
    .catch(err => console.log(err));

};

 // layout of the login form
 return (
    // Container Style
    <LgSgConStyle>
      {/* Form Div Style */}
      <FormDivStyle>
        <form onSubmit={Login}>
          <LabelStyle htmlFor="email">Email</LabelStyle>
          <InputStyle
           type="email" 
           name="email" 
           placeholder="Email" 
           value={credentials.email} 
           onChange={handleChanges} required
          />

          <LabelStyle htmlFor="password">Password</LabelStyle>
          <InputStyle
           type="password"
           name="password" 
           placeholder="Password" 
           value={credentials.password} 
           onChange={handleChanges} required
          />

          <LgSgButtonStyle type="submit">Login</LgSgButtonStyle>
        </form>
      </FormDivStyle>
    </LgSgConStyle>
  );

 };
export default Login;