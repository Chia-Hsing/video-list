import React from 'react'

const Pagination = props => {
    let pagination = []

    for (let i = 1; i <= props.totalPages; i++) {
        pagination.push(
            <li key={i} className="page-item" onClick={props.currentPageSwitch}>
                {i}
            </li>
        )
    }

    return (
        <section>
            <ul>
                <li className="page-item" onClick={props.prevPageSwitch}>
                    {'<'}
                </li>
                {pagination}
                <li className="page-item" onClick={props.nextPageSwitch}>
                    {'>'}
                </li>
            </ul>
        </section>
    )
}

export default Pagination
