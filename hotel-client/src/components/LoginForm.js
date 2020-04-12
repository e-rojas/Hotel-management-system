import React from 'react';

const LoginForm = () => {
  return (
    <>
      <form>
        <div class="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mail</i>
                <input
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
                  required
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
    </>
  );
};

export default LoginForm;
