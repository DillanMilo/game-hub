import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b7627ae25c9649f28832fe25a4b08f7b'
    }
});