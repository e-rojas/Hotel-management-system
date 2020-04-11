import React from 'react';
import 'materialize-css';
export default function Login() {
  return (
    <body>
      <div id="main-container" className="container vh-100">
        <div id="card" className="row">
          <div className="col s5 card-l"></div>
          <div className="col s7 card-r">
            <h5>Hotel Login</h5>
            <form>
              <div class="row">
                <div className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">mail</i>
                      <input
                        type="text"
                        id="autocomplete-input"
                        className="autocomplete"
                      />
                      <label>User Email</label>
                    </div>
                    <div className="input-field col s12">
                      <i className="material-icons prefix">verified_user</i>
                      <input
                        type="text"
                        id="autocomplete-input"
                        className="autocomplete"
                      />
                      <label>User Password</label>
                      <button
                        class="btn waves-effect waves-light btn-small right"
                        type="submit"
                        name="action"
                      >
                        Submit
                        <i class="material-icons right">send</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <span className="pl-2 center-align">
            <a href="#/">
              <small>Sign up to get an account</small>
            </a>
          </span>
        </div>
      </div>
    </body>
  );
}
