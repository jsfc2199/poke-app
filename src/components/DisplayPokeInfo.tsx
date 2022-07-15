import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../store';



const DisplayPokeInfo: React.FunctionComponent<{ name: string }> = ({ name }) => {

    const [pokeInfo, setPokeInfo] = useState({}) as any

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPokeInfo(data))
    }, [])

    const navigate = useNavigate()

    const { user } = useSelector((state: RootState) => state.logged)

    useEffect(() => {
        if (user === false) {
            navigate('/logIn')
        }
    })

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

                    <button type="button" className="theButton2">
                        <Link to='/pokemonInfo' style={{ textDecoration: 'none' }} state={{ statePoke: name }}> <b>See Pokemon Info</b></Link>
                    </button>

                </figcaption>
            </figure>
        </div>
    )
};

export default DisplayPokeInfo;
