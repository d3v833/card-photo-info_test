import React from 'react';
import Card from './card';

const cardList = ({ people }) => {
  const cardComponent = people.map((_name, i) => 
  <Card 
    name={people[i].name} 
    email={people[i].email} 
    position={people[i].position} 
  />)
  return (
    <div>
      { cardComponent }
    </div>
  );
}

export default cardList;