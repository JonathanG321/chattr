import React from 'react';
import SessionHOC from '../HigherOrderComponents/SessionHOC';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onMessage = this.onMessage.bind(this);
  }

  onMessage(message) {
    console.log(message);
  }

  render() {
    return (
      <div>
        <h1>React Socket.io Demo.</h1>
        <button onClick={this.props.createSession}>Sign In</button>
      </div>
    );
  }
}

export default SessionHOC(SessionHOC(MyComponent));
