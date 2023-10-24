import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '25d539829a8b444da101fb98607429d6'
    }
})