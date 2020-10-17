import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MyComponent from './components/MyComponent';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <MyComponent />
      </Provider>
    );
  }
}

export default App;
