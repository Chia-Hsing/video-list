import React, { useEffect, useRef } from 'react'

import videojs from 'video.js'

const VideoPlayer = props => {
    const playerRef = useRef()

    useEffect(() => {
        const player = videojs(playerRef.current, {
            sources: [
                {
                    src:
                        'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
                    type: 'application/x-mpegURL',
                },
            ],
            autoplay: false,
            controls: true,
            muted: false,
            width: '960px',
            height: '540px',
        })

        return () => {
            if (player) {
                player.dispose()
            }
        }
    }, [])

    return (
        <>
            <div data-vjs-player className="videoContainer">
                <video className="video-js" ref={playerRef} />
            </div>
            <div className="videoDetail">
                <span>{props.duration}</span>
                <h4>{props.title}</h4>
                <span>{props.des}</span>
            </div>
        </>
    )
}

export default VideoPlayer
