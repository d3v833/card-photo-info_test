import React from 'react';

const Scroll = (props) => {
  return (
  <div className= "mw9-ns" 
    style = {{
      overflow: 'scroll', 
      height: '330px', 
      margin: '0 auto'}}>
    {props.children}
  </div>
  );
};

export default Scroll;