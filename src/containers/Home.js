import React, { Component } from 'react'
import { connect } from 'react-redux'

import PopularList from '../components/PopularList'
import * as actions from '../store/actions/index'
import Pagination from '../components/Pagination'

class Home extends Component {
    state = {
        currentPage: 0,
        loading: false,
    }

    componentDidMount() {
        this.props.onGetPopularList(process.env.REACT_APP_GOOGLE_API_KEY, this.props.token)
    }

    pevPageHandler = () => {
        this.setState(prevState => ({ currentPage: +prevState - 1 }))
    }

    nextPageHandler = () => {
        this.setState(prevState => ({ currentPage: +prevState + 1 }))
    }

    render() {
        // allPagesContent = data
        // const start = (page - 1) * itemsShown
        // const end = start + itemsShown
        // let pageContent = allPagesContent.slice(start, end)
        // demonstratePageContent(pageContent)

        let popularList = this.props.listData.map(item => {
            return <PopularList img={item.url} title={item.title} des={item.description} />
        })

        return (
            <section>
                {popularList}
                <Pagination />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return { token: state.token, listData: state.listData }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPopularList: (apiKey, token) => dispatch(actions.getPopularList(apiKey, token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
