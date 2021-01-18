import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    totalResults: 0,
    nextPageToken: null,
    listData: [],
    searchResults: [],
    resultExist: true,
    error: null,
}

const getPopularListSuccess = (state, action) => {
    const totalResults = action.totalResults >= 100 ? 100 : action.totalResults

    return updateObj(state, {
        totalResults: totalResults,
        nextPageToken: action.nextPageToken,
        listData: action.listData,
        error: null,
    })
}

const getPopularListPage2Success = (state, action) => {
    const updatedListData = state.listData.concat(action.listData2)
    return updateObj(state, {
        listData: updatedListData,
        error: null,
    })
}

const getPopularListFailed = (state, action) => {
    return updateObj(state, {
        error: action.error.message,
    })
}

const initSearch = (state, action) => {
    return updateObj(state, { resultExist: true })
}

const getSearchResultsSuccess = (state, action) => {
    return updateObj(state, { searchResults: action.result, resultExist: true })
}

const getSearchResultsFailed = (state, action) => {
    return updateObj(state, { resultExist: false })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POPULAR_LIST_SUCCESS:
            return getPopularListSuccess(state, action)
        case actionTypes.GET_POPULAR_LIST_PAGE_TWO_SUCCESS:
            return getPopularListPage2Success(state, action)
        case actionTypes.GET_LIST_FAILED:
            return getPopularListFailed(state, action)
        case actionTypes.SEARCH_RESULTS_INIT:
            return initSearch(state, action)
        case actionTypes.GET_SEARCH_RESULTS_SUCCESS:
            return getSearchResultsSuccess(state, action)
        case actionTypes.GET_SEARCH_RESULTS_FAILED:
            return getSearchResultsFailed(state, action)
        default:
            return state
    }
}

export default reducer
