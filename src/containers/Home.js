import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PopularList from '../components/PopularList'
import * as actions from '../store/actions/index'
import Pagination from '../components/Pagination'

class Home extends Component {
    state = {
        currentPage: 1,
        loading: false,
    }

    componentDidMount() {
        this.props.onGetPopularList(process.env.REACT_APP_GOOGLE_API_KEY, this.props.nextPageToken)
    }

    nextPageSwitchHandler = () => {
        if (this.state.currentPage < this.props.totalPages) {
            this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }))
        }
    }

    prevPageSwitchHandler = () => {
        if (this.state.currentPage > 1) {
            this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }))
        }
    }

    currentPageSwitchHandler = e => {
        const page = e.target.innerText

        this.setState({ currentPage: +page })
    }

    render() {
        const itemsShown = 12
        const allPagesContent = this.props.listData
        const page = this.state.currentPage

        const start = (page - 1) * itemsShown
        const end = start + itemsShown
        let pageContent = allPagesContent.slice(start, end)

        let popularList = pageContent.map(item => {
            return (
                <PopularList
                    key={item.title}
                    img={item.url}
                    duration={item.duration}
                    title={item.title}
                    des={item.description}
                />
            )
        })

        return (
            <section>
                {popularList}
                <Pagination
                    totalPages={this.props.totalPages}
                    currentPage={this.state.currentPage}
                    nextPageSwitch={this.nextPageSwitchHandler}
                    prevPageSwitch={this.prevPageSwitchHandler}
                    currentPageSwitch={e => this.currentPageSwitchHandler(e)}
                />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        nextPageToken: state.nextPageToken,
        totalPages: state.totalPages,
        listData: state.listData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPopularList: (apiKey, token) => dispatch(actions.getPopularList(apiKey, token)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
