import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>This is React App</h1>
      <Person name="Tushar" age="29" />
      <Person name="Anshdeep" age="27" />
    </div>

      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is react JSX'))

  );
}

export default App;
