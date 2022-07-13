import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsName } from "../actions/getPokemon";
import { RootState } from "../store";

type pokemonType = {
    name: string,
}

export enum posibleStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
}

interface initialStateType {
    pokemons: pokemonType[],
    status: posibleStatus,
    error: string | null,
}

const initialState: initialStateType = {
    pokemons: [],
    status: posibleStatus.IDLE,
    error: null
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        //get name pokemon
        builder.addCase(getPokemonsName.pending,(state)=>{
            state.status = posibleStatus.PENDING
        })
        builder.addCase(getPokemonsName.fulfilled,(state,action)=>{
            state.status = posibleStatus.COMPLETED
            state.pokemons = action.payload
        })
        builder.addCase(getPokemonsName.rejected,(state)=>{
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while fetching"
            state.pokemons = []
        })
    }
})

export type {pokemonType}
export type {initialStateType}
export default pokemonSlice.reducer

//extra reducers
export const selectPokemonsState = () => (state: RootState) => state.pokemons.pokemons
export const selectPokemonsStatus = () => (state: RootState) => state.pokemons.status
export const selectPokemonsFetchError = () => (state: RootState) => state.pokemons.error