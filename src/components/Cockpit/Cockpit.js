import React from 'react';

import classes from './Cockpit.css';
import Auxi from '../../hoc/Auxi';

const cockpit = (props) => {
    ///let classes = ['red', 'bold'].join(' '); ///array of strings seperated by a empty space using join "red bold"
    const assignedClasses = [];
    let btnClass = classes.Button;

 	if(props.showPersons){
	  btnClass = [classes.Button, classes.Red].join(' ');
 	}
    if(props.persons.length <= 2){
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if(props.persons.length <= 1){
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

	return(
        <Auxi>
            <h1> { props.appTitle } </h1>
            <p className={assignedClasses.join(' ')}> This is really working! </p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            <button className={classes.indent} onClick={props.login}>Log in</button>
        </Auxi>
	);
};

export default cockpit;