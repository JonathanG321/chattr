import React from 'react';
import PropTypes from 'prop-types';
import SessionHOC from '../../../HigherOrderComponents/SessionHOC';
import '../styles.scss';

function SignInPage(props) {
  const { onSignIn } = props;
  return (
    <div className="container">
      <h1>Sign In</h1>
      <form onSubmit={onSignIn}>
        <div>
          <label htmlFor="email">Email</label>
          <input className="form-item" type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className="form-item" type="password" name="password" />
        </div>
        <input className="button" type="submit" value="Login" />
      </form>
    </div>
  );
}

SignInPage.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

export default SessionHOC(SignInPage);
