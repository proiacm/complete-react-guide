import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // all React components must render!
  render() {
    return (
      // everything here is JSX not HTML
      <div className="App"> 
      {/* we will nest all other components here and only render the root App in ReactDOM render */}
       <h1>Hi, I'm a React App!</h1>
       <p>I'm writing more elements in the div</p>
       <Person  name='Maria' age='29'>Job: Software Developer</Person>
       <Person name='Ryan' age='34'/>
       {/* If we inspect the element in the browser, the Person component is nothing more than a p tag within the main div */}
      </div>
    );
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Now I should have an h1 tag with text inside the div with css class styling')) // what's happening behind the scenes of the above code
  }
}

export default App;
