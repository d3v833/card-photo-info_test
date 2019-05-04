import React from 'react';
import Card from '../components/card';

const cardList = ({ people }) => {

  const cardComponent = people.map((_name, i) => 
      <Card 
    name={people[i].name} 
    email={people[i].email} 
    position={people[i].position} 
  />)
  return (  
    <constainer>
      <div className="tc">  
        { cardComponent }
      </div>
    </constainer>
  );
}

export default cardList;