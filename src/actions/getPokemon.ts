import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonType } from "../state/pokemonSlice";

const url50pokemon = 'https://pokeapi.co/api/v2/pokemon/?limit=50'

export const getPokemonsName = createAsyncThunk('getPokemonsName', async () => {
    const response = await fetch(url50pokemon)
    return (await response.json() as pokemonType[])
})