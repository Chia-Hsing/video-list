import React from 'react'

const PopularList = props => {
    return (
        <div>
            <figure>
                <img src={props.img} alt="" />
            </figure>
            <span>{props.duration}</span>
            <div>
                <h3>{props.title}</h3>
                <small>{props.des}</small>
            </div>
        </div>
    )
}

export default PopularList
