import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        <div id="cards">
            <figure className="card card--normal">
                <div className="card__image-container">
                    <img src={pokeInfo.sprites?.front_default} alt={pokeInfo.name} className="card__image" />
                </div>

                <figcaption className="card__caption">
                    <h3 className="card__type">
                        <b>{pokeInfo.name}</b>
                    </h3>
                    <table className="card__stats">
                        <tbody>
                            {pokeInfo.stats?.map((stat: any) => {
                                return <tr>
                                    <th><b>{stat.stat.name}</b></th>
                                    <td>{stat.base_stat}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    <div className="card__abilities">

                        {pokeInfo.types?.map((pokemon: any) => {
                            return (
                                <div key={pokemon.type.name}>
                                    <h4 className="card__ability">
                                        <span className="card__label"><b>{pokemon.type.name}</b></span>
                                    </h4>
                                </div>
                            )
                        })}
                    </div>

                </figcaption>
            </figure>

            <div>
                <button type='button' className='theButton2'>
                    <Link to='/' style={{ textDecoration: 'none' }}> <b>Go back</b></Link>
                </button>
            </div>
        </div>
    )
};

export default PokemonInfo;
