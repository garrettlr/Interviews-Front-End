import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
const dest = document.getElementById('content');

ReactDOM.render(
  <div>
    <App />
  </div>,
  dest
);

window.React = React; // enable debugger
