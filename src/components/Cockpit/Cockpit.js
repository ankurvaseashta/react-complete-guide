import React from 'react';

import classes from './Cockpit.css';


const cockpit = (props) => {
	
    ///let classes = ['red', 'bold'].join(' '); ///array of strings seperated by a empty space using join "red bold"
    const assignedClasses = [];
    let btnClass = '';

 	if(props.showPersons){
	  btnClass = classes.Red;
 	}

    if(props.persons.length <= 2){
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if(props.persons.length <= 1){
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

	return(
		<div className={classes.Cockpit}>
        <h1> Hi, I am a react app!! </h1>
        <p className={assignedClasses.join(' ')}> This is really working! </p>
        <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
        </div>
		);
};

export default cockpit;