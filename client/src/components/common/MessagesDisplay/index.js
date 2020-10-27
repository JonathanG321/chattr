import React from 'react';
import PropTypes from 'prop-types';
import UserMessage from '../UserMessage';
import './styles.scss';

function MessagesDisplay(props) {
  const { user, messages } = props;
  return (
    <div className="messages-display max-height flex">
      {messages.map((message) => {
        if (!message.isAlert) {
          return (
            <div
              key={`${message.message} ${message.user.username} ${message.date}`}
              className="message-container"
            >
              <UserMessage
                message={message}
                isCurrentUser={user.username === message.user.username}
              />
            </div>
          );
        }
        return (
          <div
            key={`${message.message} ${message.user.username} ${message.date}`}
            className="message-container flex justify-center align-items-center"
          >
            <div className="alert-message">{message.message}</div>
          </div>
        );
      })}
    </div>
  );
}

MessagesDisplay.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired,
      message: PropTypes.string.isRequired,
    }),
  ),
};

export default MessagesDisplay;
