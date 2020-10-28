import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

function MessageForm(props) {
  const { onSubmit, roomName, isDisabled = false } = props;
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
      <form
        className="flex max-height"
        disabled={isDisabled}
        onKeyPress={handleSubmitEnter}
        onSubmit={handleSubmit}
      >
        <div className={classnames('message-text', 'flex', 'justify-center', 'align-items-center')}>
          <textarea
            disabled={isDisabled}
            className={classnames('form-item', 'text', {
              disabled: isDisabled,
            })}
            name="message"
          />
        </div>
        <div
          className={classnames('message-submit', 'flex', 'justify-center', 'align-items-center')}
        >
          <input
            disabled={isDisabled}
            type="submit"
            className={classnames('button', {
              disabled: isDisabled,
            })}
            value="Send Message"
          />
        </div>
      </form>
    </div>
  );
}

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MessageForm;
