import React from 'react';
import PropTypes from 'prop-types';

function MessageForm(props) {
  const { onSubmit, roomName } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = {
      message: formData.get('message'),
      roomName,
      date: new Date(),
    };
    event.currentTarget.reset();
    if (!message.message) {
      return;
    }
    onSubmit(message);
  }
  function handleSubmitEnter(event) {
    event.persist();
    if (event.charCode === 13 && !event.shiftKey) {
      handleSubmit(event);
    }
  }
  return (
    <div className="max-height">
      <form className="flex max-height" onKeyPress={handleSubmitEnter} onSubmit={handleSubmit}>
        <div className="message-text flex justify-center align-items-center">
          <textarea className="form-item text" name="message" />
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
