import React, { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './component/header';

import Home from './pages/Home'

import api from './utils/api';

const App = () => {

    return (
        <Router>
            <Header />
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;