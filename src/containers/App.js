import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxi from '../hoc/Auxi';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
    persons: [
     { id: 'abcd', name: 'Ankur', age: 34, type: 'Human' },
     { id: 'abce', name: 'Helena', age: 31, type: 'Human'},
     { id: 'abcf', name: 'Buddy', age: 4, type: 'Dog' },
     { id: 'abcg', name: 'Valentina', age: 4, type: 'Cat' }
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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
    console.log('[UPDATE App.js] Inside componentWillUpdate', 
      nextProps, 
      nextState
      );
  }

  static getDerivedSateFromProps(nextProps, prevSate){
    console.log('[UPDATE App.js] Inside getDerivedSateFromProps', 
      nextProps, 
      prevSate
      );

    return prevSate;
  }

  getSnapshotBeforeUpdate(){
        console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate');
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
  this.setState( ( prevSate, props ) => {
    return{
      showPersons: !doesShow, 
      toggleClicked: prevSate.toggleClicked + 1
    }
  });
}

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if( this.state.showPersons ){
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}  />;
    }

    return (
    <Auxi>
        <button style={{width: 100, height: 50, margin: 20, color: '#4286f4', backgroundColor: '#f4f0eb'}} onClick={() => {this.setState({showPersons: true})}}>Show</button>
        <button style={{width: 100, height: 50, margin: 20, color: 'red', backgroundColor: '#f4f0eb'}} onClick={() => {window.location.reload(true)}}>Reload</button>
        <Cockpit
        appTitle={this.props.title} 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        login={this.loginHandler}
        clicked={this.togglePersonsHandler} />
        <AuthContext.Provider value={this.state.authenticated}> 
          {persons} 
        </AuthContext.Provider>
    </Auxi>
    );
  }
}

export default withClass(App, classes.App);
