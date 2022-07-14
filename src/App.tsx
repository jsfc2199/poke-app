import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import PokemonInfo from './components/PokemonInfo'
import Pokemons from './components/Pokemons'


function App() {

  return (
    <div>
      <BrowserRouter>

      

        <Routes>
        <Route path='/' element={<Pokemons />} />
          <Route path='/pokemonInfo' element={<PokemonInfo />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
