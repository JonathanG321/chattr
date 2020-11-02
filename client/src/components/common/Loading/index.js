import React from 'react';
import Fa from '../Fa';

function Loading() {
  return (
    <div className="loading">
      <Fa kind="spinner" size="5x" pulse={true} />
    </div>
  );
}

export default Loading;
