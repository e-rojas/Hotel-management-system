import React, { useState } from 'react';
import 'materialize-css';
import SignupForm from '../components/SignupForm';

import { handleFormData, axiosPost } from '../helpers';
export default function Login(props) {
  const [error, setError] = useState('');

  //::::::HANDLE SIGNUP

  const handleSignup = async (e) => {
    const user = await handleFormData(e);
    const response = await axiosPost('/guests/signup', user);
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
          <div className="col s5 card-l-signup">
            <span className="pl-2">
              <a href="/login">
                <small>have an accout login</small>
              </a>
            </span>
          </div>
          <div className="col s7 card-r">
            <h5>Hotel Signup</h5>
            <SignupForm handleSignup={handleSignup} />
            <small className="red-text pl-3"> {error} </small>
          </div>
        </div>
      </div>
    </>
  );
}
