import React from 'react';
import PropTypes from 'prop-types';
import SessionHOC from '../../../HigherOrderComponents/SessionHOC';
import '../styles.scss';

function SignUpPage(props) {
  const { onSignUp } = props;
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={onSignUp}>
        <div>
          <label htmlFor="username">Username</label>
          <input className="form-item" type="text" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className="form-item" type="email" name="email" />
        </div>
        <div>
          <label htmlFor="avatar">User Avatar</label>
          <input
            className="form-item"
            type="url"
            name="avatar"
            placeholder="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className="form-item" type="password" name="password" />
        </div>
        <div>
          <label htmlFor="password-confirmation">Password Confirmation</label>
          <input className="form-item" type="password" name="password-confirmation" />
        </div>
        <input className="button" type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

SignUpPage.propTypes = {
  onSignUp: PropTypes.func.isRequired,
};

export default SessionHOC(SignUpPage);
