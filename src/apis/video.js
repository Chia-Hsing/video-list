import apiHelper from '../utils/apiHelper'

export const getPopularList = apiKey => {
    return apiHelper.get('https://youtube.googleapis.com/youtube/v3/videos', {
        params: {
            part: 'snippet,contentDetails',
            chart: 'mostPopular',
            maxResults: 50,
            key: apiKey,
            regionCode: 'us',
            videoCategoryId: 10,
        },
    })
}

export const getPopularListPage2 = (apiKey, token) => {
    return apiHelper.get('https://youtube.googleapis.com/youtube/v3/videos', {
        params: {
            part: 'snippet,contentDetails',
            chart: 'mostPopular',
            maxResults: 50,
            key: apiKey,
            regionCode: 'us',
            videoCategoryId: 10,
            pageToken: token,
        },
    })
}
