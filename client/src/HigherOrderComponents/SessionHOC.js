import React from 'react';
import { connect } from 'react-redux';
import { createSession, destroySession, createUser } from '../actions/sessionActions';

function SessionHOC(Component) {
  const mapStateToProps = (state) => ({
    user: state.session.user,
    errors: state.session.errors,
  });
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
      return props.createSession(credentials);
    }
    function signOut() {
      return props.destroySession();
    }
    function signUp(newUser) {
      return props.createUser(newUser);
    }
    return <Component {...props} onSignIn={signIn} onSignUp={signUp} onSignOut={signOut} />;
  });
}

export default SessionHOC;
