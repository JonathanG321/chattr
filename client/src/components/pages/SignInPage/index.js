import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SessionHOC from '../../../HigherOrderComponents/SessionHOC';
import withRouterPropTypes from '../../../PropTypes/withRouterPropTypes';
import '../styles.scss';

function SignInPage(props) {
  const { onSignIn } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const credentials = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    onSignIn(credentials).then((user, errors) => {
      if (user.id && !errors) {
        props.history.push('/');
      } else {
        alert('Login Failed');
      }
    });
  }
  return (
    <div className="container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
  ...withRouterPropTypes(),
  onSignIn: PropTypes.func.isRequired,
};

export default withRouter(SessionHOC(SignInPage));
