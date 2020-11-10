import React from 'react';
import Person from './Person/Person';

const People = (props) => props.people.map((person, index) => {
        return <Person 
            click={() => props.clicked(index)}
            key={person.id} 
            name={person.name}
            age={person.age}
            change={(event) => props.changed(event, person.id)}/>
      });

export default People;    
