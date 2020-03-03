import axios from 'axios'

export default function axiosWithAuth() {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://space-cowboyz.herokuapp.com',
        headers: {
            "Authorization": token,
            "content-type": "application/json",
            
            
        }
    })
}