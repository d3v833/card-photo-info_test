import React from 'react';

const Card = ({ name, email, position }) => {
  return (    
      <div className = 'tc bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-hover '>
      <img 
        class="br-100 dib ba bg-white b--dashed pa2"
        alt='cat-caricatures' 
        src={`https://robohash.org/set_set4/${name}/?size=200x200`}
      />
      <div className="courier">
        <h2 class="f6">{name}</h2>
        <p class="f7">{email}</p>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default Card;