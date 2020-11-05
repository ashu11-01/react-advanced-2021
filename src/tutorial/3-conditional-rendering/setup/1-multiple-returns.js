import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/ashu11-01';
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [user, setUser] = useState('Default User')
  
  useEffect( () => {
    fetch(url)
      .then(response => {
        
        if(response.status>=200 && response.status <=299)
          return response.json()
        else{
          setLoading(false)
          setError(true)
        }
      })
      .then(response => {setUser(response.name); setLoading(false)})
      .catch(err => setError(true))
  },[])

  if(isLoading){
    return <h2>Loading...</h2>;
  }

  if(isError){
  return <h2>Error...</h2>;
  }
  return (<>
  <h2>{user}</h2>
  </>);
};

export default MultipleReturns;
