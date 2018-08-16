import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
     { id: 'abcd', name: 'Ankur', age: 33 },
     { id: 'abce', name: 'Helena', age: 30 },
     { id: 'abcf', name: 'Buddy', age: 14 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice(); Make copy of persons array
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  // const person Object.assign({}, this.state.persons[personIndex]);


  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState( {persons: persons} );
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if( this.state.showPersons ){
      persons = (
            <div>
            {this.state.persons.map((person, index) => {
              return <Person  
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
          </div> 
        );

        style.backgroundColor = 'red';
    }

    ///let classes = ['red', 'bold'].join(' '); ///array of strings seperated by a empty space using join "red bold"
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <=1){
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (

      <div className="App">
        <h1> Hi, I am a react app!! </h1>
        <p className={classes.join(' ')}> This is really working! </p>
        <button
        style={style} 
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
    ///*return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a react app!!!'));*/
  }
}

export default App;
