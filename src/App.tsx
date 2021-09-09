import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router'
import {history} from './store'
import './App.modules.css'
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";

function App() {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/' exact>
                    <div className="container">
                        <ShoppingCart/>
                    </div>
                </Route>
                <Route path='/checkout'>
                    <div className="container">
                        <Checkout/>
                    </div>
                </Route>
            </Switch>
        </ConnectedRouter>
    );
}

export default App;
