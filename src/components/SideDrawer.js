import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import { icon } from '../utils/icon'

const SideDrawer = props => {
    const classes = ['sideDrawer']

    if (props.show) {
        classes.push('active')
    }

    const searchInput = useRef(null)

    const getSearchInputValue = e => {
        const val = searchInput.current.value

        props.search(e, val)
    }

    return (
        <nav className={classes.join(' ')}>
            <div className="menuClose" onClick={props.close}>
                {icon.menuClose()}
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
        </nav>
    )
}

export default SideDrawer
