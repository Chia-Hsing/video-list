import React from 'react'

import { Link } from 'react-router-dom'

const Pagination = props => {
    let pagination = null

    for (let i = 0; i < props.pageNum; i++) {
        pagination = (
            <li className="page-item">
                <Link to="#">i + 1</Link>
            </li>
        )
    }

    return (
        <section>
            <ol>
                <li className="page-item">
                    <Link to="#">{'<'}</Link>
                </li>
                {pagination}
                <li className="page-item">
                    <Link to="#">{'>'}</Link>
                </li>
            </ol>
        </section>
    )
}

export default Pagination
