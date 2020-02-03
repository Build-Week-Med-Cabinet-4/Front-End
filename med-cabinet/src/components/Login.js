import React from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
    }

    axiosWithAuth()
    .post('/api/auth/login', credentials)
    .then(res => {
        console.log(res);
        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            history.push('/')
        } else {
            setError('Login failed');
        }
    })
    .catch(err => console.log(err));

};