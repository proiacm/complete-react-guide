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

    deletePersonHandler = (personIndex) => {
      const people = this.state.people.slice(); // slice with no arguments makes a copy which we can then mutate without affecting original
      people.splice(personIndex, 1);
      this.setState({people: people})
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

      let people = null;

      if (this.state.showPeople) {
        people = (
          <div>
            {this.state.people.map((person, index) => {
              return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} />
            })}
          </div>
        );
      }

      return (
        // everything here is JSX not HTML
        <div className="App"> 
          <h1>Hi, I'm a React App!</h1>
          <p>I'm writing more elements in the div</p>
          <button style={style} onClick={this.togglePeopleHandler}>Show Names</button>
          {people}
        </div>
      );
    }
}

export default App;