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
    otherState: 'some other value',
    showPersons: false
  }

switchNameHandler = (newName) => {
  //console.log('Was clicked!')
  // DON'T DO THIS: this.state.persons[0].name = "AnkurVaseashta";
  this.setState({
    persons: [
     { name: newName, age: 33 },
     { name: 'Helena', age: 30 },
     { name: 'Buggy', age: 15 }
    ]
  } )
}

nameChangedHandler = (event) => {
  this.setState({
    persons: [
     { name: 'Ankur', age: 53 },
     { name: event.target.value, age: 50 },
     { name: 'Buggy', age: 55 }
    ]
  } )
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {

    const style ={
      backgroudColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Hi, I am a react app!! </h1>
        <p> This is really working! </p>
        <button
        style={style} 
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
          { 
           this.state.showPersons === true ? 
            <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Ankur!!')}
              changed={this.nameChangedHandler} >My Hobbies: Coding</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div> : null
          }
      </div>
    );
    ///*return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a react app!!!'));*/
  }
}

export default App;
