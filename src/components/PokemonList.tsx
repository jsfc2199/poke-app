import * as React from 'react';
import { useSelector } from 'react-redux';
import { getPokemonsName } from '../actions/getPokemon';
import { posibleStatus, selectPokemonsFetchError, selectPokemonsState, selectPokemonsStatus } from '../state/pokemonSlice';
import { useAppDispatch } from '../store';
import Pokemon from './Pokemon';

interface IPokemonListProps {
}

const PokemonList: React.FunctionComponent<IPokemonListProps> = (props) => {
    const error = useSelector(selectPokemonsFetchError())
    const status = useSelector(selectPokemonsStatus())    

    const dispatch = useAppDispatch();
    React.useEffect(()=>{
        if(status === posibleStatus.IDLE){
            dispatch(getPokemonsName())
        }
    }, [dispatch])

    const pokemonsName = useSelector(selectPokemonsState())
    console.log(pokemonsName)
  return (
    <div>
        {pokemonsName.map((pokemon)=><Pokemon key={pokemon.name} props = {pokemon}/>)}
    </div>
  )
};

export default PokemonList;
