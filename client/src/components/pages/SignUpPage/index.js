import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SessionHOC from '../../../HigherOrderComponents/SessionHOC';
import { withRouterPropTypes } from '../../../PropTypes/withRouterPropTypes';
import '../styles.scss';

class SignUpPage extends Component {
  componentDidUpdate(oldProps) {
    if (oldProps.user === null && this.props.user && this.props.user.id) {
      this.props.history.push('/');
    }
  }
  render() {
    const { onSignUp, errors } = this.props;
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
      onSignUp(newUser);
    }
    return (
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">
              <strong>Username</strong>
            </label>
            <input className="form-item" type="text" name="username" />
            {errors &&
              errors.map((error) => {
                if (error.path === 'username') {
                  return (
                    <p className="error" key={error.message}>
                      {error.message}
                    </p>
                  );
                }
              })}
          </div>
          <div>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input className="form-item" type="email" name="email" />
            {errors &&
              errors.map((error) => {
                if (error.path === 'email') {
                  return (
                    <p className="error" key={error.message}>
                      {error.message}
                    </p>
                  );
                }
              })}
          </div>
          <div>
            <label htmlFor="avatar">
              <strong>User Avatar</strong>
            </label>
            <input
              className="form-item"
              type="url"
              name="avatar"
              placeholder="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
            />
            {errors &&
              errors.map((error) => {
                if (error.path === 'avatar') {
                  return (
                    <p className="error" key={error.message}>
                      {error.message}
                    </p>
                  );
                }
              })}
          </div>
          <div>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input className="form-item" type="password" name="password" />
            {errors &&
              errors.map((error) => {
                if (error.path === 'password') {
                  return (
                    <p className="error" key={error.message}>
                      {error.message}
                    </p>
                  );
                }
              })}
          </div>
          <div>
            <label htmlFor="password-confirmation">
              <strong>Password Confirmation</strong>
            </label>
            <input className="form-item" type="password" name="password-confirmation" />
            {errors &&
              errors.map((error) => {
                if (error.path === 'passwordConfirmation') {
                  return (
                    <p className="error" key={error.message}>
                      {error.message}
                    </p>
                  );
                }
              })}
          </div>
          <input className="button" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  ...withRouterPropTypes(),
  onSignUp: PropTypes.func.isRequired,
};

export default withRouter(SessionHOC(SignUpPage));
