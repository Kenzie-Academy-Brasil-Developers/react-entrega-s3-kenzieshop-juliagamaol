import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import shoppingCart from '../pages/shoppingCart'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/cart" component={shoppingCart}/>
        </Switch>
    )
}
