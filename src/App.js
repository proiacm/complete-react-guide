import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person';


class App extends Component {
   
     state = { 
       people: [
        { name: 'Maria', age: '29'},
        { name: 'Ryan', age: '34'}
      ],
      showPeople: false
    }

    switchNameHandler = (newName) => {
      // DON'T MUTATE STATE DIRECTLY. DON'T DO THIS: this.state.people[0].name = 'CiaraMaria'
      this.setState({people: [
          { name: newName, age: '29'},
          { name: 'Ryan', age: '34'}
      ]})
      }

    nameChangeHandler = (event) => {
      this.setState({people: [
        { name: 'Maria', age: '29'},
        { name: event.target.value , age: '34'}
    ]})
    }  

    togglePeopleHandler = () => {
      const doesShow =  this.state.showPeople;
      this.setState({showPeople: !doesShow}) // if doesShow is true it sets to false, if doesShow is false it sets to true
    }
      
    render () {   
      
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

      return (
        // everything here is JSX not HTML
        <div className="App"> 
          <h1>Hi, I'm a React App!</h1>
          <p>I'm writing more elements in the div</p>
          <button style={style} onClick={this.togglePeopleHandler}>Show Names</button>
          { this.state.showPeople ? 
            <div>
            <Person  name={this.state.people[0].name} age={this.state.people[0].age} click={this.switchNameHandler.bind(this, 'CiaraMaria')}>Job: Software Developer</Person>
            <Person name={this.state.people[1].name} age={this.state.people[1].age} change={this.nameChangeHandler}/>
          </div> : null
          }
        </div>
      );
    }
}

export default App;