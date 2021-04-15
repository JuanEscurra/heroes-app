import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const {heroId} = useParams();
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    if(!hero) {
        return <Redirect to="/" />;
    }
    
    const handleReturn = () => {
        if(history.length <= 2) {
            history.push("/")
        } else {
            history.goBack();
        }
    }

    return (
        <>
            <h1>HeroScreen</h1>
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center animate__animated animate__fadeIn">
                <div className="w-25 m-1 m-md-3" style={{minWidth: 300}}>
                    <img src={`../assets/heroes/${hero.id}.jpg`} alt="..." className="img-fluid" />
                </div>
                <div className="v-25 m-1 m-md-3 d-flex flex-column justify-content-center align-items-center">
                    <h3>{hero.superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Superhero: {hero.superhero}</li>
                        <li className="list-group-item">Publisher: {hero.publisher}</li>
                        <li className="list-group-item">Alter ego: {hero.alter_ego}</li>
                        <li className="list-group-item">First appearance: {hero.first_appearance}</li>
                        <li className="list-group-item">Characters: {hero.characters}</li>
                    </ul>
                    <button className="btn btn-outline-primary" onClick={handleReturn}>Return</button>
                </div>
            </div>
        </>
    )
}
