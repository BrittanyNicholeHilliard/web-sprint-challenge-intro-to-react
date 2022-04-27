import React, { useState, UseEffect, useEffect } from 'react';
import axios from 'axios';
import Character from "./components/Character"


const App = () => {
  const [chars, setChars] = useState([])
  const [page, setPage] = useState(1)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      setChars(res.data);
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  useEffect(() => {
    console.log(page)
  }, [page])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Character />
      <div><button onClick={() => {setPage(page+1)}}> ADD TO PAGE </button></div>
      <div><button onClick={() => {setPage(page-1)}}> REMOVE FROM PAGE </button></div>
      {
        chars.map((character, index) =>(
          <article key={`app-character-map${index}-${character.id}`}>
            <h1>{character.name}</h1>
            <p><b>Birth Year:</b> {character.birth_year} </p>
            <p><b>Height:</b> {character.height} </p>
            <p><b>Gender: </b> {character.gender} </p>
          </article>
        ))
      }
    </div>
  );
}

export default App;
