import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    let btnClass = '';
    if (props.showPeople){
        btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (props.people.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (props.people.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses}>I will change based on length of list</p>
            <button className={btnClass} onClick={props.clicked}>Toggle People</button>
        </div>
    );
}

export default Cockpit;