import React, { Component } from 'react';
import CardList from './cardList';
import SearchBox from './searchBox';
import { people } from './people';

class App extends Component {
  constructor() {
    super() // whenever you extend a class, you need super to access it
    this.state = {
      people: people,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredCatpeople = this.state.people.filter(people =>{
      return people.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="tc">
        <h1>Cat People</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList people={ filteredCatpeople }/>
      </div>
    );
  }

  }

  export default App;