import React, { Component } from 'react';
import CardList from './cardList';
import SearchBox from './searchBox';
import './index.css';
import './App.css';
class App extends Component {
  constructor() {
    super() // whenever you extend a class, you need super to access it
    this.state = {
      people: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({ people: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredCatpeople = this.state.people.filter(people =>{
      return people.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.people.length === 0) {
      return <h1>Loading</h1>
    }
    return (
      <div className="tc">
        <h1 className="f3 f-headline-l">C A T  P E O P L E</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList people={ filteredCatpeople }/>
      </div>
    );
  } 
}

const changeBg = (color) => {
  document.documentElement.style.setProperty('--background', color)
}

onmousemove = (e) => { 
  let valX = (e.clientX / document.body.clientWidth) * 255
  let valY = (e.clientY / document.body.clientHeight) * 255
  console.log(valX, valY)
  changeBg(`rgb(${valX}, ${valY}, 90)`)
}

  export default App;