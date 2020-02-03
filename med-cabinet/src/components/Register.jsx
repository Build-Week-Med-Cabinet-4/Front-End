import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';

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
        setIsFetching(true);
        axiosWithAuth()
        .post('/api/auth/register', credentials)
        .then(res => {
            console.log(res.data);
            history.push('/login');
        })
        .catch(err => console.log(err));
    };
}

export default Register;