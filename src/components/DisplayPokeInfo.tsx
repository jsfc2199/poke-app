import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface IDisplayPokeInfoProps {
    id: number;
    name: string;
    pic: string;
    types: string
}

const DisplayPokeInfo: React.FunctionComponent<{ name: string }> = ({ name }) => {

    const [pokeInfo, setPokeInfo] = useState({}) as any

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

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
                        <td>Pokemon Info</td>
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
                        <td>
                            <button type="button">
                                <Link to='/pokemonInfo' style={{ textDecoration: 'none' }} state={{ statePoke: name }}> See Pokemon Info</Link>
                            </button>
                        </td>

                    </tr>
                </tbody>

            </table>
        </div>
    )
};

export default DisplayPokeInfo;
