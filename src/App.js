import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person';


class App extends Component {
   
     state = { 
       people: [
        { id: '1', name: 'Maria', age: '29'},
        { id: '2', name: 'Ryan', age: '34'}
      ],
      showPeople: false
    }

    deletePersonHandler = (personIndex) => {
      // const people = this.state.people.slice(); slice with no arguments makes a copy which we can then mutate without affecting original
      const people = [...this.state.people]; // Spread operator spreads the array into a list and puts it into the new array - ES6 alternative to above
      people.splice(personIndex, 1);
      
      this.setState({people: people})
    }

    nameChangeHandler = (event, id) => {
      // find the correct person
      const personIndex = this.state.people.findIndex(p => {
        return p.id === id;
      })

      //spread into new object so as to not mutate original state object
      const person = {...this.state.people[personIndex]};
      // const person = Object.assign({}, this.state.people[personIndex]) alternative for above

      //set person's name attribute to the value from the event
      person.name = event.target.value;

      // spread people array to make copy 
      const people = [...this.state.people];
      people[personIndex] = person; // set the element at that specific index with the new value

      this.setState({people: people});
    }  

    togglePeopleHandler = () => {
      const doesShow =  this.state.showPeople;
      this.setState({showPeople: !doesShow}) // if doesShow is true it sets to false, if doesShow is false it sets to true
    }
      
    render () {   
      
      const style = {
        backgroundColor: 'green',
        color: 'white',
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
              return <Person key={person.id} click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} change={(event) => this.nameChangeHandler(event, person.id)}/>
            })}
          </div>
        );
        style.backgroundColor = 'red';
      }

      return (
        // everything here is JSX not HTML
        <div className="App"> 
          <h1>Hi, I'm a React App!</h1>
          <p>I'm writing more elements in the div</p>
          <button style={style} onClick={this.togglePeopleHandler}>Toggle People</button>
          {people}
        </div>
      );
    }
}

export default App;