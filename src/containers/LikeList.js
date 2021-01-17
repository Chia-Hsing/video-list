import React from 'react'

import { icon } from '../utils/icon'

const LikeList = props => {
    const removeLikeHandler = () => {
        props.removeLike(props.id)
    }
    return (
        <div className="videoContainer">
            <figure>
                <img src={props.img} alt="" />
            </figure>
            <div className="timeAndLike">
                <span>{props.duration}</span>
                <span onClick={removeLikeHandler}>{icon.solidHeart()}</span>
            </div>
            <div className="videoDetail">
                <h4>{props.title}</h4>
                <span>{props.des}</span>
            </div>
        </div>
    )
}

export default LikeList
