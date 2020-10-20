import React from 'react';

function UserAvatar(props) {
  const { user } = props;
  return <img className="user-avatar" src={`${user.avatar}`} />;
}

export default UserAvatar;
