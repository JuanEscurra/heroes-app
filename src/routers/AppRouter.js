import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AuthContext } from '../Auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen} from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
    const {user} = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    
                    <PublicRoute
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={user.logged}
                    />
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRouter } 
                        isAuthenticated={ user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}
