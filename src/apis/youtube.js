import axios from 'axios';

const KEY = 'AIzaSyAUCr8SY556VNGXMpZ8X_w1qnqL0tN9pDM';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

