import React, { useState } from 'react';

const UseStateCounter = () => {
  const [ value, setValue] = useState(0)
  const complexIncrease= () => {
    setTimeout(() => {
      setValue( prevState => prevState +1 )
    } , 2000)
  }
  return ( <>
  <section>
  <h2>useState counter example</h2>
  <h2>Regular Counter</h2>
  <h1>{value}</h1>

  <button 
    className="btn" 
    onClick={() => setValue( prevState => prevState - 1)}>
    Decrease
  </button>

  <button 
    className="btn" 
    onClick={() => setValue(0)}>
    Reset
  </button>

  <button 
    className="btn" 
    onClick={() => setValue( prevState => prevState + 1)}>
    Increase
  </button>
  </section> 

  <br/> <br/>
  
  <section>
  <h2>Complex Counter</h2>
  <h1>{value}</h1>
  
  <button 
    className="btn" 
    onClick={() => setValue(0)}>
    Reset
  </button>

  <button 
    className="btn" 
    onClick={complexIncrease}>
    Increase Later
  </button>
  </section> 
  </>)
};

export default UseStateCounter;
