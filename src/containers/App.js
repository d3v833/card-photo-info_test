import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import '../index';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super() // whenever you extend a class, you need super to access it
    this.state = {
      people: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> {this.setState({ people: users})});
  }

  render() {
    const { people } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredCatpeople = people.filter(catPeople =>{
      return catPeople.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !people.length ?
      <h1>Loading</h1> :
      (
        <div>
          <h1 className="f3 f-headline-l">C A T  P E O P L E</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
              <CardList people={ filteredCatpeople }/>
          </Scroll>
        </div>
      )
  }
}
// --CSS background changes-- // from Una Kravets talk on Coding Tech
const changeBg = (color) => {
  document.documentElement.style.setProperty('--background', color)
}

onmousemove = (e) => { 
  let valX = (e.clientX / document.body.clientWidth) * 255
  let valY = (e.clientY / document.body.clientHeight) * 255
  console.log(valX, valY)
  changeBg(`rgb(${valX}, ${valY}, 90)`)
}

  export default connect(mapStateToProps, mapDispatchToProps)(App);