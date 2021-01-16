import React, { useState } from 'react'

import { icon } from '../utils/icon'

const PopularList = props => {
    const [likeState, setLikeState] = useState(false)

    const iconChange = (event, props) => {
        setLikeState(!likeState)
    }

    return (
        <div className="videoContainer">
            <figure>
                <img src={props.img} alt="" />
            </figure>
            <div className="timeAndLike">
                <span>{props.duration}</span>
                <span onClick={iconChange}>{likeState ? icon.solidHeart() : icon.emptyHeart()}</span>
            </div>
            <div className="videoDetail">
                <h4>{props.title}</h4>
                <span>{props.des}</span>
            </div>
        </div>
    )
}

export default PopularList
