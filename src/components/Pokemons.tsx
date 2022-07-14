import React, { useEffect, useState } from 'react';
import DisplayPokeInfo from './DisplayPokeInfo';
import LogOut from './LogOut';

interface IPokemonsProps {
}

const Pokemons: React.FunctionComponent<IPokemonsProps> = (props) => {
    const [pokemons, setPokemons] = useState([])

    const url = "https://pokeapi.co/api/v2/pokemon/?limit=50"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPokemons(data.results))
    }, [])

    return (
        <>
            <LogOut />
            {pokemons.map((pokemon: any) => {
                return (
                    <div key={pokemon.name}>

                        <DisplayPokeInfo name={pokemon.name} />
                    </div>
                )
            })}
        </>
    )
};

export default Pokemons;
