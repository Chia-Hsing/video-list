import React from 'react'
import { Link } from 'react-router-dom'

import '../sass/layout.scss'

const Navbar = props => {
    return (
        <header className="nav">
            <h2>VIDEO LIST</h2>
            <nav className="navItems">
                <Link to="/">Home</Link>
                <Link to="/like">My Favorite</Link>
            </nav>
        </header>
    )
}

export default Navbar
