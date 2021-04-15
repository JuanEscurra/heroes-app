import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import {AuthContext} from '../../Auth/AuthContext'

export const Navbar = () => {

    const {user,dispatch} = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        dispatch({
            type: 'logout'
        });
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4 sticky-top">
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
                <div className="d-flex flex-column flex-sm-row">
                    <div className="navbar-text m-2">
                        {user.name}
                    </div>
                    <button onClick={handleLogout} className="nav-item nav-link btn btn-outline-primary">
                        {!!user ? 'logout' : 'login'}
                    </button>
                </div>
            </div>  
        </nav>
    )
}