import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
  // if (true) {
  //   throw new Error("The cat's outta the bag!")
  // } /* Used this to try out the ErrorBoundary component */
  const cardComponent = people.map((_name, i) => 
      <Card 
    name={people[i].name} 
    email={people[i].email} 
    position={people[i].position} 
  />)
  return ( 
      <div className="tc">  
        { cardComponent }
      </div>
  );
}

export default CardList;