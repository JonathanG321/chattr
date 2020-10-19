import React from 'react';
import { withRouter } from 'react-router-dom';
import { createSession, destroySession, createUser } from '../actions/sessionActions';

function SessionHOC(Component) {
  const mapStateToProps = (state) => ({});
  const mapDispatchToProps = {
    createSession,
    destroySession,
    createUser,
  };
  return withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )((props) => {
      function signIn(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const credentials = {
          email: formData.get('email'),
          password: formData.get('password'),
        };
        props.createSession(credentials).then(({ user, errors }) => {
          if (user.id && !errors) {
            props.history.push('/');
          } else {
            alert('Login Failed');
          }
        });
      }
      function signOut() {
        props.destroySession();
        props.history.push('/');
      }
      function signUp(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newUser = {
          username: formData.get('username'),
          email: formData.get('email'),
          avatar: formData.get('avatar'),
          password: formData.get('password'),
          passwordConfirmation: formData.get('password-confirmation'),
        };
        props.createUser(newUser).then(({ user, errors }) => {
          if (user.id && !errors) {
            props.history.push('/');
          } else {
            alert('Sign Up Failed');
          }
        });
      }
      return <Component {...props} onSignIn={signIn} onSignUp={signUp} onSignOut={signOut} />;
    }),
  );
}

export default SessionHOC;
