import React, { useState } from 'react';
import 'materialize-css';
import LoginForm from '../components/LoginForm';
import { handleFormData, axiosPost } from '../helpers';

export default function Login(props) {
  const [error, setError] = useState('');
  const handleLogin = async (e) => {
    const user = await handleFormData(e);
    const response = await axiosPost('/guests/login', user);
    if (response.data.error) {
      setError(response.data.error);
    } else {
      localStorage.setItem('token', response.data.token);
      props.history.push('/');
    }
  };
  return (
    <>
      <div id="main-container" className="container vh-100">
        <div id="card" className="row">
          <div className="col s5 card-l"></div>
          <div className="col s7 card-r">
            <h5>Hotel Login</h5>
            <LoginForm error={error} handleLogin={handleLogin} />
          </div>
          <span className="pl-2">
            <a href="/signup">
              <small>Sign up to get an account</small>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
