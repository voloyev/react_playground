import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import "./Person/Person.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 44 },
      { name: "Ann", age: 34 }
    ]
  };

  switchNameHangler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 44 },
        { name: "Anna", age: 34 }
      ]
    }); //    this.state.persons[0].name = "Maximus";
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 44 },
        { name: "Anna", age: 34 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1> Hi!!! </h1>
        <button
          style={style}
          onClick={this.switchNameHangler.bind(this, "Maxi!")}
        >
          Change name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbies:
          <li>wrestling</li>
          <li>swimming</li>
        </Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHangler.bind(this, "Max")}
          changed={this.nameChangedHandler}
        />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
