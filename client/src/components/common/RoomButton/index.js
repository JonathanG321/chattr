import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNotification: false,
    };
  }
  render() {
    const { room, changeRoom } = this.props;
    const { displayNotification } = this.state;
    return (
      <button
        className="button max-width flex align-items-center justify-center"
        onClick={() => changeRoom(room.roomName)}
      >
        <span className="width-80">
          {!!room.displayRoomName ? room.displayRoomName : room.roomName}
        </span>
        {displayNotification && <span className="red-text no-width">⦿</span>}
      </button>
    );
  }
}

RoomButton.propTypes = {
  room: PropTypes.shape({
    roomName: PropTypes.string.isRequired,
    displayRoomName: PropTypes.string,
  }).isRequired,
  changeRoom: PropTypes.func.isRequired,
};

export default RoomButton;
