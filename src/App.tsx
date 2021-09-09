import React from 'react';
import ShoppingCart from "./components/ShoppingCart";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.modules.css'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <div className="container">
                        <ShoppingCart/>
                    </div>
                </Route>
                <Route path='/checkout'>
                    Checkout page
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
