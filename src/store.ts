import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pokemonReducer from './state/pokemonSlice'


const store = configureStore ({
    reducer:{
        pokemons: pokemonReducer,
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()