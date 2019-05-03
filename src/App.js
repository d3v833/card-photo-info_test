import React from 'react';
import CardList from './cardList';
import { people } from './people';
import SearchBox from './searchBox';

const App = () => {
  return (
      <div className="tc">
        <h1>Cat People</h1>
        <SearchBox />
        <CardList people={ people }/>
      </div>
    )
  };

  export default App;