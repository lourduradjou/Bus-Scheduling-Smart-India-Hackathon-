// used as interceptors (for adding header in the request )

import axios from "axios"

const api =axios.create({
    baseURL : 'http://localhost:8000/'
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access")
        if (token){
            config.headers.authorization = `Bearer ${token}`
        }
        return config
    }
)

export default api