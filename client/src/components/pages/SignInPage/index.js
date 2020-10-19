import React from 'react';
import PropTypes from 'prop-types';
import SessionHOC from '../../../HigherOrderComponents/SessionHOC';

function SignInPage(props) {
  const { onSignIn } = props;
  return (
    <div className="ml-3 mr-3 mt-2">
      <h1>Sign In</h1>
      <form onSubmit={onSignIn}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

SignInPage.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

export default SessionHOC(SignInPage);
