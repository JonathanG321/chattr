import React, { Component } from 'react';
import UserAvatar from '../../common/UserAvatar';
import '../styles.scss';

export class ChatDisplay extends Component {
  render() {
    const { user } = this.props;
    return (
      <main className="max-height">
        <nav className="navbar">
          <div className="user-display justify-center align-items-center">
            <h2 className="no-padding">
              <strong>{user.username}</strong>
            </h2>
            <UserAvatar user={user} />
          </div>
          <div className="room-display"></div>
        </nav>
        <div className="flex max-height-no-nav">
          <div className="rooms-nav"></div>
          <div className="chat"></div>
        </div>
      </main>
    );
  }
}

export default ChatDisplay;
