import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    totalResults: 0,
    totalPages: 0,
    nextPageToken: null,
    listData: [],
    error: null,
}

const getPopularListSuccess = (state, action) => {
    const totalResults = action.totalResults >= 100 ? 100 : action.totalResults
    const totalPages = Math.ceil(totalResults / 12)

    return updateObj(state, {
        loading: false,
        totalResults: totalResults,
        totalPages: totalPages,
        nextPageToken: action.nextPageToken,
        listData: action.listData,
        error: null,
    })
}

const getPopularListPage2Success = (state, action) => {
    const updatedListData = state.listData.concat(action.listData2)
    return updateObj(state, {
        loading: false,
        listData: updatedListData,
        error: null,
    })
}

const getPopularListFailed = (state, action) => {
    return updateObj(state, {
        error: action.error.message,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POPULAR_LIST_SUCCESS:
            return getPopularListSuccess(state, action)
        case actionTypes.GET_POPULAR_LIST_PAGE_TWO_SUCCESS:
            return getPopularListPage2Success(state, action)
        case actionTypes.GET_POPULAR_LIST_FAILED:
            return getPopularListFailed(state, action)
        default:
            return state
    }
}

export default reducer
