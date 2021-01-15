import * as actionTypes from './actionTypes'
import * as apis from '../../apis/video'

export const initPopularList = () => dispatch => {
    dispatch({ type: actionTypes.INIT_POPULAR_LIST })
}

export const getPopularList = (apiKey, token) => async dispatch => {
    try {
        const { data: list } = await apis.getPopularList(apiKey, token)

        let listData = []

        list.items.forEach(item => {
            const {
                contentDetails: { duration },
                snippet: {
                    description,
                    title,
                    thumbnails: {
                        standard: { url },
                    },
                },
            } = item

            listData.push({ duration, description, title, url })
        })

        const {
            pageInfo: { totalResults },
            nextPageToken,
        } = list

        dispatch({
            type: actionTypes.GET_POPULAR_LIST_SUCCESS,
            listData,
            totalResults,
            nextPageToken,
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POPULAR_LIST_FAILED,
            error,
        })
    }
}
