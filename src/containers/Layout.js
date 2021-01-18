import React, { useState } from 'react'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar'
import SideDrawer from '../components/SideDrawer'
import Backdrop from '../components/BackDrop'
import * as actions from '../store/actions/index'
import '../sass/layout.scss'

const Layout = props => {
    const searchHandler = (e, val) => {
        e.preventDefault()
        props.onInitSearch()
        props.onGetSearchResults(val, props.listData)
    }

    const [drawerOpen, setDrawerOpen] = useState(false)

    const drawerToggleHandler = () => {
        setDrawerOpen(prevState => {
            return !prevState
        })
    }

    const drawerCloseHandler = () => {
        setDrawerOpen(false)
    }

    return (
        <>
            <Navbar search={(e, val) => searchHandler(e, val)} open={() => drawerToggleHandler()} />
            <SideDrawer
                search={(e, val) => searchHandler(e, val)}
                close={() => drawerCloseHandler()}
                show={drawerOpen}
            />
            <Backdrop close={() => drawerCloseHandler()} show={drawerOpen} />
            <main>{props.children}</main>
        </>
    )
}

const mapStateToProps = state => {
    return { listData: state.listData }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitSearch: () => dispatch(actions.initSearch()),
        onGetSearchResults: (condition, listData) => dispatch(actions.getSearchResults(condition, listData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
