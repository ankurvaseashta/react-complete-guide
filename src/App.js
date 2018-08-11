import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
     { name: 'Ankur', age: 33 },
     { name: 'Helena', age: 30 },
     { name: 'Buddy', age: 14 }
    ],
    otherState: 'some other value'
  }

switchNameHandler = () => {
  //console.log('Was clicked!')
  // DON'T DO THIS: this.state.persons[0].name = "AnkurVaseashta";
  this.setState({
    persons: [
     { name: 'Ankur', age: 33 },
     { name: 'Helena', age: 30 },
     { name: 'Buggy', age: 15 }
    ]
  } )
}

  render() {
    return (
      <div className="App">
        <h1> Hi, I am a react app!! </h1>
        <p> This is really working! </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
    ///*return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a react app!!!'));*/
  }
}

export default App;
