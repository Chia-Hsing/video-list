import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    totalResults: 0,
    totalPage: 0,
    token: null,
    listData: [],
    error: null,
}

const getPopularListSuccess = (state, action) => {
    const totalResults = action.totalResults >= 100 ? 100 : action.totalResults
    const totalPage = Math.ceil(totalResults / 12)

    return updateObj(state, {
        loading: false,
        totalResults: totalResults,
        totalPage: totalPage,
        token: action.nextPageToken,
        listData: action.listData,
        error: null,
    })
}

const getPopularListFailed = (state, action) => {
    return updateObj(state, {
        error: action.error,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POPULAR_LIST_SUCCESS:
            return getPopularListSuccess(state, action)
        case actionTypes.GET_POPULAR_LIST_FAILED:
            return getPopularListFailed(state, action)
        default:
            return state
    }
}

export default reducer
