import React, { useState } from 'react';

const ErrorExample = () => {
  const [ title, setTitle ] = useState("Random Title")
  const handleClick = () => { 
    setTitle( prevState => 
      prevState==="Random Title" ? 
      "Hello World" : "Random Title")
    }
  return (
    <div>
  <h2>useState error example</h2>
  <h2>{title}</h2>
  <button className="btn" onClick={handleClick}>Change Title</button>
  </div>
  );
};

export default ErrorExample;
