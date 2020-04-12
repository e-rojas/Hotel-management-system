import React from 'react';

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleLogin}>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mail</i>
                <input
                  name="email"
                  required
                  type="text"
                  id="autocomplete-input"
                  className="autocomplete"
                />
                <label>User Email</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">verified_user</i>
                <input
                  name="password"
                  required
                  type="text"
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
          <small className="red-text pl-3">{props.error} </small>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
