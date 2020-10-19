import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SessionHOC from '../../../HigherOrderComponents/SessionHOC';
import withRouterPropTypes from '../../../PropTypes/withRouterPropTypes';
import '../styles.scss';

function SignUpPage(props) {
  const { onSignUp } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newUser = {
      username: formData.get('username'),
      email: formData.get('email'),
      avatar: formData.get('avatar'),
      password: formData.get('password'),
      passwordConfirmation: formData.get('password-confirmation'),
    };
    onSignUp(newUser).then((user, errors) => {
      if (user.id && !errors) {
        props.history.push('/');
      } else {
        alert('Sign Up Failed');
      }
    });
  }
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
  ...withRouterPropTypes(),
  onSignUp: PropTypes.func.isRequired,
};

export default withRouter(SessionHOC(SignUpPage));
