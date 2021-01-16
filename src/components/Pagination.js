import React from 'react'

import '../sass/layout.scss'

const Pagination = props => {
    let pagination = []

    for (let i = 1; i <= props.totalPages; i++) {
        pagination.push(
            <li key={i} className="pageItem" onClick={props.currentPageSwitch}>
                {i}
            </li>
        )
    }

    return (
        <section className="pagination">
            <ul>
                <li className="pageItem" onClick={props.prevPageSwitch}>
                    {'<'}
                </li>
                {pagination}
                <li className="pageItem" onClick={props.nextPageSwitch}>
                    {'>'}
                </li>
            </ul>
        </section>
    )
}

export default Pagination
