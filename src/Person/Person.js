import React from 'react';

// props is merely an object with all of the attributes of the component
// when using a class-based components, we use this.props
//children refers to any elements between the opening and closing tag of the component 
const person = (props) => {
    return (
        <div>
            <p onClick={props.changeName}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;