import React from 'react'
import {Link} from "react-router-dom";

export const CardHero = ({heroe: hero}) => {
    return (
        <div className="row g-0 border border-2 rounded animate__animated animate__fadeIn">
            <div className="col-5">
                <img src={`${process.env.PUBLIC_URL}/assets/heroes/${hero.id}.jpg`}
                    alt="..."
                    className="card-img" />
            </div>
            <div className="col-7">
                <div className="card-body h-100 d-flex flex-column align-items-center justify-content-center">
                    <h5 className="card-title">{hero.superhero}</h5>
                    <p className="card-text">{hero.alter_ego}</p>
                    <Link to={`./hero/${hero.id}`}  className="btn btn-success">
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    )
}
