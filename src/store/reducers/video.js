import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    totalResults: 0,
    totalPages: 0,
    nextPageToken: null,
    listData: [],
    recommendationData: [],
    error: null,
}

const getPopularListSuccess = (state, action) => {
    const totalResults = action.totalResults >= 100 ? 100 : action.totalResults
    const totalPages = Math.ceil(totalResults / 12)

    return updateObj(state, {
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
        listData: updatedListData,
        error: null,
    })
}

const getPopularListFailed = (state, action) => {
    return updateObj(state, {
        error: action.error.message,
    })
}

const getRecommendationSuccess = (state, action) => {
    return updateObj(state, {
        recommendationData: action.recommendationData,
        error: null,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POPULAR_LIST_SUCCESS:
            return getPopularListSuccess(state, action)
        case actionTypes.GET_POPULAR_LIST_PAGE_TWO_SUCCESS:
            return getPopularListPage2Success(state, action)
        case actionTypes.GET_LIST_FAILED:
            return getPopularListFailed(state, action)
        case actionTypes.GET_RECOMMENDATION_LIST_SUCCESS:
            return getRecommendationSuccess(state, action)
        default:
            return state
    }
}

export default reducer
