import React from 'react';

const Cockpit = (props) => {
    return(
        <div>
            <h1>Hi, I'm a React App!</h1>
            <p className={assignedClasses.join(' ')}>I will change based on length of list</p>
            <button className={btnClass.join(' ')} onClick={this.togglePeopleHandler}>Toggle People</button>
        </div>
    );
}

export default Cockpit;