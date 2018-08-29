import React, { PureComponent } from 'react';

import Person from './Person/Person';

/* Default ES6 Arrow Function Notation */
class Persons extends PureComponent {

  constructor(props){
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount()');
  }//not called through DOM events

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons || 
  //   nextProps.changed !== this.props.changed ||
  //   nextProps.clicked !== this.props.clicked; // Renders if it detects a difference in persons array
  //   //return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

	render() {
    console.log('[Persons.js] Inside render()');
		return this.props.persons.map( (person, index) => { 
          return <Person  
              click={() => this.props.clicked(index)}
              name={person.name}
              position={index} 
              age={person.age}
              key={person.id} 
              changed={(event) => this.props.changed(event, person.id)} />
            } );
	}

} 

export default Persons;