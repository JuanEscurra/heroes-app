import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import {
    Redirect,
    Route,
    Switch,
  } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
export const DashboardRouter = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
