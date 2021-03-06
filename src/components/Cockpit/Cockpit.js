import React from 'react';

import classes from './Cockpit.css';
import Auxi from '../../hoc/Auxi';

const cockpit = (props) => {
    ///let classes = ['red', 'bold'].join(' '); ///array of strings seperated by a empty space using join "red bold"
    const assignedClasses = [];
    let btnClass = classes.Button;
    let btnLogin = classes.loginButton;
    let btnLogout = classes.logoutButton;
    let btnContainer = classes.container;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    if (props.persons.length <= 4) {
        assignedClasses.push(classes.green); // classes = ['green']
    }
    if (props.persons.length <= 3) {
        assignedClasses.pop();
        assignedClasses.push(classes.blue); // classes = ['blue']
    }
    if (props.persons.length <= 2) {
        assignedClasses.pop();
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <Auxi>
            <h1> {props.appTitle} </h1>
            <p className={assignedClasses.join(' ')}> People in list! </p>
            <div className={btnContainer}>
                <button
                    className={btnLogin}
                    onClick={props.login}>Login
                </button>
                <button
                    className={btnClass}
                    onClick={props.clicked}>Toggle Persons
                </button>
                <button
                    className={btnLogout}
                    onClick={props.logout}>Logout
                </button>
            </div>
        </Auxi>
    );
};

export default cockpit;