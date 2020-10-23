import React from 'react';
import { connect } from 'react-redux';
import { addRoom, addMessage, sendMessage } from '../actions/roomActions';

function RoomHOC(Component) {
  const mapStateToProps = (state) => ({
    rooms: state.rooms.rooms,
  });
  const mapDispatchToProps = {
    addRoom,
    addMessage,
    sendMessage,
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )((props) => {
    function addRoom(room) {
      return props.addRoom(room);
    }
    function addMessage(message) {
      return props.addMessage(message);
    }
    function sendMessage(message) {
      return props.sendMessage(message);
    }
    return (
      <Component {...props} addRoom={addRoom} sendMessage={sendMessage} addMessage={addMessage} />
    );
  });
}

export default RoomHOC;
