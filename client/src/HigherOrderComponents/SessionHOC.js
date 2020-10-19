import React from 'react';
import { connect } from 'react-redux';
import { createSession, destroySession, createUser } from '../actions/sessionActions';

function SessionHOC(Component) {
  const mapStateToProps = (state) => ({});
  const mapDispatchToProps = {
    createSession,
    destroySession,
    createUser,
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )((props) => {
    function signIn(credentials) {
      props.createSession(credentials);
    }
    function signOut() {
      props.destroySession();
      props.history.push('/');
    }
    function signUp(newUser) {
      props.createUser(newUser);
    }
    return <Component {...props} onSignIn={signIn} onSignUp={signUp} onSignOut={signOut} />;
  });
}

export default SessionHOC;
