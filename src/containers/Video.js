import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import VideoPlayer from '../components/VideoPlayer'
import '../sass/video.scss'

class Video extends Component {
    state = {
        currentVideo: {},
    }

    componentDidMount() {
        const id = this.props.match.params.id

        const currentVideo = this.props.listData.find(item => {
            return item.id === id
        })

        this.setState({ currentVideo: currentVideo })
    }

    render() {
        console.log(Object.keys(this.state.currentVideo).length)

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

export default connect(mapPropsToState)(Video)
