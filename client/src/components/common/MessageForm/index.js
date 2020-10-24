import React from 'react';
import PropTypes from 'prop-types';

function MessageForm(props) {
  const { onSubmit, roomName, username } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = {
      message: formData.get('message'),
      roomName,
      username,
    };
    event.currentTarget.reset();
    onSubmit(message);
  }
  return (
    <div className="max-height">
      <form className="flex max-height" onSubmit={handleSubmit}>
        <div className="message-text flex justify-center align-items-center">
          <input className="form-item text" type="textarea" name="message" />
        </div>
        <div className="message-submit flex justify-center align-items-center">
          <input type="submit" className="button" value="Send Message" />
        </div>
      </form>
    </div>
  );
}

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MessageForm;