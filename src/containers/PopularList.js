import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { icon } from '../utils/icon'

class PopularList extends Component {
    state = {
        like: false,
    }

    componentDidMount() {
        const favoriteVideo = JSON.parse(localStorage.getItem('favoriteVideo')) || []

        const foundIt = favoriteVideo.find(item => {
            return item.id === this.props.id
        })

        if (foundIt) {
            this.setState({ like: true })
        }
    }

    likeChange = () => {
        this.setState(
            prevState => ({ like: !prevState.like }),
            () => {
                this.state.like ? this.props.addLike(this.props.id) : this.props.removeLike(this.props.id)
            }
        )
    }

    render() {
        return (
            <div className="videoContainer">
                <Link to={`/video/${this.props.id}`}>
                    <figure>
                        <img src={this.props.img} alt="" />
                    </figure>
                </Link>
                <div className="timeAndLike">
                    <span>{this.props.duration}</span>
                    <span onClick={this.likeChange}>{this.state.like ? icon.solidHeart() : icon.emptyHeart()}</span>
                </div>
                <Link to={`/video/${this.props.id}`}>
                    <div className="videoDetail">
                        <h4>{this.props.title}</h4>
                        <span>{this.props.des}</span>
                    </div>
                </Link>
            </div>
        )
    }
}

export default PopularList
