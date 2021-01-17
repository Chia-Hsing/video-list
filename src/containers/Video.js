import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import VideoPlayer from '../components/VideoPlayer'
import * as actions from '../store/actions/index'
import { icon } from '../utils/icon'
import '../sass/video.scss'

class Video extends Component {
    state = {
        currentVideo: {},
    }

    async componentDidMount() {
        const id = this.props.match.params.id

        await this.props.onGetRecommendation(process.env.REACT_APP_GOOGLE_API_KEY, id)

        const currentVideo = this.props.listData.find(item => {
            return item.id === id
        })

        this.setState({ currentVideo: currentVideo })
    }

    goBackHandler = () => {
        this.props.history.goBack()
    }

    render() {
        let videoPlayer = null
        if (Object.keys(this.state.currentVideo).length > 0) {
            videoPlayer = (
                <VideoPlayer
                    duration={this.state.currentVideo.duration}
                    des={this.state.currentVideo.description}
                    title={this.state.currentVideo.title}
                />
            )
        }

        return (
            <div className="videoPlayWrap">
                {this.props.listData.length === 0 ? <Redirect to="/" /> : null}
                <span className="goBack" onClick={this.goBackHandler}>
                    {icon.goBack()}
                </span>
                {videoPlayer}
            </div>
        )
    }
}

const mapPropsToState = state => {
    return {
        listData: state.listData,
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        onGetRecommendation: (apiKey, id) => dispatch(actions.getRecommendation(apiKey, id)),
    }
}

export default connect(mapPropsToState, mapPropsToDispatch)(Video)
