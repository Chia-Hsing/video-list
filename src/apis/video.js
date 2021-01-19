import axios from 'axios'

export const getPopularList = apiKey => {
    return axios.get('https://youtube.googleapis.com/youtube/v3/videos', {
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
    return axios.get('https://youtube.googleapis.com/youtube/v3/videos', {
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

export const getRecommendation = (apiKey, id) => {
    return axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            key: apiKey,
            maxResults: 8,
            relatedToVideoId: id,
            regionCode: 'us',
            type: 'video',
        },
    })
}
