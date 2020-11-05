import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [ value, setValue ] = useState(0)

  useEffect(() => {
    // document.title = value>0 ? `New Message(${value})` : "No New Message"
    document.title = `New Message(${value})`
  }, [value])

  useEffect( () => {
    document.getElementById('ms').innerHTML="<h1>Welcome to my React App</h1>"
  },[])
  return ( <>
  <p id="ms"></p>
  <h2>useEffect Basics</h2>
  <h1>{value}</h1>
  <button 
    className="btn"
    onClick={() => setValue(value + 1)}>Click Me! Please</button>
  </>
  );
};

export default UseEffectBasics;
