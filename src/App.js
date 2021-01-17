import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from './containers/Layout'
import Home from './containers/Home'
import Like from './containers/Like'
import Video from './containers/Video'

const App = () => {
    const routers = (
        <Switch>
            <Route path="/like" component={Like}></Route>
            <Route path="/video/:id" component={Video}></Route>
            <Route path="/" component={Home} exact></Route>
            <Redirect to="/" />
        </Switch>
    )

    return (
        <div>
            <Layout>{routers}</Layout>
        </div>
    )
}

export default App
