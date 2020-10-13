import React from 'react';
import './Person.css'

// props is merely an object with all of the attributes of the component
// when using a class-based components, we use this.props
//children refers to any elements between the opening and closing tag of the component 
const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} /> 
        </div>
    )
}

export default person;