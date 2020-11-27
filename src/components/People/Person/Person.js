import React from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';

const person = (props) => {

    return (
        <Aux>
        {/* // <div className={classes.Person}> */}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} /> 
        {/* // </div> */}
        </Aux>
    )
}

export default person;