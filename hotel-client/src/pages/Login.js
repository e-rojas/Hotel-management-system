import React from 'react';
import 'materialize-css';
import LoginForm from '../components/LoginForm';
export default function Login() {
  return (
    <body>
      <div id="main-container" className="container vh-100">
        <div id="card" className="row">
          <div className="col s5 card-l"></div>
          <div className="col s7 card-r">
            <h5>Hotel Login</h5>
            <LoginForm />
          </div>
          <span className="pl-2">
            <a href="#/">
              <small>Sign up to get an account</small>
            </a>
          </span>
        </div>
      </div>
    </body>
  );
}
