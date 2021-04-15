import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { CardHero } from './CardHero';
export const HeroeList = ({publisher}) => {
    
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="row justify-content-evenly animate__animated animate__fadeIn">
                {
                    heroes.map( (heroe) => (
                        
                            <div key={heroe.id} className="col-12 col-md-6 col-xl-4 p-2" style={{maxWidth: 500}}>
                                <CardHero heroe={heroe} />
                            </div>
                        
                    ))
                }
        </div>
    )
}
