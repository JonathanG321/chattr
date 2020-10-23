import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFoundPage, SignInPage, SignUpPage, HomePage, ChatDisplay } from './pages';
import AuthRoute from './common/AuthRoute';
import Loading from './common/Loading';
import SessionHOC from '../HigherOrderComponents/SessionHOC';
import './App.scss';

class App extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }
  render() {
    const { user, isLoading } = this.props;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/sign-in">
            <SignInPage />
          </Route>
          <Route exact path="/sign-up">
            <SignUpPage />
          </Route>
          <AuthRoute isSignedIn={!!user && !!user.id} path="/chat">
            <ChatDisplay user={user} />
          </AuthRoute>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default SessionHOC(App);
