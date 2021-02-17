import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

function App() {
  return (
    // <div className="App">
    //   <h1>This is React App</h1>
    // </div>

      React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is react JSX'))

  );
}

export default App;
