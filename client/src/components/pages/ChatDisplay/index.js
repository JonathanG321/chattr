import React, { Component } from 'react';
import UserAvatar from '../../common/UserAvatar';
import MessageForm from '../../common/MessageForm';
import RoomHOC from '../../../HigherOrderComponents/RoomHOC';
import '../styles.scss';

export class ChatDisplay extends Component {
  render() {
    const { user, addMessage, sendMessage, addRoom, currentRoom } = this.props;
    // sendMessage('hello');
    return (
      <main className="max-height">
        <nav className="navbar">
          <div className="user-display justify-center align-items-center">
            <h2 className="no-padding">
              <strong>{user.username}</strong>
            </h2>
            <UserAvatar user={user} />
          </div>
          <div className="room-display">{currentRoom}</div>
        </nav>
        <div className="flex max-height-no-nav">
          <div className="rooms-nav"></div>
          <div className="chat">
            <div className="message-box"></div>
            <div className="chat-form">
              <MessageForm onSubmit={sendMessage} username={user.username} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default RoomHOC(ChatDisplay);
