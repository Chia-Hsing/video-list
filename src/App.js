import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from './containers/Layout'
import Home from './containers/Home'
import Like from './containers/Like'

const App = () => {
    const routers = (
        <Switch>
            <Route path="/" component={Home}></Route>
            <Route path="/like" component={Like}></Route>
        </Switch>
    )

    return (
        <div>
            <Layout>
                {routers}
                <Redirect to="/" />
            </Layout>
        </div>
    )
}

export default App
