import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import { icon } from '../utils/icon'
import '../sass/layout.scss'

const Navbar = props => {
    const searchInput = useRef(null)

    const getSearchInputValue = e => {
        const val = searchInput.current.value

        props.search(e, val)
    }

    return (
        <header className="navbar">
            <div className="menu" onClick={props.open}>
                {icon.menu()}
            </div>
            <h2>VIDEO LIST</h2>
            <nav className="navItems">
                <Link to="/">Home</Link>
                <Link to="/like">My Favorite</Link>
                <form className="search" onSubmit={e => getSearchInputValue(e)}>
                    <input className="searchInput" ref={searchInput} type="search " placeholder="Search" />
                    <button className="btn" type="submit">
                        <span className="icon">{icon.search()}</span>
                    </button>
                </form>
            </nav>
        </header>
    )
}

export default Navbar
