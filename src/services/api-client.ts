import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b87e9e5d79004e6bb1bf798465e8cdfd'
    }
});