// Write your Character component here
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledChar = styled.div`

h1 {
    color: red;
}

h1, p {
    text-align: center;
}
`

export default function Character(props) {
    const [chars, setChars] = useState([])
    const [page, setPage] = useState(1)

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



    return (
<StyledChar>


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
    </StyledChar>
    )
}