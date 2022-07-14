import * as React from 'react';
import { useSelector } from 'react-redux';
import { getPokemonsName } from '../actions/getPokemon';
import { pokemonType, posibleStatus, selectPokemonsFetchError, selectPokemonsState, selectPokemonsStatus } from '../state/pokemonSlice';
import { useAppDispatch } from '../store';

interface IPokemonProps {
    props: pokemonType
}

const Pokemon: React.FunctionComponent<IPokemonProps> = ({props}) => {
    

  return (
    <div>
        <br></br>
        {props.name}  
    </div>
  )
};

export default Pokemon;
