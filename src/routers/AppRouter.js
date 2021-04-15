import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { AuthContext } from '../Auth/AuthContext';
import { LoginScreen} from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <Router>
            <div>
                <Switch>
                    
                    <Route  path="/login" component={LoginScreen}/>
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
