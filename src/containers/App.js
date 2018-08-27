import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
    persons: [
     { id: 'abcd', name: 'Ankur', age: 33 },
     { id: 'abce', name: 'Helena', age: 30 },
     { id: 'abcf', name: 'Buddy', age: 4 },
     { id: 'abcg', name: 'Valentina', age: 4 }
    ],
    otherState: 'some other value',
    showPersons: false
    };
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }
  
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  //   //return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //    { id: 'abcd', name: 'Ankur', age: 33 },
  //    { id: 'abce', name: 'Helena', age: 30 },
  //    { id: 'abcf', name: 'Buddy', age: 4 },
  //    { id: 'abcg', name: 'Valentina', age: 4 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

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

  // const person Object.assign({}, this.state.persons[personIndex]);
  const person = {
    ...this.state.persons[personIndex]
  };


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
    console.log('[App.js] Inside render()');
    let persons = null;

    if( this.state.showPersons ){
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>show Persons</button>
        <Cockpit
        appTitle={this.props.title} 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler} />
        {persons}
      </div>

    );
  }
}

export default App;
