import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
	constructor(props){
	super(props);
	console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount(){
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Person.js] Inside componentDidMount()');
  }


	render(){
		console.log('[Person.js] Inside render()');
		return (
		<Aux classes={classes.Person}>
        <p onClick={this.props.click}>I am {this.props.name} a person and I am {this.props.age} years old! </p>
        <p> {this.props.children} </p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
    </Aux> 
		)
    ///   return [
    //     <p key="1" onClick={this.props.click}>I am {this.props.name} a person and I am {this.props.age} years old! </p>,
    //     <p key="2" {this.props.children} </p>,
    //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
    // ]
	}
} 

export default withClass(Person, classes.Person);
