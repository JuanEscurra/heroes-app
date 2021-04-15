import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { CardHero } from '../heroes/CardHero';
import { getHeroByName } from '../selectors/getHeroByName';
import { useHistory } from 'react-router';

export const SearchScreen = ({location}) => {

    const {q = ''} = queryString.parse(location.search);
    const [{nameHero}, handleInputChange] = useForm({
        nameHero: q
    });
    const history = useHistory();
    const heroes = useMemo(() => getHeroByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${nameHero}`);
    }

    return (
        <div>
            <h1>Search</h1>
            <div className="row">
                <div className="col-12 col-md-5 p-md-3">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="nameHero"
                            value={nameHero}
                            placeholder="Name of the superhero"
                            className="form-control"
                            onChange={handleInputChange}
                        />
                        <button className="btn btn-dark">Search</button>
                    </form>
                </div>
                <div className="col-12 col-md-7 d-flex flex-column align-items-center">
                    <h2>Results: </h2>
                    <p className="animate__animated animate__fadeIn">
                        {heroes.length} results have been found
                    </p>
                    <hr/>
                    {
                        heroes.map((hero) => (
                            <div className="w-75 p-md-2" key={hero.id}>
                                {
                                    <CardHero heroe={hero}/>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
