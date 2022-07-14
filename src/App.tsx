import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import FilterPokemons from './components/FilterPokemons'
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
import PokemonInfo from './components/PokemonInfo'
import Pokemons from './components/Pokemons'
import { RootState } from './store'


function App() {
  const { user } = useSelector((state: RootState) => state.logged)
  return (
    <div>
      <BrowserRouter>
        {user === false ?
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
            <img src="https://elcomercio.pe/resizer/ntOGCKn9OS7hdopckTRCV5CuaCM=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PCMTNQQUDZEEPOGTKB53ECTHRU.jpg" style={{width:500, height:300}}/>
            <br/>
            Click in log in to watch the pokemons list            
          </div>
          :
          <nav className='navMenu'>
            <p style={{ color: 'white', textAlign: 'right', fontSize: 20 }}>User: Hello World</p>
            <Link to='filterPokemons'>Filter Pokemons</Link>
          </nav>
        }
        <Routes>
          <Route path='/' element={<Pokemons />} />
          <Route path='/pokemonInfo' element={<PokemonInfo />} />
          <Route path='/logIn' element={<LogIn />} />
          <Route path='/logOut' element={<LogOut />} />
          <Route path='/filterPokemons' element={<FilterPokemons />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
