import React from 'react';
import { connect } from 'react-redux';
import { changeRoom, addMessage } from '../actions/roomActions';

function RoomHOC(Component) {
  const mapStateToProps = (state) => ({
    rooms: state.rooms.rooms,
    currentRoom: state.rooms.currentRoom,
    socket: state.socket.socket,
  });
  const mapDispatchToProps = {
    changeRoom,
    addMessage,
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )((props) => {
    function changeRoom(roomName) {
      return props.changeRoom(roomName);
    }
    function sendMessage(message) {
      props.socket.emit('message', message);
      return props.addMessage(message);
    }
    return <Component {...props} changeRoom={changeRoom} sendMessage={sendMessage} />;
  });
}

export default RoomHOC;
