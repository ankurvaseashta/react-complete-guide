import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
     { name: 'Ankur', age: 33 },
     { name: 'Helena', age: 30 },
     { name: 'Buddy', age: 4 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I am a react app!! </h1>
        <p> This is really working! </p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //Gets compiled to this code:
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a react app!!!'));
  }
}

export default App;
