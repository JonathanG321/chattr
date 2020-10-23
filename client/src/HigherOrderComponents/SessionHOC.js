import React from 'react';
import { connect } from 'react-redux';
import {
  createSession,
  destroySession,
  createUser,
  getCurrentUser,
} from '../actions/sessionActions';

function SessionHOC(Component) {
  const mapStateToProps = (state) => ({
    user: state.session.user,
    errors: state.session.errors,
    isLoading: state.session.isLoading,
  });
  const mapDispatchToProps = {
    createSession,
    destroySession,
    createUser,
    getCurrentUser,
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
    function getCurrentUser() {
      return props.getCurrentUser();
    }
    return (
      <Component
        {...props}
        getCurrentUser={getCurrentUser}
        onSignIn={signIn}
        onSignUp={signUp}
        onSignOut={signOut}
      />
    );
  });
}

export default SessionHOC;
