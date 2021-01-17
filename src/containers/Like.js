import React, { Component } from 'react'

import LikeList from '../components/LikeList'
import Pagination from '../components/Pagination'
import '../sass/main.scss'

class Like extends Component {
    state = {
        currentPage: 1,
        totalPages: 1,
        likeList: [],
    }

    componentDidMount() {
        const favoriteVideo = JSON.parse(localStorage.getItem('favoriteVideo')) || []
        const itemsShown = 12
        const len = favoriteVideo.length
        const totalPages = Math.ceil(len / itemsShown)

        this.setState({ likeList: favoriteVideo, totalPages })
    }

    nextPageSwitchHandler = () => {
        if (this.state.currentPage < this.state.totalPages) {
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

    removeLikeHandler = id => {
        const favoriteVideo = JSON.parse(localStorage.getItem('favoriteVideo')) || []

        const videoArray = favoriteVideo.filter(item => {
            return item.id !== id
        })

        localStorage.setItem('favoriteVideo', JSON.stringify(videoArray))
        this.setState({ likeList: videoArray })
    }

    render() {
        const page = this.state.currentPage
        const itemsShown = 12
        const start = (page - 1) * itemsShown
        const end = start + itemsShown
        let pageContent = this.state.likeList.slice(start, end)

        let likeList = pageContent.map(item => {
            return (
                <LikeList
                    key={item.title}
                    img={item.url}
                    duration={item.duration}
                    title={item.title}
                    des={item.description}
                    id={item.id}
                    removeLike={id => this.removeLikeHandler(id)}
                />
            )
        })

        return (
            <>
                <section className="wrap">{likeList}</section>
                <Pagination
                    totalPages={this.state.totalPages}
                    currentPage={this.state.currentPage}
                    nextPageSwitch={this.nextPageSwitchHandler}
                    prevPageSwitch={this.prevPageSwitchHandler}
                    currentPageSwitch={e => this.currentPageSwitchHandler(e)}
                />
            </>
        )
    }
}

export default Like
