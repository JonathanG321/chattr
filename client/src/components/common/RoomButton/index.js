import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import notificationIcon from './notification.gif';
import './styles.scss';

function RoomButton(props) {
  const { room, changeRoom, displayNotification = false, isCurrentRoom } = props;
  return (
    <button
      className={classnames('button', 'max-width', 'flex', 'align-items-center', 'justify-center', {
        'current-room': isCurrentRoom,
      })}
      onClick={() => changeRoom(room.roomName)}
    >
      <span className="width-80">
        {!!room.displayRoomName ? room.displayRoomName : room.roomName}
      </span>
      {displayNotification && (
        <span className="red-text flex align-items-center no-width">
          <img className="notification-icon" src={notificationIcon} alt="Notification Icon" />
        </span>
      )}
    </button>
  );
}

RoomButton.propTypes = {
  room: PropTypes.shape({
    roomName: PropTypes.string.isRequired,
    displayRoomName: PropTypes.string,
  }).isRequired,
  changeRoom: PropTypes.func.isRequired,
  displayNotification: PropTypes.bool,
};

export default RoomButton;
