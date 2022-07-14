import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface IPokemonInfoProps {
    statePoke: string
}

const PokemonInfo: React.FunctionComponent = () => {
    const location = useLocation()
    const state = location.state as IPokemonInfoProps
    const {statePoke} = state

    console.log(statePoke)


    const [pokeInfo, setPokeInfo] = useState({}) as any

    const url = `https://pokeapi.co/api/v2/pokemon/${statePoke}`

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPokeInfo(data))
    }, [])

    //console.log(pokeInfo)

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
                    <td>Health Points</td>
                    <td>Attack</td>
                    <td>Defense</td>
                    <td>Special Attack</td>
                    <td>Special Defense</td>
                    <td>Speed</td>
                </tr>
            </thead>
            <tbody>
                <tr>
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
                    <td>{pokeInfo.stats?.map((stat:any)=>{
                        console.log(stat    )
                    })}</td>
                </tr>
            </tbody>

        </table>
    </div>
  )
};

export default PokemonInfo;
