import React from 'react'

import Navbar from '../components/Navbar'
import '../sass/layout.scss'

const Layout = props => {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    )
}

export default Layout
