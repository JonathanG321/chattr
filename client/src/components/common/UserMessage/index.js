import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UserAvatar from '../UserAvatar';
import './styles.scss';

function UserMessage(props) {
  const { isCurrentUser, message } = props;
  return (
    <div
      className={classnames('max-height', 'flex', 'user-message', {
        'current-user-message': isCurrentUser,
      })}
    >
      <div>
        <div>
          <strong>{message.user.username}</strong>
        </div>
        <div
          className={classnames('message-content', {
            'current-user-message-content': isCurrentUser,
          })}
        >
          {message.message}
        </div>
      </div>
      <div className="margin-15">
        <UserAvatar user={message.user} />
      </div>
    </div>
  );
}

UserMessage.propTypes = {
  isCurrentUser: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserMessage;
