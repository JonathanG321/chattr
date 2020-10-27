import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserAvatar from '../../common/UserAvatar';
import MessageForm from '../../common/MessageForm';
import MessagesDisplay from '../../common/MessagesDisplay';
import RoomHOC from '../../../HigherOrderComponents/RoomHOC';
import SessionHOC from '../../../HigherOrderComponents/SessionHOC';
import RoomButton from '../../common/RoomButton';
import './styles.scss';

export class ChatDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLogout: false,
    };
    this.clickUserIcon = this.clickUserIcon.bind(this);
    this.clickNotUserIcon = this.clickNotUserIcon.bind(this);
    this.logout = this.logout.bind(this);
  }
  clickUserIcon() {
    const { displayLogout } = this.state;
    if (displayLogout === false) {
      this.setState({
        displayLogout: true,
      });
    } else {
      this.setState({
        displayLogout: false,
      });
    }
  }
  clickNotUserIcon(event) {
    if (event.target.className !== 'user-avatar') {
      this.setState({
        displayLogout: false,
      });
    }
  }
  logout() {
    const { onSignOut, socket } = this.props;
    onSignOut();
    socket.disconnect();
    this.props.history.push('/');
  }
  render() {
    const { user, sendMessage, currentRoom, changeRoom, rooms, notifications } = this.props;
    const { displayLogout } = this.state;
    const fullCurrentRoom = rooms.find((room) => room.roomName === currentRoom);
    return (
      <main onClick={this.clickNotUserIcon} className="max-height">
        <nav className="navbar">
          <div className="user-display justify-center align-items-center">
            <h2 className="no-padding">
              <strong>{user.username}</strong>
            </h2>
            <div onClick={this.clickUserIcon} className="ml">
              <div className="user-avatar-container">
                <UserAvatar user={user} />
              </div>
              {displayLogout && (
                <div className="no-height relative logout-button">
                  <div onClick={this.logout} className="button">
                    Sign Out
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="room-display flex justify-center align-items-center">
            {!!fullCurrentRoom ? fullCurrentRoom.displayRoomName : currentRoom}
          </div>
        </nav>
        <div className="flex max-height-no-nav">
          <div className="rooms-nav flex align-items-center">
            <h2 className="chat-title">Chat Rooms</h2>
            <hr className="line-break" />
            <div className="width-80 height-80 rooms">
              {rooms.map((room) => {
                return (
                  <RoomButton
                    key={room.roomName}
                    isCurrentRoom={room.roomName === currentRoom}
                    displayNotification={notifications.some(
                      (notification) => notification === room.roomName,
                    )}
                    changeRoom={changeRoom}
                    room={room}
                  />
                );
              })}
            </div>
          </div>
          <div className="chat">
            <div className="message-box">
              {!!fullCurrentRoom && (
                <MessagesDisplay user={user} messages={fullCurrentRoom.messages} />
              )}
            </div>
            <div className="chat-form">
              <MessageForm onSubmit={sendMessage} roomName={currentRoom} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(SessionHOC(RoomHOC(ChatDisplay)));
