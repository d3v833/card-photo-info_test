import React, { Component } from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import '../index';
import './App.css';
import Scroll from '../components/Scroll';
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
    const { people, searchfield } = this.state;
    const filteredCatpeople = people.filter(catPeople =>{
      return catPeople.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !people.length ?
      <h1>Loading</h1> :
      (
        <div>
          <h1 className="f3 f-headline-l">C A T  P E O P L E</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList people={ filteredCatpeople }/>
          </Scroll>
        </div>
      )
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