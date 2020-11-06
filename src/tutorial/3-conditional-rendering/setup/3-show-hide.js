import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)

  return (<> 
  <h2>show/hide</h2>
  <button className="btn" onClick={() => setShow(!show)}>{show ? "Hide":"Show"}</button>
  {show ? <h1>Ashutosh Kumar</h1> : null}
  
  </>);
};

export default ShowHide;
