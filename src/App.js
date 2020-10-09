import React, { useState } from 'react'; 
import './App.css';
import Person from './Person/Person';

const App = props => {
    // useState returns an array with 2 elements ALWAYS. 1. current state 2. function to update state so React re-renders
    const [ peopleState, setPeopleState ] = useState({
      people: [
        { name: 'Maria', age: '29'},
        { name: 'Ryan', age: '34'}
      ]
    });

    console.log(peopleState)
    // when using Hooks, the setState method does not merge with the original state, instead it replaces previous state!

    // with Hooks we use functions inside functions
    const switchNameHandler = () => {
      // console.log('was clicked!')
      // DON'T MUTATE STATE DIRECTLY. DON'T DO THIS: this.state.people[0].name = 'CiaraMaria'
      setPeopleState({people: [
          { name: 'CiaraMaria', age: '29'},
          { name: 'Ryan', age: '34'}
      ]})
      }
      

    return (
      // everything here is JSX not HTML
      <div className="App"> 
      {/* we will nest all other components here and only render the root App in ReactDOM render */}
       <h1>Hi, I'm a React App!</h1>
       <p>I'm writing more elements in the div</p>
       <button onClick={switchNameHandler}>Switch Name</button>
       <Person  name={peopleState.people[0].name} age={peopleState.people[0].age}>Job: Software Developer</Person>
       <Person name={peopleState.people[1].name} age={peopleState.people[1].age}/>
       {/* If we inspect the element in the browser, the Person component is nothing more than a p tag within the main div */}
      </div>
    );
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Now I should have an h1 tag with text inside the div with css class styling')) // what's happening behind the scenes of the above code
  
  }

export default App;