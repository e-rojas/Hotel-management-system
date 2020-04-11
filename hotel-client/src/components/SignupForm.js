import React from 'react';

const LoginForm = ({ handleSignup }) => {
  return (
    <>
      <form onSubmit={handleSignup}>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">person</i>
                <input
                  name="name"
                  type="text"
                  id="autocomplete-input"
                  className="autocomplete"
                />
                <label>User Name</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">mail</i>
                <input
                  name="email"
                  type="email"
                  id="autocomplete-input"
                  className="autocomplete"
                />
                <label>User Email</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">verified_user</i>
                <input
                  name="password"
                  type="password"
                  id="autocomplete-input"
                  className="autocomplete"
                />
                <label>User Password</label>
                <button
                  className="btn waves-effect waves-light btn-small right"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
