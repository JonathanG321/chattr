import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import MyComponent from './components/MyComponent';
import store from '../store';
import { NotFoundPage, SignInPage, SignUpPage } from './pages';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
        {/* <MyComponent /> */}
      </Provider>
    );
  }
}

export default App;
