import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import DisplayPokeInfo from './DisplayPokeInfo';

interface IFilterPokemonsProps {
}

const FilterPokemons: React.FunctionComponent<IFilterPokemonsProps> = (props) => {
    const [pokemons, setPokemons] = React.useState([])
    const [filteredPokemons, setfilteredPokemons] = useState([])

    const url = "https://pokeapi.co/api/v2/pokemon/?limit=50"
    React.useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPokemons(data.results))
    }, [])

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        let filter = pokemons.filter((pokemon: any) => pokemon.name?.includes(e.target.value))
        setfilteredPokemons(filter)
    }

    const navigate = useNavigate()

    const {user} = useSelector((state:RootState)=>state.logged)

    React.useEffect(()=>{
        if(user===false){
            navigate('/logIn')
        }
    })

    return (
        <div>
            <div>
                <button type='button' className='theButton2'>
                    <Link to='/' style={{ textDecoration: 'none' }}> <b>Go back</b></Link>
                </button>
            </div>
            <div>
                <input className='filtergames' type='text' placeholder='Filter Pokemons' onChange={(e) => onSearch(e)} />
            </div>
            <div>
                {filteredPokemons.map((pokemon: any) => {
                    return <div key={pokemon.name} style={{display: 'inline-flex', flexDirection:'row'}}>
                        <DisplayPokeInfo name={pokemon.name} />
                    </div>
                })}
            </div>
            <div>
                <h2 hidden={filteredPokemons.length !== 0}>There is no pokemon with that name</h2>
            </div>
            
        </div>
    )
};

export default FilterPokemons;
