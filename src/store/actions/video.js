import * as actionTypes from './actionTypes'
import * as apis from '../../apis/video'
import { timeConverter } from '../../utils/utilities'

export const initPopularList = () => dispatch => {
    dispatch({ type: actionTypes.INIT_POPULAR_LIST })
}

export const getPopularList = (apiKey, token) => async dispatch => {
    try {
        const { data: list } = await apis.getPopularList(apiKey, token)
        console.log(list)

        let listData = []

        list.items.forEach(item => {
            const {
                contentDetails: { duration },
                snippet: {
                    description,
                    title,
                    thumbnails: {
                        medium: { url },
                    },
                },
            } = item

            const time = timeConverter(duration)

            listData.push({ duration: time, description, title, url })
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

        dispatch(getPopularListPage2(apiKey, token))
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POPULAR_LIST_FAILED,
            error,
        })
    }
}

const getPopularListPage2 = (apiKey, token) => async dispatch => {
    try {
        const { data: list } = await apis.getPopularList(apiKey, token)

        let listData2 = []

        list.items.forEach(item => {
            const {
                contentDetails: { duration },
                snippet: {
                    description,
                    title,
                    thumbnails: {
                        medium: { url },
                    },
                },
            } = item

            const time = timeConverter(duration)

            listData2.push({ duration: time, description, title, url })
        })

        dispatch({
            type: actionTypes.GET_POPULAR_LIST_PAGE_TWO_SUCCESS,
            listData2,
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POPULAR_LIST_FAILED,
            error,
        })
    }
}
