import React, { useEffect, useReducer } from 'react'
// import { Redirect, useHistory } from 'react-router';
import { AuthContext } from './Auth/AuthContext';
import { authReducer } from './Auth/authReducer';
import { AppRouter } from './routers/AppRouter';
import { useHistory } from "react-router-dom";

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
