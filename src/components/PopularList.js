import React from 'react'

const PopularList = props => {
    return (
        <div className="videoContainer">
            <figure>
                <img src={props.img} alt="" />
            </figure>
            <span>{props.duration}</span>
            <div className="videoDetail">
                <h4>{props.title}</h4>
                <span>{props.des}</span>
            </div>
        </div>
    )
}

export default PopularList
