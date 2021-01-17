import React from 'react'
import { Link } from 'react-router-dom'

import { icon } from '../utils/icon'

const LikeList = props => {
    const removeLikeHandler = () => {
        props.removeLike(props.id)
    }
    return (
        <div className="videoContainer">
            <Link to={`/video/${props.id}`}>
                <figure>
                    <img src={props.img} alt="" />
                </figure>
            </Link>
            <div className="timeAndLike">
                <span>{props.duration}</span>
                <span onClick={removeLikeHandler}>{icon.solidHeart()}</span>
            </div>
            <Link to={`/video/${props.id}`}>
                <div className="videoDetail">
                    <h4>{props.title}</h4>
                    <span>{props.des}</span>
                </div>
            </Link>
        </div>
    )
}

export default LikeList
