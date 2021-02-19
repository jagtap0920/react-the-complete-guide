import './App.css';
import React, {Component} from 'react';
import Person from './Person/Person';
import UseStateHook from './components/UseStateHook';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {name: 'Tushar', age:29},
        {name: 'Anshdeep', age:28},
      ]
    }
  }

  switchNameHandler = () => {
    console.log('Event triggered');
  }

  render() {
    return (
      <div className="App">
        <h1>This is React App</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >He is amazing guy!!</Person>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <hr />

        <UseStateHook />
        <hr />


      </div>
    );
  }
}

export default App;
