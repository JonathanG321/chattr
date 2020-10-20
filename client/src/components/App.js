import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store';
import { NotFoundPage, SignInPage, SignUpPage } from './pages';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/sign-in">
                <SignInPage />
              </Route>
              <Route exact path="/sign-up">
                <SignUpPage />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </main>
    );
  }
}

export default App;
