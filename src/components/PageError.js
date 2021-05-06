import React, { Component } from 'react';

import './styles/PageError.css';

function PageError(props) {
  return <div className="PageError">{props.error.message} ❌</div>;
}

export default PageError;
