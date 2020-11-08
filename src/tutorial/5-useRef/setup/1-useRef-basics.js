import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  
  const handleSubmit= (e) =>{
    e.preventDefault()
      console.log(refContainer.current.value)
  }

  useEffect( () => {
    refContainer.current.focus()
  })
  
  return (<> 
  <h2>useRef</h2>
  <form className="form">
    <div className="form-container">
      <input type="text" ref={refContainer}></input>
      <button 
      type="submit" 
      className="btn"
      onClick={handleSubmit}>
        Submit</button>
    </div>
  </form>
  </>);
};

export default UseRefBasics;
