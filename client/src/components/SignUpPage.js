import React from 'react';
import PropTypes from 'prop-types';
import { withRouterPropTypes } from '../PropTypes/withRouterPropTypes';
import SessionHOC from '../HigherOrderComponents/SessionHOC';

function SignUpPage(props) {
  const { onSignUp } = props;
  return (
    <div className="ml-3 mr-3 mt-2">
      <h1>Sign Up</h1>
      <form onSubmit={onSignUp}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="avatar">User Avatar</label>
          <input
            type="url"
            name="avatar"
            placeholder="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label htmlFor="password-confirmation">Password Confirmation</label>
          <input type="password" name="password-confirmation" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

SignUpPage.propTypes = {
  onSignUp: PropTypes.func.isRequired,
};

export default SessionHOC(SignUpPage);
