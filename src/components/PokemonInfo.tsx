import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../store';

interface IPokemonInfoProps {
    statePoke: string
}

const PokemonInfo: React.FunctionComponent = () => {
    const location = useLocation()
    const state = location.state as IPokemonInfoProps
    const { statePoke } = state
    const [pokeInfo, setPokeInfo] = useState({}) as any

    const url = `https://pokeapi.co/api/v2/pokemon/${statePoke}`

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPokeInfo(data))
    }, [])

    return (
        <div>                 
            <table className="justTable">            
                <thead className="justTableHead">                    
                    <tr>
                        <td>Name</td>
                        <td>Picture</td>
                        <td>Type</td>
                        <td>Base Experience</td>
                        <td>Weight</td>
                        <td>Height</td>
                        <td>Stats</td>
                    </tr>
                </thead>
                <tbody>
                    <tr key={pokeInfo.name}>
                        <td>{pokeInfo.name}</td>
                        <td><img src={pokeInfo.sprites?.front_default} /></td>
                        <td><div>
                            {pokeInfo.types?.map((pokemon: any) => {
                                return (
                                    <p key={pokemon.type.name}>{pokemon.type.name}</p>
                                )
                            })}
                        </div></td>
                        <td>{pokeInfo.base_experience}</td>
                        <td>{pokeInfo.weight}</td>
                        <td>{pokeInfo.height}</td>
                        <td>{pokeInfo.stats?.map((stat: any) => {
                            return (
                                <p>{stat.base_stat} -{'>'} {stat.stat.name}</p>
                            )
                        })}</td>
                    </tr>
                </tbody>
            </table>

            <div>
                <button type='button' className='theButton'>
                    <Link to='/' style={{ textDecoration: 'none' }}> Go back</Link>
                </button>
            </div>
        </div>
    )
};

export default PokemonInfo;
