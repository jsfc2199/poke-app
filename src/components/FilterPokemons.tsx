import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayPokeInfo from './DisplayPokeInfo';
import PokemonInfo from './PokemonInfo';
import Pokemons from './Pokemons';

interface IFilterPokemonsProps {
}

const FilterPokemons: React.FunctionComponent<IFilterPokemonsProps> = (props) => {
    const [pokemons, setPokemons] = React.useState([])
    const [filteredPokemons, setfilteredPokemons] = useState([])


    const [searchTerm, setSearchTerm] = useState('')

    const url = "https://pokeapi.co/api/v2/pokemon/?limit=50"
    React.useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPokemons(data.results))
    }, [])

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        let filter = pokemons.filter((pokemon: any) => pokemon.name?.includes(e.target.value))
        console.log(e.target.value);
        setfilteredPokemons(filter)
    }

    return (
        <div>
            <div>
                <input className='filtergames' type='text' placeholder='Filter Pokemons' onChange={(e) => onSearch(e)} />
            </div>
            <div>
                {filteredPokemons.map((pokemon: any) => {
                    return <div key={pokemon.name}>
                        <DisplayPokeInfo name={pokemon.name} />
                    </div>
                })}
            </div>
            <div>
                <h2 hidden={filteredPokemons.length !== 0}>There is no pokemon with that name</h2>
            </div>
            <div>
                <button type='button' className='theButton'>
                    <Link to='/' style={{ textDecoration: 'none' }}> Go back</Link>
                </button>
            </div>

        </div>
    )
};

export default FilterPokemons;
