import React, { Component } from 'react';
import CardList from './cardList';
import SearchBox from './searchBox';
import { people } from './people';
import './index.css';
import './App.css';


const changeBg = (color) => {
  document.documentElement.style.setProperty('--background', color)
}

onmousemove = (e) => { 
  let valX = (e.clientX / document.body.clientWidth) * 255
  let valY = (e.clientY / document.body.clientHeight) * 255
  console.log(valX, valY)
  changeBg(`rgb(${valX}, ${valY}, 90)`)
}

// onmousemove = (e) => { 
//   console.log("mouse location:", e.clientX, e.clientY)
//   changeBg(`rgb(${e.clientX}, 50, 50)`)
// }
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
        <h1 className="f1">C A T  P E O P L E</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList people={ filteredCatpeople }/>
      </div>
    );
  }

  }

  export default App;