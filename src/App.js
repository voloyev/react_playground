import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
//42
class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 23
      },
      {
        name: 'Ann',
        age: 23
      },
      {
        name: 'Rob',
        age: 23
      }
    ]
  };

  switchNameHandler = () => {};

  render() {
    return (
      <div className="App">
        <h1> Hello! </h1>
        <p> Here p </p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobby: Noooo
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
