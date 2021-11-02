import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './props/Parent';

const App = () => {
  return <div>
    <h1>Hi there!</h1>
    <Parent/>
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
