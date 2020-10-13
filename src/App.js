import React from 'react'; 
import './App.css';
import Person from './Person/Person';
import { Component } from 'react';

class App extends Component {
   
     state = { 
       people: [
        { name: 'Maria', age: '29'},
        { name: 'Ryan', age: '34'}
      ]
    }

    switchNameHandler = () => {
      // DON'T MUTATE STATE DIRECTLY. DON'T DO THIS: this.state.people[0].name = 'CiaraMaria'
      this.setState({people: [
          { name: 'CiaraMaria', age: '29'},
          { name: 'Ryan', age: '34'}
      ]})
      }
      
  render () {    
    return (
      // everything here is JSX not HTML
      <div className="App"> 
      {/* we will nest all other components here and only render the root App in ReactDOM render */}
       <h1>Hi, I'm a React App!</h1>
       <p>I'm writing more elements in the div</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person  name={this.state.people[0].name} age={this.state.people[0].age}>Job: Software Developer</Person>
       <Person name={this.state.people[1].name} age={this.state.people[1].age}/>
       {/* If we inspect the element in the browser, the Person component is nothing more than a p tag within the main div */}
      </div>
    );
  }
}

export default App;