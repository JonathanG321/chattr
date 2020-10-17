import React from 'react';

export default class MyComponent extends React.Component {
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
      </div>
    );
  }
}
