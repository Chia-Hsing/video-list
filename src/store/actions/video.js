import * as actionTypes from './actionTypes'
import * as apis from '../../apis/video'
import { timeConverter } from '../../utils/utilities'

export const getPopularList = apiKey => async dispatch => {
    try {
        const { data: list } = await apis.getPopularList(apiKey)

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
                id,
            } = item

            const time = timeConverter(duration)

            listData.push({ duration: time, description, title, url, id })
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

export const getPopularListPage2 = (apiKey, token) => async dispatch => {
    try {
        const { data: list } = await apis.getPopularListPage2(apiKey, token)

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
                id,
            } = item

            const time = timeConverter(duration)

            listData2.push({ duration: time, description, title, url, id })
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
