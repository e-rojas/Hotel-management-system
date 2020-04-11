import React from 'react';
import 'materialize-css';
import SignupForm from '../components/SignupForm';
export default function Login() {
  const handleSignup = (e) => {
    const formData = new FormData(e.target);
    const user = {};
    e.preventDefault();
    for (let entry of formData.entries()) {
      user[entry[0]] = entry[1];
    }
    console.log(user);
    e.target.reset();
  };
  return (
    <>
      <div id="main-container" className="container vh-100">
        <div id="card" className="row">
          <div className="col s5 card-l-signup"></div>
          <div className="col s7 card-r">
            <h5>Hotel Signup</h5>
            <SignupForm handleSignup={handleSignup} />
          </div>
          <span className="pl-2">
            <a href="#/">
              <small>have an accout login</small>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
