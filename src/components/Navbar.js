import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {
    return (
        <header className="nav-wrap">
            <div className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/like">My Favorite</Link>
            </div>
        </header>
    )
}

export default Navbar
