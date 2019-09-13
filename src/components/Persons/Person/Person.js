import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Auxi from '../../../hoc/Auxi';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
	constructor(props){
	super(props);
	console.log('[Person.js] Inside Constructor', props);
  this.inputElement = React.createRef();
  }

  componentWillMount(){
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Person.js] Inside componentDidMount()');
    if( this.props.position === 0 ){
      this.inputElement.current.focus();
     }
  }

  focus(){
    this.inputElement.current.focus();
  }

	render(){
		console.log('[Person.js] Inside render()');
		return (
		<Auxi>
    <AuthContext.Consumer>
      {auth => auth ? <p style={{color: 'red'}} > <b>Authenticated!</b> </p> : <p> Not authenticated! </p>}
    </AuthContext.Consumer>
      <p onClick={this.props.click}>I'm {this.props.name}, a {this.props.type} and {this.props.age} years old! </p>
      <p> {this.props.children} </p>
      <input
          ref={this.inputElement}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
     </Auxi> 
		)
    ///   return [
    //     <p key="1" onClick={this.props.click}>I am {this.props.name} a person and I am {this.props.age} years old! </p>,
    //     <p key="2" {this.props.children} </p>,
    //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
    // ]
	}
} 

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  type: PropTypes.string
};

export default withClass( Person, classes.Person );
