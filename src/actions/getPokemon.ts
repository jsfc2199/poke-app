import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonType } from "../state/pokemonSlice";

const url50pokemon = 'https://pokeapi.co/api/v2/pokemon/?limit=50'

export const getPokemonsName = createAsyncThunk('getPokemonsName', async () => {
    const response = await fetch(url50pokemon,{
        method: 'GET',
    })
    let pokemons = await response.json()
    return (pokemons.results) as pokemonType[]
})