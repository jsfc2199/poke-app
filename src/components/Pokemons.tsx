import React, { useEffect, useState } from 'react';
import DisplayPokeInfo from './DisplayPokeInfo';

interface IPokemonsProps {
}

const Pokemons: React.FunctionComponent<IPokemonsProps> = (props) => {
    const [pokemons, setPokemons] = useState([])

    const url = "https://pokeapi.co/api/v2/pokemon/?limit=50"

    useEffect(() =>{
        fetch(url)
        .then(response => response.json())
        .then(data => setPokemons(data.results))
    }, [])
   
  return (
    <div>
        {pokemons.map((pokemon:any)=>{
            return (
                <div key={pokemon.name}>
                    <DisplayPokeInfo name={pokemon.name}/>
                </div>
            )
        })}
    </div>
  )
};

export default Pokemons;
