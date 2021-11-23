import React from 'react'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import Usersale from '../pages/Usersale';
import Download from '../pages/Download'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function Routes() {
    return (
        <Switch>
            <Route path="/download">
                <Download />
            </Route>
            <Route path="/usersale">
                <Usersale />
            </Route>
            <Route path="/auth/register">
                <Auth />
            </Route>
            <Route path="/auth/login">
                <Auth />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes
