import React from 'react';
import { connect } from 'react-redux';
import { addRoom, sendMessage, changeRoom } from '../actions/roomActions';

function RoomHOC(Component) {
  const mapStateToProps = (state) => ({
    rooms: state.rooms.rooms,
    currentRoom: state.rooms.currentRoom,
    socket: state.socket.socket,
  });
  const mapDispatchToProps = {
    addRoom,
    changeRoom,
    sendMessage,
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )((props) => {
    function addRoom(room) {
      return props.addRoom(room);
    }
    function changeRoom(roomName) {
      return props.changeRoom(roomName);
    }
    function sendMessage(message) {
      console.log(message);
      props.socket.emit('message', message);
    }
    return (
      <Component {...props} changeRoom={changeRoom} addRoom={addRoom} sendMessage={sendMessage} />
    );
  });
}

export default RoomHOC;
