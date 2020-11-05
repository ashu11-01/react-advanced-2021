import React, { useState } from 'react';

const UseStateObject = () => {
  const INITIAL_PERSON = {
    name: "Ashutosh",
    age: 23,
    message : "Hello World"}
  const [ person, setPerson] = useState(INITIAL_PERSON)

  const personDetails = Object.entries(person).map( (row,index) => {
  return (<h3 key= {index}>{row[0]} : {row[1]}</h3>)
  })

  return <>
  <h2>useState object example</h2>
  {personDetails}
  <h3>{person.course ? "" : "Course : NO COURSE"}</h3>
  <button className="btn" 
  onClick={() => setPerson({ id : 1 , ...person, course: "MCA", college : "BHU"})}>
      Assign Course
  </button>
  <button className="btn" 
  onClick={() => setPerson(INITIAL_PERSON)}>
      Reload
  </button>
  </>;
};

export default UseStateObject;
