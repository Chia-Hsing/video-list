import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './store/reducers/video'
import App from './App'
import './sass/index.scss'

const composeEnhancers =
    process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
    <Provider store={store}>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <App />
        </HashRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
