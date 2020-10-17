import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSocket } from '../actions/socketActions';
import MyComponent from '../components/MyComponent';

export function SocketContainer(props) {
  return <MyComponent socket={props.socket} />;
}

SocketContainer.propTypes = {
  createSocket: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  socket: state.socket.socket,
});

const mapDispatchToProps = {
  createSocket,
};

export default connect(mapStateToProps, mapDispatchToProps)(SocketContainer);
