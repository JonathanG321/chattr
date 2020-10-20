import React from 'react';

function ErrorMessage(props) {
  const { errors, type } = props;
  console.log(errors);
  if (errors) {
    return errors.map((error) => {
      if (error.path === type) {
        return (
          <p className="error" key={error.message}>
            {error.message}
          </p>
        );
      }
      return null;
    });
  }
  return null;
}

export default ErrorMessage;
