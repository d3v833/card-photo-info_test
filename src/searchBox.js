import React from 'react';

const searchBox = ({ searchChange }) => {
  return (
    <div className='pa3'>
      <input
        className='pa3 mw-100 ba b--washed-blue bg-washed-blue shadow-1'
        type='search' 
        placeholder='Search cat people'
        onChange={ searchChange }
      />
    </div>

  );
}
  export default searchBox;