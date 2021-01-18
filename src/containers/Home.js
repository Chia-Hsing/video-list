import React, { Component } from 'react'
import { connect } from 'react-redux'

import PopularList from './PopularList'
import * as actions from '../store/actions/index'
import Pagination from '../components/Pagination'
import '../sass/main.scss'

class Home extends Component {
    state = {
        currentPage: 1,
    }

    async componentDidMount() {
        await this.props.onGetPopularList(process.env.REACT_APP_GOOGLE_API_KEY)
        await this.props.getPopularListPage2(process.env.REACT_APP_GOOGLE_API_KEY, this.props.nextPageToken)
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

    addLikeHandler = id => {
        const favoriteVideo = JSON.parse(localStorage.getItem('favoriteVideo')) || []

        const video = this.props.listData.find(item => {
            return item.id === id
        })

        favoriteVideo.push(video)

        localStorage.setItem('favoriteVideo', JSON.stringify(favoriteVideo))
    }

    removeLikeHandler = id => {
        const favoriteVideo = JSON.parse(localStorage.getItem('favoriteVideo')) || []

        if (favoriteVideo.length === 0) {
            return
        }

        const videoArray = favoriteVideo.filter(item => {
            return item.id !== id
        })

        localStorage.setItem('favoriteVideo', JSON.stringify(videoArray))
    }

    render() {
        const itemsShown = 12
        const page = this.state.currentPage
        const start = (page - 1) * itemsShown
        const end = start + itemsShown

        let popularList = null

        if (this.props.searchResults.length > 0) {
            let searchResultsPageContent = this.props.searchResults.slice(start, end)

            popularList = searchResultsPageContent.map(item => {
                return (
                    <PopularList
                        key={item.title}
                        img={item.url}
                        duration={item.duration}
                        title={item.title}
                        des={item.description}
                        id={item.id}
                        addLike={id => this.addLikeHandler(id)}
                        removeLike={id => this.removeLikeHandler(id)}
                    />
                )
            })
        } else {
            let pageContent = this.props.listData.slice(start, end)

            popularList = pageContent.map(item => {
                return (
                    <PopularList
                        key={item.title}
                        img={item.url}
                        duration={item.duration}
                        title={item.title}
                        des={item.description}
                        id={item.id}
                        addLike={id => this.addLikeHandler(id)}
                        removeLike={id => this.removeLikeHandler(id)}
                    />
                )
            })
        }

        let pagination = null

        if (this.props.searchResults.length > 0) {
            const totalPages = Math.ceil(this.props.searchResults.length / 12)

            pagination = (
                <Pagination
                    totalPages={totalPages}
                    currentPage={this.state.currentPage}
                    nextPageSwitch={this.nextPageSwitchHandler}
                    prevPageSwitch={this.prevPageSwitchHandler}
                    currentPageSwitch={e => this.currentPageSwitchHandler(e)}
                />
            )
        } else {
            const totalPages = Math.ceil(this.props.totalResults / 12)
            pagination = (
                <Pagination
                    totalPages={totalPages}
                    currentPage={this.state.currentPage}
                    nextPageSwitch={this.nextPageSwitchHandler}
                    prevPageSwitch={this.prevPageSwitchHandler}
                    currentPageSwitch={e => this.currentPageSwitchHandler(e)}
                />
            )
        }

        return (
            <>
                <section className="wrap">
                    {this.props.resultExist ? null : alert('oops ... Can not find results that match your condition!!')}
                    {popularList}
                </section>
                {pagination}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        nextPageToken: state.nextPageToken,
        totalResults: state.totalResults,
        listData: state.listData,
        searchResults: state.searchResults,
        resultExist: state.resultExist,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPopularList: apiKey => dispatch(actions.getPopularList(apiKey)),
        getPopularListPage2: (apiKey, token) => {
            dispatch(actions.getPopularListPage2(apiKey, token))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
