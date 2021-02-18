import './App.css';
import React, {Component} from 'react';
import Person from './Person/Person';

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

  render() {
    return (
      <div className="App">
        <h1>This is React App</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >He is amazing guy!!</Person>
      </div>

        //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is react JSX'))

    );
  }
}

export default App;
