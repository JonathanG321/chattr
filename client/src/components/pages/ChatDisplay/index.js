import React, { Component } from 'react';
import UserAvatar from '../../common/UserAvatar';
import MessageForm from '../../common/MessageForm';
import RoomHOC from '../../../HigherOrderComponents/RoomHOC';
import '../styles.scss';

export class ChatDisplay extends Component {
  render() {
    const { user, sendMessage, currentRoom, changeRoom, rooms } = this.props;
    return (
      <main className="max-height">
        <nav className="navbar">
          <div className="user-display justify-center align-items-center">
            <h2 className="no-padding">
              <strong>{user.username}</strong>
            </h2>
            <UserAvatar user={user} />
          </div>
          <div className="room-display flex justify-center align-items-center">{currentRoom}</div>
        </nav>
        <div className="flex max-height-no-nav">
          <div className="rooms-nav flex align-items-center">
            <h2 className="chat-title">Chat Rooms</h2>
            <hr className="line-break" />
            <div className="width-80 height-80 rooms">
              {rooms.map((room) => {
                return (
                  <button
                    key={room.roomName}
                    className="button max-width"
                    onClick={() => changeRoom(room.roomName)}
                  >
                    {room.roomName}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="chat">
            <div className="message-box"></div>
            <div className="chat-form">
              <MessageForm onSubmit={sendMessage} roomName={currentRoom} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default RoomHOC(ChatDisplay);
